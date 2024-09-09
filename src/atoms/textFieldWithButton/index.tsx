import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import CustomButton, { ButtonStyle } from "../customButton";

const VoucherApplicationBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: left;
    gap: 12px;
  }
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

const ErrorText = styled.div`
  margin-top: 5px;
  text-align: left;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ff0033;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
`;

const TextField = styled.input`
  padding: 12px;
  width: 412px;
  background-color: #26272f;
  border: 1px solid #26272f;
  border-radius: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #60bb8e;
  @media (max-width: 768px) {
    width: auto;
  }
`;

type TextFieldWithButtonProps = {
  onButtonClick: () => void;
  hasError?: boolean;
  errorText?: string;
  label?: string;
  fieldValue: string;
  setFieldValue: (value: string) => void;
};

const TextFieldWithButton: FunctionComponent<TextFieldWithButtonProps> = ({
  label,
  onButtonClick,
  hasError,
  errorText,
  fieldValue,
  setFieldValue,
}) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <VoucherApplicationBox>
        <TextWrapper>
          <TextField
            type="text"
            id="text"
            placeholder="Enter your voucher code here"
            value={fieldValue}
            onChange={(e) => {
              setFieldValue(e.target.value);
            }}
          />
          {hasError && <ErrorText>Error: {errorText}</ErrorText>}
        </TextWrapper>
        <CustomButton
          style={ButtonStyle.Secondary}
          text="Apply"
          textcolour="#CFD1E2"
          buttoncolour="#26272F"
          onButtonClick={onButtonClick}
          hovercolour="#2e333a"
        />
      </VoucherApplicationBox>
    </>
  );
};

export default observer(TextFieldWithButton);
