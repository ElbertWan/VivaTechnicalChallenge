import { observer } from "mobx-react-lite";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

export enum ButtonStyle {
  Primary,
  Secondary,
}

const PrimaryButton = styled.button<{
  textcolour: string;
  buttoncolour: string;
  hovercolour: string;
}>`
  color: ${(props) => {
    return props.textcolour;
  }};
  background-color: ${(props) => {
    return props.buttoncolour;
  }};
  border-radius: 6px;
  text-align: center;
  padding: 8px 12px;
  gap: 12px;
  width: max-content;
  font-family: "Gotham", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    background-color: ${(props) => {
      return props.hovercolour;
    }};
    transition: background-color 0.4s;
  }
  cursor: pointer;
  &:disabled {
    background-color: #cccccc;
    color: #666666;
  }
  &:active {
    opacity: 0.8;
    border: none;
    outline: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SecondaryButton = styled.button<{
  textcolour: string;
  buttoncolour: string;
  hovercolour: string;
}>`
  color: ${(props) => {
    return props.textcolour;
  }};
  background-color: ${(props) => {
    return props.buttoncolour;
  }};
  border-radius: 6px;
  padding: 12px 12px;
  gap: 12px;
  text-align: center;
  width: max-content;
  font-family: "Gotham", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => {
      return props.hovercolour;
    }};
    transition: background-color 0.4s;
  }
  &:disabled {
    background-color: #cccccc;
    color: #666666;
  }
  &:active {
    opacity: 0.8;
    border: none;
    outline: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonText = styled.div`
  margin: 0 auto;
`;

type CustomButtonProps = {
  text: string;
  style: ButtonStyle;
  textcolour: string;
  buttoncolour: string;
  onButtonClick: () => void;
  hovercolour: string;
  disabled?: boolean;
};

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  text,
  style,
  textcolour,
  buttoncolour,
  onButtonClick,
  hovercolour,
  disabled,
}) => {
  switch (style) {
    case ButtonStyle.Primary: {
      return (
        <PrimaryButton
          textcolour={textcolour}
          buttoncolour={buttoncolour}
          onClick={onButtonClick}
          hovercolour={hovercolour}
          disabled={disabled}
        >
          <ButtonText>{text}</ButtonText>
        </PrimaryButton>
      );
    }
    case ButtonStyle.Secondary: {
      return (
        <SecondaryButton
          textcolour={textcolour}
          buttoncolour={buttoncolour}
          onClick={onButtonClick}
          hovercolour={hovercolour}
          disabled={disabled}
        >
          <ButtonText>{text}</ButtonText>
        </SecondaryButton>
      );
    }
  }
};

export default observer(CustomButton);
