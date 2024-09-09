import { renderHook } from "@testing-library/react";
import { useVoucherStore, VoucherStore } from ".";
import { RootStore } from "../rootStore"
import { useStoreContext } from "../RootStoreContext";
import { Mock, vi, VitestUtils } from "vitest";


vi.mock('../RootStoreContext');

describe('VoucherStore tests', () => {
    const createStores = () => {
        const rootStore = new RootStore();
        rootStore.register('VoucherStore', new VoucherStore(rootStore));

        return {
            rootStore,
            voucherStore: rootStore.getStore<VoucherStore>('VoucherStore'),
        };
    }

    beforeEach(() => {
        vi.resetAllMocks();
    })

    it('should use hook' , () => {
        const {voucherStore} = createStores();
        (useStoreContext as Mock).mockReturnValue(voucherStore);

        const {result} = renderHook(useVoucherStore);

        expect(useStoreContext).toBeCalledWith('VoucherStore');
        expect(result.current).toBe(voucherStore);
    })

    it('should onClickVoucherNotAppliedButton correctly', () => {
        const {voucherStore} = createStores();
        voucherStore.onClickVoucherNotAppliedButton();

        expect (voucherStore.state.showVoucherSelectionModal).toBe(true);
        expect (voucherStore.state.showConfirmedModal).toBe(false);
        expect (voucherStore.state.showVoucherSummaryModal).toBe(false);
        expect (voucherStore.state.showVoucherNotAppliedModal).toBe(false);
    })

    it('should onClickVoucherSelectionApplyButton correctly', () => {
        const {voucherStore} = createStores();
        voucherStore.onChangeVoucherFieldValue("YOUR10OFF");
        voucherStore.onClickVoucherSelectionApplyButton();

        expect (voucherStore.state.showVoucherSelectionModal).toBe(false);
        expect (voucherStore.state.showConfirmedModal).toBe(false);
        expect (voucherStore.state.showVoucherSummaryModal).toBe(true);
        expect (voucherStore.state.showVoucherNotAppliedModal).toBe(false);
    })

    it('should onClickVoucherSummaryApplyButton correctly', () => {
        const {voucherStore} = createStores();
        voucherStore.onClickVoucherSummaryApplyButton();

        expect (voucherStore.state.showVoucherSelectionModal).toBe(false);
        expect (voucherStore.state.showConfirmedModal).toBe(true);
        expect (voucherStore.state.showVoucherSummaryModal).toBe(false);
        expect (voucherStore.state.showVoucherNotAppliedModal).toBe(false);
    })

    it('should onChangeVoucherFieldValue correctly', () => {
        const {voucherStore} = createStores();
        voucherStore.onChangeVoucherFieldValue('test123');

        expect (voucherStore.state.voucherFieldValue).toBe('test123');
    })

    it('should validateVoucherCode correctly empty', () => {
        const {voucherStore} = createStores();
        voucherStore.onChangeVoucherFieldValue('');
        voucherStore.validateVoucherCode();

        expect (voucherStore.state.voucherFieldHasError).toBe(true);
        expect (voucherStore.state.voucherFieldError).toBe('No voucher code entered');
    })

    it('should validateVoucherCode correctly does not exist', () => {
        const {voucherStore} = createStores();
        voucherStore.onChangeVoucherFieldValue('asdf');
        voucherStore.validateVoucherCode();

        expect (voucherStore.state.voucherFieldHasError).toBe(true);
        expect (voucherStore.state.voucherFieldError).toBe('Voucher code does not exist');
    })

    it('should validateVoucherCode correctly valid', () => {
        const {voucherStore} = createStores();
        voucherStore.onChangeVoucherFieldValue('YOUR10OFF');
        voucherStore.validateVoucherCode();

        expect (voucherStore.state.voucherFieldHasError).toBe(false);
        expect (voucherStore.state.voucherFieldError).toBe('');
    })

    it('should removeVoucher correctly valid', () => {
        const {voucherStore} = createStores();
        voucherStore.onChangeVoucherFieldValue('YOUR10OFF');
        voucherStore.removeVoucher();

        expect (voucherStore.state.appliedVoucher).toBe(undefined);
    })
})