import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { rentalActios } from "../../utils/rentalSlice";

import { toast } from "react-toastify";
import { IoCaretBack } from "react-icons/io5";

import BookImage1 from "../../assets/images/책 표지1.png";
import BookImage2 from "../../assets/images/책 표지2.png";
import BookImage3 from "../../assets/images/책 표지3.png";
import BookImage4 from "../../assets/images/책 표지4.png";
import BookImage5 from "../../assets/images/책 표지5.png";
import BookImage6 from "../../assets/images/책 표지6.png";

const RentalItem = ({ data }) => {
  const dispatch = useDispatch();
  const rental = useSelector((state) => state.rental.rentalValue);
  const rentalRemove = (el, value) => {
    return el.filter((ele) => {
      return ele.no !== value;
    });
  };

  const notify = () => toast("반납하는 중 입니다 🤔");

  const images = [
    BookImage1,
    BookImage2,
    BookImage3,
    BookImage4,
    BookImage5,
    BookImage6,
  ];
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  return (
    <>
      <RentalContainer>
        <div className="itemgrid">
          <img src={chosenImage} alt={data.ebk_nm} />
          <div className="best-cotents">
            <h3>{data.ebk_nm}</h3>
            <p>{data.aut_nm}</p>
          </div>
          <button
            className="return-btn"
            onClick={() => {
              dispatch(rentalActios.setRental(rentalRemove(rental, data.no)));
              notify();
            }}
          >
            <span>
              <IoCaretBack className="back-icon" size={20} />
            </span>
            반납하기
          </button>
        </div>
      </RentalContainer>
    </>
  );
};

export default RentalItem;

const RentalContainer = styled.div`
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
