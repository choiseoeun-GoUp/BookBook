import React from "react";
import styled from "styled-components";
import Image from "../../assets/images/대여목록 책.png";
import Button from "../../components/common/Button";

const BookDetailPage = () => {
  return (
    <>
      <DetailContainer>
        <DetailImage>
          <p className="back-btn">되돌아가기</p>
          <img src={Image} />
        </DetailImage>
        <DetaileContents>
          <p className="category-btn">
            카테고리 <span>〉</span>
            <span> 한국 에세이</span>
          </p>
          <div className="title-box">
            <div className="title">
              <h2>가난해지지 않는 마음</h2>
              <p>2021-10-01</p>
            </div>
            <div className="title-sub">
              <div className="author-info">
                <p>
                  저자명 : <span>양다솔</span>
                </p>
                <p>
                  출판사 : <span>놀</span>
                </p>
              </div>
              <div className="add-wishlist">위시리스트에 추가하세요</div>
            </div>
          </div>
          <div className="contents-box">
            <h2>Description</h2>
            <div className="book-info-box">
              지금 당장 직업도; 먹고살 돈도 없지만나는 시간이 지나도 이상하게도;
              전혀 가난해지지 않는다.어쩌면 나의 조상은 수렵채집인인지도 모른다.
              오늘의 먹을거리와 머물 곳을 찾아다니며; 하루를 하나의 삶처럼
              살아내던 이들.나는 다음 날; 다음 해도 아닌 당장 오늘 하루를 잘
              보내는 방법에 대해 알고 있었다. _본문 중에서도시에서 살아가는 20대
              여성의 기쁨과 슬픔을 담아내는 새로운 목소리가 등장했다. 놀에서
              출간된 『가난해지지 않는 마음』은 결코 가난해질 수 없는 풍요로운
              마음을 지닌 양다솔 작가의 희비극을 담은 첫 에세이다. 독립출판물을
              전시하고 판매하지금 당장 직업도; 먹고살 돈도 없지만나는 시간이
              지나도 이상하게도; 전혀 가난해지지 않는다.어쩌면 나의 조상은
              수렵채집인인지도 모른다. 오늘의 먹을거리와 머물 곳을 찾아다니며;
              하루를 하나의 삶처럼 살아내던 이들.나는 다음 날; 다음 해도 아닌
              당장 오늘 하루를 잘 보내는 방법에 대해 알고 있었다. _본문
              중에서도시에서 살아가는 20대 여성의 기쁨과 슬픔을 담아내는 새로운
              목소리가 등장했다. 놀에서 출간된 『가난해지지 않는 마음』은 결코
              가난해질 수 없는 풍요로운 마음을 지닌 양다솔 작가의 희비극을 담은
              첫 에세이다. 독립출판물을 전시하고 판매하지금 당장 직업도; 먹고살
              돈도 없지만나는 시간이 지나도 이상하게도; 전혀 가난해지지
              않는다.어쩌면 나의 조상은 수렵채집인인지도 모른다. 오늘의
              먹을거리와 머물 곳을 찾아다니며; 하루를 하나의 삶처럼 살아내던
              이들.나는 다음 날; 다음 해도 아닌 당장 오늘 하루를 잘 보내는
              방법에 대해 알고 있었다. _본문 중에서도시에서 살아가는 20대 여성의
              기쁨과 슬픔을 담아내는 새로운 목소리가 등장했다. 놀에서 출간된
              『가난해지지 않는 마음』은 결코 가난해질 수 없는 풍요로운 마음을
              지닌 양다솔 작가의 희비극을 담은 첫 에세이다. 독립출판물을
              전시하고 판매하지금 당장 직업도; 먹고살 돈도 없지만나는 시간이
              지나도 이상하게도; 전혀 가난해지지 않는다.어쩌면 나의 조상은
              수렵채집인인지도 모른다. 오늘의 먹을거리와 머물 곳을 찾아다니며;
              하루를 하나의 삶처럼 살아내던 이들.나는 다음 날; 다음 해도 아닌
              당장 오늘 하루를 잘 보내는 방법에 대해 알고 있었다. _본문
              중에서도시에서 살아가는 20대 여성의 기쁨과 슬픔을 담아내는 새로운
              목소리가 등장했다. 놀에서 출간된 『가난해지지 않는 마음』은 결코
              가난해질 수 없는 풍요로운 마음을 지닌 양다솔 작가의 희비극을 담은
              첫 에세이다. 독립출판물을 전시하고 판매하
            </div>
          </div>
          <div className="button-box">
            <Button color="Gray_020" size="md">
              좋아요
            </Button>
            <Button color="Orange_040" size="lg">
              자세히 보기
            </Button>
          </div>
        </DetaileContents>
      </DetailContainer>
    </>
  );
};

export default BookDetailPage;

const DetailContainer = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  padding: 50px 0 150px 0;
  display: flex;
`;

const DetailImage = styled.div`
  flex: 1 1 0;
  margin-right: 20px;
  .back-btn {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: 20px;
  }
  img {
    min-width: 450px;
    max-height: 700px;
  }
`;
const DetaileContents = styled.div`
  flex: 1.5 1 0;
  h2 {
    font-family: "GodoM", "Arial", sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.xxxxl};
    color: ${({ theme }) => theme.colors.Gray_090};
  }

  .category-btn {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: 20px;
  }
  .title-box {
    padding: 20px 20px 14px 20px;
    background-color: ${({ theme }) => theme.colors.Gray_020};
    border-radius: 20px;
    margin-bottom: 30px;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${({ theme }) => theme.fontSizes.base};
      color: ${({ theme }) => theme.colors.Gray_050};
    }
    .title-sub {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .author-info {
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
        p + p {
          margin-right: 20px;
        }
      }
      .add-wishlist {
        font-size: ${({ theme }) => theme.fontSizes.base};
      }
    }
  }
  .contents-box {
    margin-bottom: 55px;
    .book-info-box {
      margin-bottom: 20px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: box;
      margin-top: 1px;
      max-height: 440px;
      overflow: hidden;
      vertical-align: top;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 15;
    }
  }
  .button-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;
