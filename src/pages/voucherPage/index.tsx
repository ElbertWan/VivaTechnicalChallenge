import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import VoucherNonApply from "../../organisms/modals/voucherNonApply";
import { useVoucherStore } from "../../stores/VoucherStore";
import VoucherSelection from "../../organisms/modals/voucherSelection";
import VoucherSummary from "../../organisms/modals/voucherSummary";
import VoucherConfirmed from "../../organisms/modals/voucherConfirmed";

const VoucherHeader = styled.div`
  background-color: #16171c;
  color: #cfd1e2;
  width: 100%;
  height: 48px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 48px);
`;

const VoucherPage: FunctionComponent = () => {
  const voucherStore = useVoucherStore();
  return (
    <div>
      <VoucherHeader>Vouchers</VoucherHeader>
      <ModalWrapper>
        {voucherStore.state.showVoucherNotAppliedModal && (
          <VoucherNonApply
            onButtonClick={voucherStore.onClickVoucherNotAppliedButton}
          />
        )}
        {voucherStore.state.showVoucherSelectionModal && (
          <VoucherSelection
            fieldValue={voucherStore.state.voucherFieldValue}
            setFieldValue={voucherStore.onChangeVoucherFieldValue}
            onApplyButtonClick={voucherStore.onClickVoucherSelectionApplyButton}
            onUseVoucherClick={voucherStore.onCLickUseVoucherButton}
            hasError={voucherStore.state.voucherFieldHasError}
            errorText={voucherStore.state.voucherFieldError}
            vouchers={voucherStore.state.voucherCodes}
            onCloseClick={voucherStore.onCloseClick}
          />
        )}
        {voucherStore.state.showVoucherSummaryModal && (
          <VoucherSummary
            onCloseClick={voucherStore.onCloseClick}
            voucher={voucherStore.state.appliedVoucher}
            itemInfo={voucherStore.state.itemInfo}
            onButtonClick={voucherStore.onClickVoucherSummaryApplyButton}
            calculateFee={voucherStore.calculateFee}
            removeVoucher={voucherStore.removeVoucher}
            onApplyVoucherClick={
              voucherStore.onClickVoucherNotAppliedButtonFromSummary
            }
          />
        )}
        {voucherStore.state.showConfirmedModal && (
          <VoucherConfirmed onCloseClick={voucherStore.onCloseClick} />
        )}
      </ModalWrapper>
    </div>
  );
};

export default observer(VoucherPage);
