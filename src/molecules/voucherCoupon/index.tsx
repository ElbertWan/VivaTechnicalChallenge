import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { VoucherCode } from "../../stores/VoucherStore/types";
import CustomButton, { ButtonStyle } from "../../atoms/customButton";
import { observer } from "mobx-react-lite";

const CouponWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  justify-content: left;
  border: 1px solid #363843;
  padding: 20px;
`;

const CodeButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: left;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-align: left;
  color: #f9f9f9;
  margin-bottom: 4px;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #cfd1e2;
  text-align: left;
  margin-bottom: 8px;
`;

const Code = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #cfd1e2;
  text-align: left;
`;
const TextAlignmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type VoucherCouponsProps = {
  voucher: VoucherCode;
  onUseVoucherClick: (id: string) => void;
};

const VoucherCoupons: FunctionComponent<VoucherCouponsProps> = ({
  voucher,
  onUseVoucherClick,
}) => {
  const onButtonClick = () => {
    onUseVoucherClick(voucher.code);
  };
  return (
    <CouponWrapper>
      <Title data-testid="voucherTitle">{voucher.title}</Title>
      <SubTitle data-testid="voucherSubTitle">
        Expiry: {voucher.expiry.toLocaleDateString("en-GB")}
      </SubTitle>
      <CodeButtonWrapper>
        <TextAlignmentWrapper>
          <Code>{voucher.code}</Code>
        </TextAlignmentWrapper>
        <CustomButton
          style={ButtonStyle.Secondary}
          text="USE THIS VOUCHER"
          textcolour="#BBF247"
          buttoncolour="#16171c"
          onButtonClick={onButtonClick}
          hovercolour="#2e333a"
        />
      </CodeButtonWrapper>
    </CouponWrapper>
  );
};

export default observer(VoucherCoupons);
