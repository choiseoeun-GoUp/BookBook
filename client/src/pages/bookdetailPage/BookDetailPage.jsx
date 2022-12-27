import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";
import { IoCaretBack, IoAddCircleSharp } from "react-icons/io5";

import Image from "../../assets/images/대여목록 책.png";
import Button from "../../components/common/Button";

import { useDispatch, useSelector } from "react-redux";
import { rentalActios } from "../../utils/rentalSlice";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetailPage = () => {
  const { id } = useParams();
  const [itemData, setitemData] = useState([]);
  const getContents = () => {
    fetch(
      `http://apis.data.go.kr/4050000/libebook/getLibebook?serviceKey=ivsTBybg%2FyaUtUrc5%2F6%2BJvWhOVLbJefA9Q9YegAX0e2vDPOrpN4KzJDQ8FmDDjB5eMwzlirugCRw%2BqEOQb3SOg%3D%3D&pageNo=1&numOfRows=30`
    )
      .then((res) => res.json())
      .then((data) => {
        setitemData(data.items.filter((el) => el.no === Number(id)));
      })
      .catch((e) => {
        console.log(`에러 캐치! ${e}`);
      });
  };

  useEffect(() => {
    getContents();
    let vh = document.body.offsetHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  const rental = useSelector((state) => state.rental.rentalValue);
  const dispatch = useDispatch();

  const rentalRemove = (el, value) => {
    return el.filter((ele) => {
      return ele.no !== value;
    });
  };
  const notifyReturn = () => toast("반납하는 중 입니다 🤔");
  const notifyRental = () => toast("대여하는 중 입니다 😆");

  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/category`);
  };

  return (
    <>
      <DetailContainer>
        <DetailImage>
          <p className="back-btn" onClick={goDetail}>
            되돌아가기
          </p>
          <img src={Image} alt="책 표지" />
        </DetailImage>
        <DetaileContents>
          <section>
            <p className="category-btn">
              카테고리 <span>〉</span>
              <span> {itemData[0] && itemData[0].gnr}</span>
            </p>
            <div className="title-box">
              <div className="title">
                <h2>{itemData[0] && itemData[0].ebk_nm}</h2>
              </div>
              <div className="title-sub">
                <div className="author-info">
                  <p>
                    저자명 : <span>{itemData[0] && itemData[0].aut_nm}</span>
                  </p>
                  <p>
                    출판사 : <span>{itemData[0] && itemData[0].pblshr}</span>
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
                {itemData[0] && itemData[0].cn_intro}
              </div>
            </div>
            {itemData[0] && itemData[0].rsvt_noppl > 11 ? (
              <p className="rsvt-alert">10명 이상으로 대여가 불가능합니다</p>
            ) : (
              ""
            )}
          </section>
          <div className="button-box">
            <div color="Gray_030" size="md" className="button-rsvt">
              현재 대여 인원 :{" "}
              {itemData[0] &&
                itemData[0].rsvt_noppl +
                  rental.filter((el) => Number(id) === el.no).length}
            </div>
            {itemData[0] &&
            itemData[0].rsvt_noppl +
              rental.filter((el) => Number(id) === el.no).length >
              9 ? (
              <Button disabled size="xl">
                대여하기
              </Button>
            ) : rental.filter((el) => Number(id) === el.no).length === 1 ? (
              <button
                className="return-btn"
                onClick={() => {
                  dispatch(
                    rentalActios.setRental(rentalRemove(rental, itemData[0].no))
                  );
                  notifyReturn();
                }}
              >
                <span>
                  <IoCaretBack className="back-icon" size={20} />
                </span>
                반납하기
              </button>
            ) : (
              <button
                className="rental-btn"
                onClick={() => {
                  dispatch(rentalActios.setRental([...rental, itemData[0]]));
                  notifyRental();
                }}
              >
                <span>
                  <IoAddCircleSharp className="back-icon" size={20} />
                </span>
                대여하기
              </button>
            )}
          </div>
        </DetaileContents>
      </DetailContainer>
      <OutLine>
        <p className="bg-line-1"></p>
        <p className="bg-line-2"></p>
        <p className="bg-line-3"></p>
        <p className="bg-line-4"></p>
        <p className="bg-circle"></p>
      </OutLine>
    </>
  );
};

export default BookDetailPage;

const DetailContainer = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  padding: 50px 0 150px 0;
  display: flex;
  position: relative;
  z-index: 1;
`;

const DetailImage = styled.div`
  flex: 1 1 0;
  margin-right: 20px;
  .back-btn {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: 20px;
    cursor: pointer;
  }
  img {
    min-width: 450px;
    max-height: 700px;
  }
`;
const DetaileContents = styled.div`
  flex: 1.5 1 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    margin-bottom: 40px;
    .book-info-box {
      font-size: ${({ theme }) => theme.fontSizes.base};
      /* display: -webkit-box;
      display: -ms-flexbox;
      display: box;
      margin-top: 1px;
      max-height: 440px; */
      /* min-height: 300px; */
      /* overflow: hidden;
      vertical-align: top;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 12; */
    }
  }
  .rsvt-alert {
    color: ${({ theme }) => theme.colors.Orange_040};
    text-align: right;
    margin-right: 60px;
  }
  .button-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    .button-rsvt {
      font-size: ${({ theme }) => theme.fontSizes.base};
      background-color: ${({ theme }) => theme.colors.Gray_020};
      padding: 8px 50px;
      border-radius: 50px;
    }
    .return-btn {
      margin: 0;
      border: 2px solid ${({ theme }) => theme.colors.Orange_040};
      cursor: pointer;
      border-radius: 50px;
      font-size: ${({ theme }) => theme.fontSizes.small};
      padding: 8px 140px;
      color: #ff6737;
      background: #fff;
      &:active,
      &:hover {
        color: #ffffff;
        background: #ff6737;
      }
      .back-icon {
        position: relative;
        top: 3px;
      }
    }
    .rental-btn {
      margin: 0;
      border: 2px solid ${({ theme }) => theme.colors.Orange_040};
      cursor: pointer;
      border-radius: 50px;
      font-size: ${({ theme }) => theme.fontSizes.small};
      padding: 8px 140px;
      color: #ffffff;
      background: #ff6737;
      &:active,
      &:hover {
        color: #ff6737;
        background: #fff;
      }
      .back-icon {
        position: relative;
        top: 3px;
        left: -3px;
      }
    }
  }
`;

const OutLine = styled.div`
  z-index: -1;
  .bg-line-1 {
    width: 0.5px;
    min-height: calc(var(--vh, 1vh) * 100);
    background-color: #eeeeee;
    position: absolute;
    top: -100px;
    left: 45px;
  }
  .bg-line-2 {
    width: 0.5px;
    height: calc(var(--vh, 1vh) * 100);
    background-color: #eeeeee;
    position: absolute;
    top: -100px;
    left: 196px;
  }
  .bg-line-3 {
    width: 0.5px;
    height: calc(var(--vh, 1vh) * 100);
    background-color: #eeeeee;
    position: absolute;
    top: -100px;
    right: 150px;
  }
  .bg-line-4 {
    width: 0.5px;
    height: calc(var(--vh, 1vh) * 100);
    background-color: #eeeeee;
    position: absolute;
    top: -100px;
    right: 310px;
  }
  .bg-circle {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 0.5px solid #eeeeee;
    position: absolute;
    top: 80px;
    right: 400px;
  }
`;
