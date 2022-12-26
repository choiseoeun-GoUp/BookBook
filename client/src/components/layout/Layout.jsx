import React, { useEffect } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../common/ScrollToTop";

const Layout = () => {
  const handleScroll = (e) => {
    if (!window.scrollY) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Header />
      <MainContent>
        <Outlet />
        <ScrollToTop handleClick={handleScroll} />
      </MainContent>
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
  margin-top: 50px;
  flex: 1;
`;
