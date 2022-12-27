import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RImage from "../../assets/images/편집자 추천 책.png";
import Button from "../common/Button";
import { FaHeart } from "react-icons/fa";

const MRecommendList = ({ position }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/category`);
  };
  return (
    <>
      <MThirdContainer>
        <div
          className="Recommend-title"
          style={{
            opacity: (position - 1200) / 50,
          }}
        >
          <h2>편집자 추천 Book</h2>
          <p>편집자가 추천하는 책을 살펴보세요</p>
        </div>
        <RcommendContents
          style={{
            opacity: (position - 1600) / 50,
          }}
        >
          <div className="recommend-image">
            <img src={RImage} alt="책 표지" />
          </div>
          <RInfoContainer>
            <div className="recommend-inner">
              <div className="title-box">
                <h2>디어 가브리엘</h2>
                <div className="title-sub">
                  <p>
                    저자명 : <span>양다솔</span>
                  </p>
                  <p>
                    출판사 : <span>문학동네</span>
                  </p>
                </div>
              </div>
              <div className="book-info-box">
                지금 당장 직업도; 먹고살 돈도 없지만나는 시간이 지나도
                이상하게도; 전혀 가난해지지 않는다.어쩌면 나의 조상은
                수렵채집인인지도 모른다. 오늘의 먹을거리와 머물 곳을 찾아다니며;
                하루를 하나의 삶처럼 살아내던 이들.나는 다음 날; 다음 해도 아닌
                당장 오늘 하루를 잘 보내는 방법에 대해 알고 있었다. _본문
                중에서도시에서 살아가는 20대 여성의 기쁨과 슬픔을 담아내는
                새로운 목소리가 등장했다. 놀에서 출간된 『가난해지지 않는
                마음』은 결코 가난해질 수 없는 풍요로운 마음을 지닌 양다솔
                작가의 희비극을 담은 첫 에세이다. 독립출판물을 전시하고
                판매하지금 당장 직업도; 먹고살 돈도 없지만나는 시간이 지나도
                이상하게도; 전혀 가난해지지 않는다.어쩌면 나의 조상은
                수렵채집인인지도 모른다. 오늘의 먹을거리와 머물 곳을 찾아다니며;
                하루를 하나의 삶처럼 살아내던 이들.나는 다음 날; 다음 해도 아닌
                당장 오늘 하루를 잘 보내는 방법에 대해 알고 있었다. _본문
                중에서도시에서 살아가는 20대 여성의 기쁨과 슬픔을 담아내는
                새로운 목소리가 등장했다. 놀에서 출간된 『가난해지지 않는
                마음』은 결코 가난해질 수 없는 풍요로운 마음을 지닌 양다솔
                작가의 희비극을 담은 첫 에세이다. 독립출판물을 전시하고 판매하
              </div>
              <div className="button-box">
                <Button version="reverse" size="md">
                  <span>
                    <FaHeart size={14} />
                  </span>
                  좋아요
                </Button>
                <Button size="lg" onClick={goDetail}>
                  자세히 보기
                </Button>
              </div>
            </div>
            <div className="recommend-color-box"></div>
          </RInfoContainer>
        </RcommendContents>
      </MThirdContainer>
    </>
  );
};

export default MRecommendList;

const MThirdContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
  .Recommend-title {
    margin-bottom: 50px;
    text-align: center;
    margin-top: 200px;
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.titleS};
      font-family: "GodoM", "Arial", sans-serif;
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.Gray_050};
    }
  }
`;

const RcommendContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  .recommend-image {
    flex: 1 1 0;
    margin-right: 70px;
  }
`;

const RInfoContainer = styled.div`
  flex: 2 1 0;
  width: 580px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.Gray_010};
  border-radius: 15px;
  position: relative;
  .recommend-inner {
    padding: 30px;
    .title-box {
      border-bottom: 2px dotted ${({ theme }) => theme.colors.Gray_040};
      margin-bottom: 20px;
      h2 {
        font-family: "GodoM", "Arial", sans-serif;
        font-size: ${({ theme }) => theme.fontSizes.xxxxl};
      }
      .title-sub {
        display: flex;
        p {
          font-size: ${({ theme }) => theme.fontSizes.base};
          color: ${({ theme }) => theme.colors.Gray_050};
          margin: 20px 20px 20px 0;
          span {
            font-weight: bold;
            color: ${({ theme }) => theme.colors.Gray_060};
          }
        }
      }
    }
    .book-info-box {
      margin-bottom: 20px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: box;
      margin-top: 1px;
      max-height: 140px;
      overflow: hidden;
      vertical-align: top;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
    }
    .button-box {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
  }
  .recommend-color-box {
    width: 100%;
    height: 18px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(90deg, #ff6737, #ffe053, #386941);
    border-radius: 0 0 15px 15px;
  }
`;
