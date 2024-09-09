import React, { FunctionComponent } from "react";
import styled from "styled-components";
import CustomButton, { ButtonStyle } from "../../../atoms/customButton";
import { observer } from "mobx-react-lite";

const ModalBox = styled.div`
  background-color: #15171c;
  width: 287px;
  /* min-height: 184px; */
  text-align: center;
  padding: 22px 0px;
  margin: 0 auto;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: fit-content;
  }
`;

const Header = styled.div`
  text-align: center;

  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #f9f9f9;
  padding-bottom: 22px;
`;

const VoucherApplicationBox = styled.div`
  padding: 0px 24px;
  border-top: 1px solid #26272f;
`;

const SubText = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #9a9cae;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

type VoucherNonApplyProps = {
  onButtonClick: () => void;
};

const VoucherNonApply: FunctionComponent<VoucherNonApplyProps> = ({
  onButtonClick,
}) => {
  return (
    <ModalBox>
      <Header>Vouchers</Header>
      <VoucherApplicationBox>
        <SubText>You haven't applied a voucher yet</SubText>
        <ButtonWrapper>
          <CustomButton
            style={ButtonStyle.Primary}
            text="Apply Voucher"
            textcolour="#CFD1E2"
            buttoncolour="#26272F"
            onButtonClick={onButtonClick}
            hovercolour="#2e333a"
          />
        </ButtonWrapper>
      </VoucherApplicationBox>
    </ModalBox>
  );
};

export default observer(VoucherNonApply);
