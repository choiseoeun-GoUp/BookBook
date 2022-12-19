import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FMain>
        <h3>로고</h3>
        <p className="copy">
          Copyright © 2022 recostore.shop.,Ltd. All rights reserved.
        </p>
      </FMain>
    </FooterContainer>
  );
};

export default Footer;
const FooterContainer = styled.footer`
  width: 100%;
  height: 350px;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.Gray_020};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FMain = styled.section`
  max-width: 1280px;
  color: ${({ theme }) => theme.colors.White};
  padding: 45px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 200px;
    cursor: pointer;
    margin-bottom: 30px;
  }
  ul {
    max-width: 470px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 5px;
    margin-bottom: 50px;
    li {
      font-size: ${({ theme }) => theme.fontSizes.base};
      display: flex;
      align-items: center;
      p {
        margin-right: 7px;
        padding-top: 3px;
        cursor: pointer;
      }
    }
  }
  .copy {
    color: ${({ theme }) => theme.colors.Gray_020};
    font-weight: 200;
  }
`;
