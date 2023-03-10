import React from "react";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import MainImageBook from "../../assets/images/메인 이미지.png";
import MBestSeller from "../../components/main/MBestSeller";
import MRecommendList from "../../components/main/MRecommendList";
import { MdOutlineMenuBook } from "react-icons/md";
import ReactCurvedText from "react-curved-text";

const MainPage = () => {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <MainContainer>
        <section>
          <MFirstContainer>
            <MainText>
              <div>
                <p className="main-title">
                  오늘 나랑
                  <br />책 한권 할래?
                </p>
                <p className="sub-content">
                  BOOKBOOK에서는 도서관의 책을 대여할수있습니다.
                  <br />
                  이곳에서 책 대여 서비스를 즐겨보세요:)
                </p>
              </div>
            </MainText>
            <MainImage>
              <img
                src={MainImageBook}
                alt="이미지"
                style={{
                  transform: `translateX(${position / 10}px)`,
                }}
              />
            </MainImage>
            <p className="cir cir-1"></p>
            <p className="cir cir-2"></p>
            <p className="cir cir-3"></p>
            <p className="cir cir-4"></p>
            <p className="cir cir-5"></p>
            <p className="cir cir-6"></p>
            <p className="cir cir-7"></p>
          </MFirstContainer>
          <SpinningText>
            <ReactCurvedText
              width={370}
              height={310}
              cx="130"
              cy="130"
              rx={98}
              ry={98}
              startOffset={20}
              reversed={true}
              text="BookBook에서 책을 대여 해보세요  BookBook에서 책을 대여 해보세요  "
              textProps={{ style: { fontSize: "20" } }}
              tspanProps={{ dy: "-16" }}
            />
          </SpinningText>
          <MBestSeller position={position} />
          <MRecommendList position={position} />
          <TextInteraction2>
            {slides.map((color, index) => (
              <p className="parallel" key={index}>
                BookBook<span>{<MdOutlineMenuBook size={20} />}</span>
              </p>
            ))}
          </TextInteraction2>
        </section>
      </MainContainer>
      <OutLine>
        <p className="bg-line bg-line-1"></p>
        <p className="bg-line bg-line-2"></p>
        <p className="bg-line bg-line-3"></p>
        <p className="bg-line bg-line-4"></p>
        <p className="bg-circle"></p>
      </OutLine>
    </>
  );
};

export default MainPage;

const MainContainer = styled.main`
  height: 100%;
  section {
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
`;

// 첫번째 컨테이너
const moveCircle = keyframes`
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(5px, -3px);
    }
    50%{
      transform: translate(8px, 0px);
    }
    75%{
      transform: translate(2px, 7px);
    }
    100%{
      transform: translate(0, 0);
    }
`;
const moveCircle2 = keyframes`
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(2px, 7px);
    }
    50%{
      transform: translate(8px, 0px);
    }
    75%{
      transform: translate(5px, -3px);
    }
    100%{
      transform: translate(0, 0);
    }
`;
const MFirstContainer = styled.section`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cir {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    position: absolute;
  }
  .cir-1 {
    left: -30px;
    top: 100px;
    border: 1px solid ${({ theme }) => theme.colors.Orange_040};
    animation: 3s linear 0s infinite normal forwards running ${moveCircle};
  }
  .cir-2 {
    left: 670px;
    top: 650px;
    border: 1px solid ${({ theme }) => theme.colors.Yellow_040};
    background-color: ${({ theme }) => theme.colors.Yellow_040};
    animation: 3s linear 0s infinite normal forwards running ${moveCircle2};
  }
  .cir-3 {
    width: 35px;
    height: 35px;
    left: 50px;
    bottom: 220px;
    border: 1px solid ${({ theme }) => theme.colors.Green_040};
    animation: 3s linear 0s infinite normal forwards running ${moveCircle};
  }
  .cir-4 {
    left: 950px;
    top: 10px;
    border: 1px solid ${({ theme }) => theme.colors.Orange_040};
    background-color: ${({ theme }) => theme.colors.Orange_040};
    animation: 3s linear 0s infinite normal forwards running ${moveCircle2};
  }
  .cir-5 {
    width: 20px;
    height: 20px;
    right: 270px;
    bottom: 170px;
    border: 1px solid ${({ theme }) => theme.colors.Orange_040};
    animation: 3s linear 0s infinite normal forwards running ${moveCircle};
  }
  .cir-6 {
    left: 500px;
    top: 200px;
    border: 1px solid ${({ theme }) => theme.colors.Green_040};
    background-color: ${({ theme }) => theme.colors.Green_040};
    animation: 3s linear 0s infinite normal forwards running ${moveCircle};
  }
  .cir-7 {
    left: 500px;
    bottom: 10px;
    border: 1px solid ${({ theme }) => theme.colors.Orange_040};
    background-color: ${({ theme }) => theme.colors.Orange_040};
    animation: 3s linear 0s infinite normal forwards running ${moveCircle2};
  }
`;
const MainText = styled.div`
  width: 60%;
  div {
    .main-title {
      font-size: ${({ theme }) => theme.fontSizes.titleLg};
      font-family: "GodoM", "Arial", sans-serif;
    }
    .sub-content {
      margin-top: 30px;
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.Gray_050};
    }
  }
`;

const MainImage = styled.div``;

const spin = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const SpinningText = styled.div`
  position: absolute;
  bottom: 29%;
  left: 15%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 290px;
  height: 290px;
  border: 15px solid transparent;
  border-radius: 50%;
  animation: ${spin} 8s linear infinite;
  text {
    fill: ${({ theme }) => theme.colors.Gray_040};
  }
`;

const rollingleft1 = keyframes`
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-100vw);
    }
    50.01%{
        transform: translateX(100vw);
    }
    100%{
        transform: translateX(0);
    }
`;

const TextInteraction2 = styled.div`
  width: 100vw;
  margin: 12vw 0;
  display: flex;
  /* transform: rotate(2deg); */
  background-color: ${({ theme }) => theme.colors.Orange_040};
  justify-content: flex-end;
  overflow: hidden;
  p {
    display: flex;
    padding: 0.8vh 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    /* font-size: clamp(2vw, 8vw, 5rem); */
    span {
      margin: 0 20px;
    }
  }
  .parallel {
    /* background-color: red; */
    animation: 10s linear 0s infinite normal forwards running ${rollingleft1};
  }
`;

const OutLine = styled.div`
  z-index: -1;
  .bg-line {
    width: 0.5px;
    min-height: 260%;
    background-color: #e1e1e1;
    position: absolute;
    top: -100px;
  }
  .bg-line-1 {
    left: 45px;
  }
  .bg-line-2 {
    left: 196px;
  }
  .bg-line-3 {
    right: 150px;
  }
  .bg-line-4 {
    right: 310px;
  }
  .bg-circle {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 0.5px solid #e1e1e1;
    position: absolute;
    top: 80px;
    right: 400px;
  }
`;
