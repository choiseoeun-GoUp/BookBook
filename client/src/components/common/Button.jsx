import React from "react";
import styled, { css } from "styled-components";
const SIZES = {
  sm: css`
    --button-padding: 8px 40px;
  `,
  md: css`
    --button-padding: 8px 60px;
  `,
  lg: css`
    --button-padding: 8px 90px;
  `,
};
const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: 2px solid transparent;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  padding: var(--button-padding, 12px 16px);
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1rem;
  ${(p) => p.sizeStyle}
  ${(props) => {
    const selected = props.theme.colors[props.color];
    const fontColor = props.theme.colors[props.fontColor];
    return css`
      background: ${selected};
      color: ${fontColor};
      &:hover {
        background: red;
      }
      &:active {
        background: red;
      }
    `;
  }}
`;

function Button({ children, size, ...rest }) {
  const sizeStyle = SIZES[size];
  return (
    <StyledButton sizeStyle={sizeStyle} {...rest}>
      {children}
    </StyledButton>
  );
}
Button.defaultProps = {
  color: "Orange_040",
};
export default Button;
