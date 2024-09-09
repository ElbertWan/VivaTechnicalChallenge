import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import XMark from "../../../assets/xMark";
import TickCircle from "../../../assets/tickCircle";
import CustomButton, { ButtonStyle } from "../../../atoms/customButton";

const ModalBox = styled.div`
  background-color: #15171c;
  width: max-content;
  text-align: center;
  padding: 0px 0px 22px 0px;
  margin: 0 auto;
  border-radius: 8px;
  min-width: 400px;
  @media (max-width: 768px) {
    width: 80%;
    min-width: unset;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #f9f9f9;
  margin: 8px 0px;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #cfd1e2;
  margin-bottom: 20px;
`;

const HeaderWrapper = styled.div`
  padding: 12px 12px 0px 12px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  color: #f9f9f9;
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

const TickWrapper = styled.div`
  margin: 0px auto 20px auto;
  height: 74px;
  width: 74px;
`;

const ButtonWrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

type VoucherConfirmationProps = {
  onCloseClick: () => void;
};

const VoucherConfirmation: FunctionComponent<VoucherConfirmationProps> = ({
  onCloseClick,
}) => {
  return (
    <ModalBox>
      <HeaderWrapper>
        <IconButton onClick={onCloseClick}>
          <IconWrapper>
            <XMark />
          </IconWrapper>
        </IconButton>
      </HeaderWrapper>
      <TickWrapper>
        <TickCircle />
      </TickWrapper>
      <Title>Voucher Confirmed!</Title>
      <SubTitle>The voucher has been applied successfully.</SubTitle>
      <ButtonWrapper>
        <CustomButton
          style={ButtonStyle.Secondary}
          text="Close"
          textcolour="#CFD1E2"
          buttoncolour="#26272F"
          onButtonClick={onCloseClick}
          hovercolour="#2e333a"
        />
      </ButtonWrapper>
    </ModalBox>
  );
};

export default observer(VoucherConfirmation);
