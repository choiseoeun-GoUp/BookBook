import React from "react";
import styled, { css } from "styled-components";

const SIZES = {
  sm: css`
    --button-padding: 8px 30px;
  `,
  md: css`
    --button-padding: 8px 58px;
  `,
  lg: css`
    --button-padding: 8px 90px;
  `,
  xl: css`
    --button-padding: 8px 140px;
  `,
};
const TYPE = {
  reverse: css`
    --button-font-color: ${({ theme }) => theme.colors.Orange_040};
    --button-bg-color: #ffffff;
    --button-hover-font-color: #ffffff;
    --button-hover-bg-color: ${({ theme }) => theme.colors.Orange_040};
  `,
};

const NewButton = ({ disabled, size, type, children }) => {
  const sizeStyle = SIZES[size];
  const typeStyle = TYPE[type];
  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      typeStyle={typeStyle}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.typeStyle}

  margin: 0;
  border: 2px solid ${({ theme }) => theme.colors.Orange_040};
  cursor: pointer;
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: var(--button-padding, 12px 16px);
  color: var(--button-font-color, #ffffff);
  background: var(--button-bg-color, #ff6737);
  &:active,
  &:hover,
  &:focus {
    color: var(--button-hover-font-color, #ff6737);
    background: var(--button-hover-bg-color, #fff);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #ff6737);
    color: var(--button-font-color, #ffffff);
  }
  span {
    margin-right: 6px;
  }
`;

export default NewButton;
