import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import RentalListImage from "../../assets/images/대여목록 책.png";
import RentalListImage2 from "../../assets/images/메인 캐러셀1.png";
import RentalMark from "../../assets/images/대여마크.png";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const CategoryItem = ({ data }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    data && navigate(`/category/${data.no}`);
  };
  const rental = useSelector((state) => state.rental.rentalValue);

  return (
    <>
      <ItemBox>
        {rental.filter((el) => Number(data.no) === el.no).length === 1 ? (
          <img src={RentalMark} className="rental-mark" alt="대여 마크" />
        ) : (
          ""
        )}

        <img
          src={RentalListImage2}
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
    border: 1px solid ${({ theme }) => theme.colors.Gray_010};
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
