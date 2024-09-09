import { makeAutoObservable } from "mobx";
import { IStore, RootStore } from "../rootStore";
import { useStoreContext } from "../RootStoreContext";
import autoBind from "auto-bind";
import { AdjustmentType, ItemInfo, VoucherCode } from "./types";

export type VoucherStoreState = {
  voucherCodes: VoucherCode[];
  showVoucherNotAppliedModal: boolean;
  showVoucherSelectionModal: boolean;
  showVoucherSummaryModal: boolean;
  showConfirmedModal: boolean;
  voucherFieldValue: string;
  voucherFieldError: string;
  voucherFieldHasError: boolean;
  itemInfo: ItemInfo;
  appliedVoucher?: VoucherCode;
};

export const useVoucherStore = (): VoucherStore => {
  return useStoreContext("VoucherStore");
};

const mockItemInfo = {
  location: "TUGGERANONG, ACT",
  locationDetailed: "Upper level, shop 10 South Point. Tuggeranong ACT 2900",
  membershipPlan: "Your plan DD",
  cost: 100,
  firstDebitDate: new Date("2024-07-30"),
  joiningFee: 0,
  activationFee: 0,
  passFee: 0,
};

const mockVoucherCodes = [
  {
    id: 1,
    code: "YOUR10OFF",
    title: "10% Off",
    expiry: new Date("2024-07-31"),
    adjustmentType: AdjustmentType.percentage,
    adjustmentValue: 10,
  },
  {
    id: 2,
    code: "YOUR50OFF",
    title: "$50.00 Off",
    expiry: new Date("2024-07-31"),
    adjustmentType: AdjustmentType.number,
    adjustmentValue: 50,
  },
];

export class VoucherStore implements IStore {
  public state: VoucherStoreState;
  public readonly rootStore: RootStore;

  public static getInitialState(): VoucherStoreState {
    return {
      voucherCodes: mockVoucherCodes,
      showVoucherNotAppliedModal: true,
      showVoucherSelectionModal: false,
      showVoucherSummaryModal: false,
      showConfirmedModal: false,
      voucherFieldValue: "",
      voucherFieldError: "",
      voucherFieldHasError: false,
      itemInfo: mockItemInfo,
      appliedVoucher: undefined,
    } as VoucherStoreState;
  }

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.state = VoucherStore.getInitialState();

    makeAutoObservable(this, { rootStore: false });
    autoBind(this);
  }

  public cleanState(): void {
    this.state = VoucherStore.getInitialState();
  }

  public onClickVoucherNotAppliedButton(): void {
    this.state.showVoucherSelectionModal = true;
    this.state.showConfirmedModal = false;
    this.state.showVoucherSummaryModal = false;
    this.state.showVoucherNotAppliedModal = false;
  }

  public onClickVoucherNotAppliedButtonFromSummary(): void {
    this.cleanState();
    this.onClickVoucherNotAppliedButton();
  }

  public onClickVoucherSelectionApplyButton(): void {
    if (this.validateVoucherCode()) {
      this.state.appliedVoucher = this.state.voucherCodes.find(
        (voucher: VoucherCode) => voucher.code === this.state.voucherFieldValue,
      );
      this.state.showVoucherSelectionModal = false;
      this.state.showConfirmedModal = false;
      this.state.showVoucherSummaryModal = true;
      this.state.showVoucherNotAppliedModal = false;
    }
  }

  public onClickVoucherSummaryApplyButton(): void {
    this.state.showVoucherSelectionModal = false;
    this.state.showConfirmedModal = true;
    this.state.showVoucherSummaryModal = false;
    this.state.showVoucherNotAppliedModal = false;
  }

  public onChangeVoucherFieldValue(voucher: string): void {
    this.state.voucherFieldValue = voucher;
  }

  public onCLickUseVoucherButton(code: string): void {
    this.state.voucherFieldValue = code;
    this.validateVoucherCode();
    console.log(JSON.parse(JSON.stringify(this.state.voucherFieldValue)));
  }

  public validateVoucherCode(): boolean {
    if (this.state.voucherFieldValue === "") {
      this.state.voucherFieldHasError = true;
      this.state.voucherFieldError = "No voucher code entered";
      return false;
    } else if (
      !this.state.voucherCodes.find(
        (voucher: VoucherCode) => voucher.code === this.state.voucherFieldValue,
      )
    ) {
      this.state.voucherFieldHasError = true;
      this.state.voucherFieldError = "Voucher code does not exist";
      return false;
    } else {
      this.state.voucherFieldHasError = false;
      this.state.voucherFieldError = "";
    }
    return true;
  }

  public calculateFee(): number {
    const item = this.state.itemInfo;
    let price = item.activationFee + item.joiningFee + item.passFee + item.cost;
    if (this.state.appliedVoucher) {
      if (
        this.state.appliedVoucher?.adjustmentType === AdjustmentType.percentage
      ) {
        price = price * (1 - this.state.appliedVoucher.adjustmentValue * 0.01);
      } else {
        price = price - this.state.appliedVoucher.adjustmentValue;
      }
    }
    return price;
  }

  public removeVoucher(): void {
    this.state.appliedVoucher = undefined;
  }

  public onCloseClick(): void {
    this.cleanState();
  }
}
