export type VoucherCode = {
  id: number;
  code: string;
  title: string;
  expiry: Date;
  adjustmentType: AdjustmentType;
  adjustmentValue: number;
};

export type ItemInfo = {
  location: string;
  locationDetailed: string;
  membershipPlan: string;
  cost: number;
  firstDebitDate: Date;
  joiningFee: number;
  activationFee: number;
  passFee: number;
};

export enum AdjustmentType {
  percentage,
  number,
}
