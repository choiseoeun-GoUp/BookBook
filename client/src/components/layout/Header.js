import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HLaptop>
        <HLogo>
          Book<span className="first-color">B</span>
          <span className="second-color">o</span>
          <span className="third-color">o</span>k
        </HLogo>
        <HMenu>
          <li>Category</li>
          <li>Book Rental</li>
          <li>WishList</li>
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
  /* box-shadow: 0px 4px 20px #ececec; */
  /* background-color: #fcfcfc; */
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

  /* .not {
    color: ${({ theme }) => theme.colors.Gray_090};
    &:hover {
      color: ${({ theme }) => theme.colors.Blue_030};
    }
  }
  .selected {
    color: ${({ theme }) => theme.colors.Blue_030};
    font-weight: 700;
  } */
`;
