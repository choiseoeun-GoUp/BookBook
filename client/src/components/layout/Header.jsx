import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <HeaderContainer>
      <HLaptop className={scrollPosition < 100 ? "" : "scroll-change"}>
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
              to="/wishlist"
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
  height: 100px;
  z-index: 100;
  .scroll-change {
    position: fixed;
    top: -100px;
  }
  line-height: 100px;
`;
const HLaptop = styled.main`
  position: fixed;
  top: 0px;
  width: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 1s;
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
