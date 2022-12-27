import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../common/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <AlertBox>
        <ToastContainer
          position="bottom-right" // 알람 위치 지정
          autoClose={2000} // 자동 off 시간
          hideProgressBar={false} // 진행시간바 숨김
          closeOnClick // 클릭으로 알람 닫기
          rtl={false} // 알림 좌우 반전
          pauseOnFocusLoss // 화면을 벗어나면 알람 정지
          draggable // 드래그 가능
          pauseOnHover // 마우스를 올리면 알람 정지
          theme="light"
          limit={1} // 알람 개수 제한
        />
      </AlertBox>
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

const AlertBox = styled.div`
  --toastify-color-progress-light: linear-gradient(
    to right,
    #386941,
    #ffe053,
    #ff6737
  );
`;
