import React from "react";
import styled from "styled-components";
import RentalListImage from "../../assets/images/대여목록 책.png";
import RentalListImage2 from "../../assets/images/베스트셀러 책.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import RentalMark from "../../assets/images/대여마크.png";

const CategoryPage = () => {
  return (
    <CategoryContainer>
      <section className="category-content-box">
        <CategoryTabList>
          <h2>Category</h2>
          <ul>
            <li>ddddd</li>
            <li>ddddd</li>
            <li>ddddd</li>
            <li>ddddd</li>
            <li>ddddd</li>
            <li>ddddd</li>
          </ul>
        </CategoryTabList>
        <CategoryContents>
          <div className="itemgrid">
            <img src={RentalMark} className="rental-mark" />
            <img src={RentalListImage} className="rental-image" alt="책 제목" />
            <div className="bottom-contents-info">
              <div className="best-cotents">
                <h3>목포 여행 레시피</h3>
                <p>양다솔</p>
              </div>
              <Button>
                <FaHeart className="heartFill" size={27} color="#CECECE" />
              </Button>
            </div>
          </div>
          <div className="itemgrid">
            <img src={RentalMark} className="rental-mark" />
            <img src={RentalListImage} className="rental-image" alt="책 제목" />
            <div className="bottom-contents-info">
              <div className="best-cotents">
                <h3>목포 여행 레시피</h3>
                <p>양다솔</p>
              </div>
              <Button>
                <FaHeart className="heartFill" size={27} color="#CECECE" />
              </Button>
            </div>
          </div>
          <div className="itemgrid">
            <img src={RentalMark} className="rental-mark" />
            <img src={RentalListImage} className="rental-image" alt="책 제목" />
            <div className="bottom-contents-info">
              <div className="best-cotents">
                <h3>목포 여행 레시피</h3>
                <p>양다솔</p>
              </div>
              <Button>
                <FaHeart className="heartFill" size={27} color="#CECECE" />
              </Button>
            </div>
          </div>
          <div className="itemgrid">
            <img src={RentalMark} className="rental-mark" />
            <img src={RentalListImage} className="rental-image" alt="책 제목" />
            <div className="bottom-contents-info">
              <div className="best-cotents">
                <h3>목포 여행 레시피</h3>
                <p>양다솔</p>
              </div>
              <Button>
                <FaHeart className="heartFill" size={27} color="#CECECE" />
              </Button>
            </div>
          </div>
        </CategoryContents>
      </section>
    </CategoryContainer>
  );
};

export default CategoryPage;

const CategoryContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0 150px 0;
  .category-content-box {
    width: 1280px;
    min-height: 500px;
    display: flex;
    /* background-color: blue; */
  }
`;

const CategoryTabList = styled.div`
  flex: 1 1 0;
  min-height: 700px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.Gray_020};
  margin-right: 30px;
  text-align: center;
  padding: 20px 4px;
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxxxl};
    font-family: "GodoM", "Arial", sans-serif;
  }
  ul {
    line-height: 2.5rem;
    margin-top: 20px;
    li {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.Gray_050};
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.colors.Orange_040};
      }
    }
  }
`;
const CategoryContents = styled.div`
  flex: 3.5 1 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;
  .itemgrid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
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
    }
    .bottom-contents-info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      .best-cotents {
        text-align: left;
        h3 {
          font-weight: bold;
          font-size: ${({ theme }) => theme.fontSizes.lg};
        }
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
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.Orange_040};
    background-color: ${({ theme }) => theme.colors.Orange_040};
  }
`;
