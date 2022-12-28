import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import RentalItem from "../../components/rental/RentalItem";

const BookRentalPage = () => {
  const rental = useSelector((state) => state.rental.rentalValue);

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
            <RentalItem data={el} key={index} />
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
`;

const OutLine = styled.div`
  z-index: -1;
  .bg-line-1 {
    width: 0.5px;
    min-height: calc(var(--vh, 1vh) * 100);
    background-color: #e1e1e1;
    position: absolute;
    top: -100px;
    left: 45px;
  }
  .bg-line-2 {
    width: 0.5px;
    height: calc(var(--vh, 1vh) * 100);
    background-color: #e1e1e1;
    position: absolute;
    top: -100px;
    left: 196px;
  }
  .bg-line-3 {
    width: 0.5px;
    height: calc(var(--vh, 1vh) * 100);
    background-color: #e1e1e1;
    position: absolute;
    top: -100px;
    right: 150px;
  }
  .bg-line-4 {
    width: 0.5px;
    height: calc(var(--vh, 1vh) * 100);
    background-color: #e1e1e1;
    position: absolute;
    top: -100px;
    right: 310px;
  }
  .bg-circle {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 0.5px solid #e1e1e1;
    position: absolute;
    top: 80px;
    right: 400px;
  }
`;
