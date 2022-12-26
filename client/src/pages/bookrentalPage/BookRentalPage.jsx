import React from "react";
import styled from "styled-components";
import RentalListImage from "../../assets/images/대여목록 책.png";
import { IoCaretBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { rentalActios } from "../../utils/rentalSlice";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookRentalPage = () => {
  const notify = () => toast("반납하는 중 입니다 🤔");
  const dispatch = useDispatch();
  const rental = useSelector((state) => state.rental.rentalValue);
  const rentalRemove = (el, value) => {
    return el.filter((ele) => {
      return ele.no != value;
    });
  };
  return (
    <>
      <BookRentalList>
        <h2>
          나의 <span>대여</span> 목록
        </h2>
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
        <BookList>
          {rental.map((el, index) => (
            <div className="itemgrid" key={index}>
              <img src={RentalListImage} alt="책이미지" />
              <div className="best-cotents">
                <h3>{el.ebk_nm}</h3>
                <p>{el.aut_nm}</p>
              </div>
              <button
                onClick={() => {
                  dispatch(rentalActios.setRental(rentalRemove(rental, el.no)));
                  notify();
                }}
              >
                <span>
                  <IoCaretBack className="back-icon" size={20} />
                </span>
                반납하기
              </button>
            </div>
          ))}
        </BookList>
      </BookRentalList>
    </>
  );
};

export default BookRentalPage;

const BookRentalList = styled.section`
  padding: 50px 0 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.LogoSize};
    font-family: "GodoM", "Arial", sans-serif;
  }
`;

const BookList = styled.div`
  max-width: 1280px;
  width: 100%;
  margin-top: 50px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;

  .itemgrid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 100%;
      height: 420px;
      overflow: hidden;
      border: 2px solid ${({ theme }) => theme.colors.Gray_020};
    }
    .best-cotents {
      text-align: center;
      padding: 20px 0;
      height: 130px;
      h3 {
        font-weight: bold;
        font-size: ${({ theme }) => theme.fontSizes.lg};
      }
    }
    .back-icon {
      position: relative;
      top: 3px;
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
