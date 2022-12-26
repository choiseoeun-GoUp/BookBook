import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdOutlineMenuBook } from "react-icons/md";

const Footer = () => {
  return (
    <FooterContainer>
      <FMain>
        <h3>
          <span>{<MdOutlineMenuBook size={30} />}</span>
          BookBook
        </h3>
        <ul>
          <li>
            <NavLink to="/category" className="base">
              Category
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookrental" className="base">
              Book Rental
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishlist" className="base">
              WishList
            </NavLink>
          </li>
        </ul>
        <p className="copy">
          Copyright © 2022 bookbook.shop.,Ltd. All rights reserved.
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
  padding: 80px 0;
`;

const FMain = styled.section`
  max-width: 1280px;
  height: 100%;
  color: ${({ theme }) => theme.colors.White};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xxxxl};
    font-family: "GodoM", "Arial", sans-serif;
    color: ${({ theme }) => theme.colors.Gray_060};
    span {
      margin-right: 10px;
      position: relative;
      top: 3px;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    li + li {
      margin-left: 80px;
    }
    li {
      font-size: ${({ theme }) => theme.fontSizes.base};
      cursor: pointer;
      .base {
        color: ${({ theme }) => theme.colors.Gray_060};
        &:hover {
          color: ${({ theme }) => theme.colors.Orange_040};
        }
      }
    }
  }
  .copy {
    font-size: ${({ theme }) => theme.fontSizes.xs};

    color: ${({ theme }) => theme.colors.Gray_040};
    font-weight: 200;
  }
`;
