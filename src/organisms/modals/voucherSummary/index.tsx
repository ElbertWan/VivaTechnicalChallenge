import React, { FunctionComponent } from "react";
import styled from "styled-components";
import CustomButton, { ButtonStyle } from "../../../atoms/customButton";
import { observer } from "mobx-react-lite";
import XMark from "../../../assets/xMark";
import { ItemInfo, VoucherCode } from "../../../stores/VoucherStore/types";

const ModalBox = styled.div`
  background-color: #15171c;
  width: auto;
  margin: 0 auto;
  border-radius: 8px;
  min-width: 600px;
  @media (max-width: 768px) {
    width: 80%;
    min-width: unset;
  }
`;

const SummaryWrapper = styled.div`
  padding: 24px;
`;

const SummaryDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  justify-content: left;
  border: 1px solid #363843;
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 12px;
  padding: 40px 0px 20px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
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

const VertCenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
  color: #f9f9f9;
  margin-bottom: 4px;
`;

const SubTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #cfd1e2;
  margin-top: 4px;
`;

const Caption = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #9a9cae;
`;

const StrongBody = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  color: #cfd1e2;
`;

const Body = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #cfd1e2;
`;

const TableForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 6px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const TableFormStrong = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const VoucherCoupon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CostDescription = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #cfd1e2;
`;

const Cost = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  text-transform: uppercase;
  color: #bbf247;
`;

const Divider = styled.hr`
  background-color: #636674;
  border: none;
  height: 1px;
  width: 100%;
  margin: 12px 0px;
`;

const VoucherWrapper = styled.div`
  border: 1px solid #309c61;
  border-radius: 8px;
  padding: 8px 12px;
`;

const VoucherCodeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`;

const VoucherCodeText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #50cd89;
`;

type VoucherSummaryProps = {
  onButtonClick: () => void;
  onCloseClick: () => void;
  itemInfo: ItemInfo;
  voucher?: VoucherCode;
  calculateFee: () => number;
  removeVoucher: () => void;
  onApplyVoucherClick: () => void;
};

const VoucherSummary: FunctionComponent<VoucherSummaryProps> = ({
  onButtonClick,
  onCloseClick,
  itemInfo,
  voucher,
  calculateFee,
  removeVoucher,
  onApplyVoucherClick,
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
      <SummaryWrapper>
        <SummaryDetailsWrapper>
          <Title>YOUR MEMBERSHIP</Title>
          <Divider />
          <SubTitle>{itemInfo.location}</SubTitle>
          <Caption>{itemInfo.locationDetailed}</Caption>
          <Divider />
          <TableFormStrong>
            <StrongBody>Membership Plan</StrongBody>
            <Body>{itemInfo.membershipPlan}</Body>
          </TableFormStrong>
          <TableForm>
            <Body>Membership amount</Body>
            <Body>${Number(itemInfo.cost.toFixed(2))}</Body>
          </TableForm>
          <Divider />
          <TableForm>
            <VertCenterWrapper>
              <Body>PromoCode</Body>
            </VertCenterWrapper>
            {voucher && (
              <VoucherWrapper>
                <VoucherCoupon>
                  <VoucherCodeTextWrapper>
                    <VoucherCodeText>{voucher?.code} applied</VoucherCodeText>
                    <Body>{voucher.title}</Body>
                  </VoucherCodeTextWrapper>
                  <VertCenterWrapper>
                    <IconButton onClick={removeVoucher}>
                      <IconWrapper>
                        <XMark />
                      </IconWrapper>
                    </IconButton>
                  </VertCenterWrapper>
                </VoucherCoupon>
              </VoucherWrapper>
            )}
            {!voucher && (
              <CustomButton
                style={ButtonStyle.Primary}
                text="Apply Voucher"
                textcolour="#CFD1E2"
                buttoncolour="#26272F"
                onButtonClick={onApplyVoucherClick}
                hovercolour="#2e333a"
              />
            )}
          </TableForm>
          <Divider />
          <TableForm>
            <Body>First Direct Debit</Body>
            <Body>{itemInfo.firstDebitDate.toLocaleDateString("en-GB")}</Body>
          </TableForm>
          <Divider />
          <TableFormStrong>
            <StrongBody>Discounted price after applying voucher</StrongBody>
          </TableFormStrong>
          <TableForm>
            <Body>Joining Fee</Body>
            <Body>${Number(itemInfo.joiningFee.toFixed(2))}</Body>
          </TableForm>
          <TableForm>
            <Body>Activation fee</Body>
            <Body>${Number(itemInfo.activationFee.toFixed(2))}</Body>
          </TableForm>
          <TableForm>
            <Body>Pass fee</Body>
            <Body>${Number(itemInfo.passFee.toFixed(2))}</Body>
          </TableForm>
          <Divider />
          <TableForm>
            <CostDescription>Cost per fortnight</CostDescription>
            <Cost>${Number(calculateFee().toFixed(2))}</Cost>
          </TableForm>
        </SummaryDetailsWrapper>
        <ButtonWrapper>
          <CustomButton
            style={ButtonStyle.Secondary}
            text="Close"
            textcolour="#CFD1E2"
            buttoncolour="#26272F"
            onButtonClick={onCloseClick}
            hovercolour="#2e333a"
          />
          <CustomButton
            style={ButtonStyle.Secondary}
            text="Apply"
            textcolour="#071f00"
            buttoncolour="#BBF247"
            onButtonClick={onButtonClick}
            hovercolour="#d3f385"
            disabled={!voucher ? true : false}
          />
        </ButtonWrapper>
      </SummaryWrapper>
    </ModalBox>
  );
};

export default observer(VoucherSummary);
