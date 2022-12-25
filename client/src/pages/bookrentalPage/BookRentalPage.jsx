import React from "react";
import styled from "styled-components";
import RentalListImage from "../../assets/images/대여목록 책.png";
import RentalListImage2 from "../../assets/images/베스트셀러 책.png";
import NewButton from "../../components/common/NewButton";
import { IoCaretBack } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { rentalActios } from "../../utils/rentalSlice";

const BookRentalPage = () => {
  const notify = () => toast("💁🏻 반납하는 중 입니다. ");
  const dispatch = useDispatch();
  const rental = useSelector((state) => state.rental.rentalValue);
  return (
    <>
      <BookRentalList>
        <h2>
          나의 <span>대여</span> 목록
        </h2>
        <BookList>
          {rental &&
            rental.map((el, index) => (
              <div className="itemgrid" key={index}>
                <img src={RentalListImage} alt="책이미지" />
                <div className="best-cotents">
                  <h3>{el.ebk_nm}</h3>
                  <p>{el.aut_nm}</p>
                </div>
                <button
                  onClick={() => {
                    index && dispatch(rentalActios.removeRental(index));
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
