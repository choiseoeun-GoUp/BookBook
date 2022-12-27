import React, { useEffect } from "react";
import styled from "styled-components";
import RentalListImage from "../../assets/images/대여목록 책.png";
import { IoCaretBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { rentalActios } from "../../utils/rentalSlice";

import { toast } from "react-toastify";

const BookRentalPage = () => {
  const notify = () => toast("반납하는 중 입니다 🤔");
  const dispatch = useDispatch();
  const rental = useSelector((state) => state.rental.rentalValue);
  const rentalRemove = (el, value) => {
    return el.filter((ele) => {
      return ele.no !== value;
    });
  };
  useEffect(() => {
    let vh = document.body.offsetHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <>
      <BookRentalList>
        <h2>
          나의 <span>대여</span> 목록
        </h2>
        <BookList>
          {rental.map((el, index) => (
            <div className="itemgrid" key={index}>
              <img src={RentalListImage} alt="책이미지" />
              <div className="best-cotents">
                <h3>{el.ebk_nm}</h3>
                <p>{el.aut_nm}</p>
              </div>
              <button
                className="return-btn"
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

export default BookRentalPage;

const BookRentalList = styled.section`
  position: relative;
  z-index: 1;
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

    .return-btn {
      margin: 0;
      border: 2px solid ${({ theme }) => theme.colors.Orange_040};
      cursor: pointer;
      border-radius: 50px;
      font-size: ${({ theme }) => theme.fontSizes.small};
      padding: 8px 100px;
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
