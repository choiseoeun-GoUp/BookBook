import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Image from "../../assets/images/대여목록 책.png";
import Button from "../../components/common/Button";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const BookDetailPage = ({ itemData }) => {
  const { id } = useParams();
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
            <span> {itemData.items[id].gnr}</span>
          </p>
          <div className="title-box">
            <div className="title">
              <h2>{itemData.items[id].ebk_nm}</h2>
              <p>{itemData.items[id].pblsh_ymd}</p>
            </div>
            <div className="title-sub">
              <div className="author-info">
                <p>
                  저자명 : <span>{itemData.items[id].aut_nm}</span>
                </p>
                <p>
                  출판사 : <span>{itemData.items[id].pblshr}</span>
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
            <div className="book-info-box">{itemData.items[id].cn_intro}</div>
          </div>
          <div className="button-box">
            <Button color="Gray_030" size="md">
              현재 대여 인원 : {itemData.items[id].rsvt_noppl}
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
