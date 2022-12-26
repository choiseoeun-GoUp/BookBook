import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <HLaptop>
        <NavLink to="/">
          <HLogo>
            Book<span className="first-color">B</span>
            <span className="second-color">o</span>
            <span className="third-color">o</span>k
          </HLogo>
        </NavLink>
        <HMenu>
          <li>
            <NavLink
              to="/category"
              className={({ isActive }) => (isActive ? "selected" : "not")}
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookrental"
              className={({ isActive }) => (isActive ? "selected" : "not")}
            >
              Book Rental
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "selected" : "not")}
            >
              WishList
            </NavLink>
          </li>
        </HMenu>
      </HLaptop>
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
`;
const HLaptop = styled.main`
  max-width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HLogo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.LogoSize};
  font-family: "GodoM", "Arial", sans-serif;
  color: ${({ theme }) => theme.colors.Gray_090};
  .first-color {
    color: ${({ theme }) => theme.colors.Orange_040};
  }
  .second-color {
    color: ${({ theme }) => theme.colors.Yellow_040};
  }
  .third-color {
    color: ${({ theme }) => theme.colors.Green_040};
  }
`;
const HMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  li + li {
    margin-left: 80px;
  }
  li {
    font-size: ${({ theme }) => theme.fontSizes.small};
    cursor: pointer;
  }

  .not {
    color: ${({ theme }) => theme.colors.Gray_090};
    &:hover {
      color: ${({ theme }) => theme.colors.Orange_040};
    }
  }
  .selected {
    color: ${({ theme }) => theme.colors.Orange_040};
    font-weight: 700;
  }
`;
