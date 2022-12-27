import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import BookImage1 from "../../assets/images/책 표지1.png";
import BookImage2 from "../../assets/images/책 표지2.png";
import BookImage3 from "../../assets/images/책 표지3.png";
import BookImage4 from "../../assets/images/책 표지4.png";
import BookImage5 from "../../assets/images/책 표지5.png";
import BookImage6 from "../../assets/images/책 표지6.png";
import RentalMark from "../../assets/images/대여마크.png";
import { FaHeart } from "react-icons/fa";

const CategoryItem = ({ data }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    data && navigate(`/category/${data.no}`);
  };
  const rental = useSelector((state) => state.rental.rentalValue);

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
      <ItemBox>
        {rental.filter((el) => Number(data.no) === el.no).length === 1 ? (
          <img src={RentalMark} className="rental-mark" alt="대여 마크" />
        ) : (
          ""
        )}

        <img
          src={chosenImage}
          className="rental-image"
          alt={data.ebk_nm}
          onClick={goDetail}
        />
        <div className="bottom-contents-info">
          <div className="best-cotents">
            <h3>{data.ebk_nm}</h3>
            <p>{data.aut_nm}</p>
          </div>
          <div className="best-button">
            <Button>
              <FaHeart className="heart" />
            </Button>
          </div>
        </div>
      </ItemBox>
    </>
  );
};

export default CategoryItem;

const ItemBox = styled.div`
  .rental-mark {
    position: absolute;
    top: -25px;
    left: -25px;
    border: none;
  }
  .rental-image {
    width: 100%;
    height: 420px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.Gray_020};
    cursor: pointer;
  }
  .bottom-contents-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    .best-cotents {
      text-align: left;
      cursor: pointer;
      h3 {
        font-weight: bold;
        font-size: ${({ theme }) => theme.fontSizes.lg};
        width: 230px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.Gray_020};
  background-color: #fff;
  .heart {
    font-size: 26px;
    color: #cecece;
  }
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.Orange_040};
    background-color: ${({ theme }) => theme.colors.Orange_040};
    .heart {
      color: #fff;
    }
  }
`;
