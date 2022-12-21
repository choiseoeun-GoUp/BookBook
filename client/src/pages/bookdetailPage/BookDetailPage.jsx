import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Image from "../../assets/images/대여목록 책.png";
import Button from "../../components/common/Button";

const BookDetailPage = ({ itemData }) => {
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

  console.log(itemData);
  useEffect(() => {
    filterItem();
  }, [itemData]);

  const filterItem = () =>
    itemData && itemData.filter((arr, index) => arr.no === id);
  // console.log(filterItem[0]);
  let { id } = useParams();

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
            <span> {filterItem && filterItem[0].gnr}</span>
          </p>
          <div className="title-box">
            <div className="title">
              <h2>{filterItem && filterItem[0].ebk_nm}</h2>
              {/* <p>{filterItem[0].pblsh_ymd}</p> */}
            </div>
            <div className="title-sub">
              <div className="author-info">
                <p>
                  저자명 : <span>{filterItem && filterItem[0].aut_nm}</span>
                </p>
                <p>
                  출판사 : <span>{filterItem && filterItem[0].pblshr}</span>
                </p>
              </div>
              <div className="add-wishlist">위시리스트에 추가하세요</div>
            </div>
          </div>
          <div className="contents-box">
            <h2>Description</h2>
            <div className="book-info-box">
              {filterItem && filterItem[0].cn_intro}
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
