import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Image from "../../assets/images/대여목록 책.png";
import Button from "../../components/common/Button";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const BookDetailPage = ({ itemData }) => {
  const { id } = useParams();
  // const id = 2;
  // const [itemData, setitemData] = useState([]);
  // const getContents = () => {
  //   fetch(
  //     `http://apis.data.go.kr/4050000/libebook/getLibebook?serviceKey=ivsTBybg%2FyaUtUrc5%2F6%2BJvWhOVLbJefA9Q9YegAX0e2vDPOrpN4KzJDQ8FmDDjB5eMwzlirugCRw%2BqEOQb3SOg%3D%3D&pageNo=1&numOfRows=10`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setitemData(data.items);
  //       // console.log(data.items);
  //     })
  //     .catch((e) => {
  //       console.log(`에러 캐치! ${e}`);
  //     });
  // };

  // console.log(itemData);
  // useEffect(() => {
  //   filterItem();
  // }, [itemData]);

  // const filterItem = () =>
  //   itemData && itemData.filter((arr, index) => arr.no === id);
  // // console.log(filterItem[0]);
  // let { id } = useParams();

  return (
    <>
      <DetailContainer>
        <DetailImage>
          <p className="back-btn">되돌아가기</p>
          <img src={Image} alt="책 표지" />
        </DetailImage>
        <DetaileContents>
          <p className="category-btn">
            카테고리 <span>〉</span>
            <span> 한국 에세이</span>
          </p>
          <div className="title-box">
            <div className="title">
              <h2>가난해지지 않는 마음</h2>
              <p>2021-10-03</p>
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
              <div className="add-wishlist">
                <span>
                  <FaRegHeart />
                </span>
                위시리스트에 추가하세요
              </div>
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
              전시하고 판매하는 언리미티드 에디션에서 여덟 시간 만에 완판 기록을
              세운 뒤; 여러 독립서점 추천도서로 선정되고 10쇄 이상 팔린
              독립출판물 『간지럼 태우기』 속 글과 구독 메일링 서비스
              ‘격일간다솔’에 연재된 글까지; 작가가 10년에 걸쳐 쓴 글들을
              갈무리했다.작가의 일상을 엿본다면 누구라도 “참 잘 산다”고 말할
              것이다. 여름이면 사흘에 한 번씩 수박이 집 앞으로 배달되고;
              인터넷으로 주문한 업소용 팥 통조림은 빙수를 열 번은 해 먹고도
              남아서 당근마켓으로 동네 사람들과 나눈다. 누군가를 해치지 않는
              밥상을 위해 빌라 앞 화단에서 쌈 야채를 키워 강된장과 곁들여 먹고;
              전 세계의 향신료를 써서 자정까지 비건 도시락을 싼다. 여름이 가고
              가을이 오는 걸 느끼기 위해 직접 봉숭아를 키워 손톱에 물을 들인다.
              주변인들은 그를 보고 감탄하며 말한다. “이토록 궁상맞고 사치스러운
              인생이라니. 양다솔이 진정 가난해질 일은 없을 것이다(이슬아).”
              “양다솔은 나의 아이콘이다. 무슨 일이 있어도 양다솔처럼 살고
              싶다(요조).” 『가난해지지 않는 마음』은 소유와 소비에 얽매이지
              않는 삶을 위해 능동적으로 움직이는 저자의 모습을 통해 어떤
              상황에서도 ‘가난해지지 않는 마음’이란 무엇인지 보여주고 있다.
            </div>
          </div>
          <div className="button-box">
            <Button color="Gray_030" size="md">
              현재 대여 인원 : 3
            </Button>
            <Button color="Orange_040" size="xl">
              대여하기
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
        span {
          margin-right: 10px;
          position: relative;
          top: 1px;
        }
      }
    }
  }
  .contents-box {
    margin-bottom: 60px;
    .book-info-box {
      /* margin-bottom: 40px; */
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
      -webkit-line-clamp: 12;
      font-size: ${({ theme }) => theme.fontSizes.base};
    }
  }
  .button-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;
