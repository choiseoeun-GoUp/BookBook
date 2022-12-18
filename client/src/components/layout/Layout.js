import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <Container>
      <Header />
      <MainSection>
        <p className="bg-line-1"></p>
        <p className="bg-line-2"></p>
        <p className="bg-line-3"></p>
        <p className="bg-line-4"></p>
        <p className="bg-line-5"></p>
        <p className="bg-circle"></p>
        <Outlet />
      </MainSection>
      <Footer />
    </Container>
  );
};

export default Layout;
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fcfcfc;
`;
const MainSection = styled.section`
  margin: 0 auto;
  max-width: 100%;
  min-height: 1000px;
  margin-top: 100px;

  .bg-line-1 {
    width: 0.5px;
    height: 100%;
    background-color: #d2d2d2;
    position: absolute;
    top: -100px;
    left: 45px;
  }
  .bg-line-2 {
    width: 0.5px;
    height: 100%;
    background-color: #d2d2d2;
    position: absolute;
    top: -100px;
    left: 196px;
  }
  .bg-line-3 {
    width: 0.5px;
    height: 100%;
    background-color: #d2d2d2;
    position: absolute;
    top: -100px;
    right: 150px;
  }
  .bg-line-4 {
    width: 0.5px;
    height: 100%;
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
    top: 50px;
    right: 400px;
  }
`;
