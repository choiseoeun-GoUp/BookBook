import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import Image from "../../assets/images/대여목록 책.png";
import NewButton from "../../components/common/NewButton";

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
  }, []);

  const rental = useSelector((state) => state.rental.rentalValue);
  const dispatch = useDispatch();

  const rentalRemove = (el, value) => {
    return el.filter((ele) => {
      return ele.no != value;
    });
  };
  const notifyReturn = () => toast("반납하는 중 입니다 🤔");
  const notifyRental = () => toast("대여하는 중 입니다 😆");

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
            <span> {itemData[0] && itemData[0].gnr}</span>
          </p>
          <div className="title-box">
            <div className="title">
              <h2>{itemData[0] && itemData[0].ebk_nm}</h2>
              {/* <p>{itemData.items[id].pblsh_ymd}</p> */}
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
            <p className="rsvt-alert">10명 이상 대여 불가능</p>
          ) : (
            ""
          )}

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
              <NewButton disabled size="xl">
                대여하기
              </NewButton>
            ) : rental.filter((el) => Number(id) === el.no).length === 1 ? (
              <button
                onClick={() => {
                  dispatch(
                    rentalActios.setRental(rentalRemove(rental, itemData[0].no))
                  );
                  notifyReturn();
                }}
              >
                반납하기
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(rentalActios.setRental([...rental, itemData[0]]));
                  notifyRental();
                }}
              >
                대여하기
              </button>
            )}
          </div>
          {/* <NewButton size="xl">대여하기</NewButton> */}
        </DetaileContents>
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
    margin-bottom: 40px;
    .book-info-box {
      display: -webkit-box;
      display: -ms-flexbox;
      display: box;
      margin-top: 1px;
      max-height: 440px;
      min-height: 300px;
      overflow: hidden;
      vertical-align: top;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 12;
      font-size: ${({ theme }) => theme.fontSizes.base};
    }
  }
  .rsvt-alert {
    color: ${({ theme }) => theme.colors.Orange_040};
    text-align: right;
  }
  .button-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .button-rsvt {
      font-size: ${({ theme }) => theme.fontSizes.base};
      background-color: ${({ theme }) => theme.colors.Gray_020};
      padding: 8px 50px;
      border-radius: 50px;
    }
  }
`;

const AlertBox = styled.div`
  --toastify-color-progress-light: linear-gradient(
    to right,
    #386941,
    #ffe053,
    #ff6737
  );
`;
