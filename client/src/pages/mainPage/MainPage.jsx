import React from "react";
import styled from "styled-components";
import MainImageBook from "../../assets/images/메인 이미지.png";
import MBestSeller from "../../components/main/MBestSeller";
import MRecommendList from "../../components/main/MRecommendList";

const MainPage = () => {
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
              <img src={MainImageBook} />
            </MainImage>
          </MFirstContainer>
          <MBestSeller />
          <MRecommendList />
        </section>
        <TextInteraction></TextInteraction>
      </MainContainer>
    </>
  );
};

export default MainPage;

const MainContainer = styled.main`
  section {
    padding: 0 30px;
  }
`;

// 첫번째 컨테이너

const MFirstContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;
const MainText = styled.div`
  width: 50%;
  padding-top: 10%;
  padding-left: 14px;
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
  width: 100%;
  height: 50px;
  margin: 100px 0 160px 0;
  background-color: ${({ theme }) => theme.colors.Orange_040};
`;
