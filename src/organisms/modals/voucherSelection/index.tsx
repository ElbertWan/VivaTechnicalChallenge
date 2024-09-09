import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import TextFieldWithButton from "../../../atoms/textFieldWithButton";
import XMark from "../../../assets/xMark";
import { VoucherCode } from "../../../stores/VoucherStore/types";
import VoucherCoupons from "../../../molecules/voucherCoupon";

const ModalBox = styled.div`
  background-color: #15171c;
  width: max-content;
  text-align: center;
  padding: 0px 0px 22px 0px;
  margin: 0 auto;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #f9f9f9;
`;

const VoucherApplicationBox = styled.div`
  padding: 20px 24px;
`;

const HeaderWrapper = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #f9f9f9;
  border-bottom: 1px solid #26272f;
  margin-bottom: 20px;
`;

const IconButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 24px;
  background-color: #1b1c22;
  height: 28px;
  width: 28px;
  cursor: pointer;
  &:hover {
    background-color: #2e333a;
    transition: background-color 0.4s;
  }
`;

const IconWrapper = styled.div`
  margin: 0 auto;
  height: 20px;
`;

const Divider = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  padding: 0px 24px;
`;

const DividerLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const DividerSolidLine = styled.hr`
  background-color: #636674;
  border: none;
  height: 1px;
  width: 100%;
`;

const DividerText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #636674;
  margin: 0px;
`;

type VoucherSelectionProps = {
  onApplyButtonClick: () => void;
  onUseVoucherClick: (code: string) => void;
  hasError: boolean;
  errorText: string;
  setFieldValue: (value: string) => void;
  fieldValue: string;
  onCloseClick: () => void;
  vouchers: VoucherCode[];
};

const CouponsWrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.p`
  text-align: left;
  margin-top: 0px;
  margin-bottom: 4px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #cfd1e2;
`;

const VoucherSelection: FunctionComponent<VoucherSelectionProps> = ({
  onApplyButtonClick,
  fieldValue,
  onUseVoucherClick,
  hasError,
  errorText,
  setFieldValue,
  onCloseClick,
  vouchers,
}) => {
  return (
    <ModalBox>
      <HeaderWrapper>
        <Header>Apply voucher</Header>
        <IconButton onClick={onCloseClick}>
          <IconWrapper>
            <XMark />
          </IconWrapper>
        </IconButton>
      </HeaderWrapper>
      <VoucherApplicationBox>
        <TextFieldWithButton
          fieldValue={fieldValue}
          label="Do you have a voucher code?"
          setFieldValue={setFieldValue}
          onButtonClick={onApplyButtonClick}
          hasError={hasError}
          errorText={errorText}
        />
        <Divider>
          <DividerLineWrapper>
            <DividerSolidLine />
          </DividerLineWrapper>
          <DividerText>or</DividerText>
          <DividerLineWrapper>
            <DividerSolidLine />
          </DividerLineWrapper>
        </Divider>
        <CouponsWrapper>
          <Label>Your available vouchers</Label>
          {vouchers && (
            <>
              {vouchers.map((voucher) => {
                return (
                  <VoucherCoupons
                    voucher={voucher}
                    onUseVoucherClick={onUseVoucherClick}
                  />
                );
              })}
            </>
          )}
        </CouponsWrapper>
      </VoucherApplicationBox>
    </ModalBox>
  );
};

export default observer(VoucherSelection);
