import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <MainContainer>
        <div>메인입니다.</div>
      </MainContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  background-color: pink;
`;
