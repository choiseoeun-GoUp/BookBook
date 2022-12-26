import React from "react";
import styled from "styled-components";
import { BsArrowUpShort } from "react-icons/bs";
const scrollToTopBtn = ({ handleClick }) => {
  return (
    <>
      <ScrollContainer>
        <BsArrowUpShort size="38" color="#fff" onClick={handleClick} />
      </ScrollContainer>
    </>
  );
};

export default scrollToTopBtn;
const ScrollContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 15px;
  width: 38px;
  height: 38px;
  border-radius: 38px;
  background-color: ${({ theme }) => theme.colors.Orange_040};
  z-index: 1000;
  cursor: pointer;
`;
