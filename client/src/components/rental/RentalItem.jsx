import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rentalActios } from "../../utils/rentalSlice";

import { toast } from "react-toastify";
import { IoRemoveCircle } from "react-icons/io5";

import Button from "../common/Button";
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

  const navigate = useNavigate();
  const goDetail = () => {
    data && navigate(`/category/${data.no}`);
  };

  const notify = () => toast("반납이 완료되었습니다 🤔");

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
          <img src={chosenImage} alt={data.ebk_nm} onClick={goDetail} />
          <div className="best-cotents">
            <h3>{data.ebk_nm}</h3>
            <p>{data.aut_nm}</p>
          </div>
          <Button
            size="lg"
            version="reverse"
            onClick={() => {
              dispatch(rentalActios.setRental(rentalRemove(rental, data.no)));
              notify();
            }}
          >
            <span>
              <IoRemoveCircle className="back-icon" size={20} />
            </span>
            반납하기
          </Button>
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
      cursor: pointer;
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
      left: -1px;
    }
  }
`;
