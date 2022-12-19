import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <OutLine>
        <p className="bg-line-1"></p>
        <p className="bg-line-2"></p>
        <p className="bg-line-3"></p>
        <p className="bg-line-4"></p>
        <p className="bg-line-5"></p>
        <p className="bg-circle"></p>
      </OutLine>
      <Footer />
    </Container>
  );
};

export default Layout;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const MainContent = styled.section`
  margin-top: 100px;
  position: relative;
  z-index: 1;
  flex: 1;
`;

const OutLine = styled.div`
  z-index: -1;
  .bg-line-1 {
    width: 0.5px;
    height: 200%;
    background-color: #d2d2d2;
    position: absolute;
    top: -100px;
    left: 45px;
  }
  .bg-line-2 {
    width: 0.5px;
    height: 150%;
    background-color: #d2d2d2;
    position: absolute;
    top: -100px;
    left: 196px;
  }
  .bg-line-3 {
    width: 0.5px;
    height: 150%;
    background-color: #d2d2d2;
    position: absolute;
    top: -100px;
    right: 150px;
  }
  .bg-line-4 {
    width: 0.5px;
    height: 150%;
    background-color: #d2d2d2;
    position: absolute;
    top: -100px;
    right: 310px;
  }
  .bg-circle {
    width: 240px;
    height: 240px;
    border-radius: 50%;
    border: 0.5px solid #d2d2d2;
    position: absolute;
    top: 150px;
    right: 400px;
  }
`;
