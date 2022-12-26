import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import RentalListImage from "../../assets/images/대여목록 책.png";
import RentalListImage2 from "../../assets/images/베스트셀러 책.png";
import RentalMark from "../../assets/images/대여마크.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { rentalActios } from "../../utils/rentalSlice";

const CategoryItem = ({ data }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    data && navigate(`/category/${data.no}`);
  };
  const dispatch = useDispatch();
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
          src={RentalListImage}
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
              <FaHeart className="heartFill" size={27} color="#CECECE" />
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
    /* border-radius: 20px; */
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
    .best-button {
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
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.Orange_040};
    background-color: ${({ theme }) => theme.colors.Orange_040};
  }
`;
