import React from "react";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import MainImageBook from "../../assets/images/메인 이미지.png";
import MBestSeller from "../../components/main/MBestSeller";
import MRecommendList from "../../components/main/MRecommendList";
import { MdOutlineMenuBook } from "react-icons/md";

const MainPage = () => {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <MainContainer>
        <section>
          <MFirstContainer>
            <MainText>
              <div>
                우웅ㅇ
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
              <img src={MainImageBook} alt="이미지" />
            </MainImage>
          </MFirstContainer>
          <MBestSeller />
          <MRecommendList />
        </section>
        <TextInteraction>
          <p className="second-parallel">
            BookBook<span>{<MdOutlineMenuBook size={20} />}</span>
          </p>
        </TextInteraction>
        <TextInteraction2>
          {slides.map((color, index) => (
            <p className="parallel" key={index}>
              BookBook<span>{<MdOutlineMenuBook size={20} />}</span>
            </p>
          ))}
        </TextInteraction2>
      </MainContainer>
    </>
  );
};

export default MainPage;

const MainContainer = styled.main`
  section {
    /* padding: 0 30px; */
    margin: 0 auto;
  }
`;

// 첫번째 컨테이너

const FadeIn = keyframes` /* 원본용 */
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

const MFirstContainer = styled.section`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const TextInteraction = styled.div`
  width: 100vw;
  height: 50px;
  margin: 100px 0 160px 0;
  background-color: ${({ theme }) => theme.colors.Orange_040};
  line-height: 50px;
  padding: 0 20px;
  p {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    width: 100%;
    white-space: nowrap;
    display: flex;
    align-items: center;
    span {
      margin: 0 30px;
    }
  }
`;
const rollingleft1 = keyframes` /* 원본용 */
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
  margin-bottom: 12vw;
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
    background-color: red;
    animation: 10s linear 0s infinite normal forwards running ${rollingleft1};
  }
`;
