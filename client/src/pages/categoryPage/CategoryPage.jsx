import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryItem from "../../components/category/CategoryItem";

const CategoryPage = ({ itemData }) => {
  const [gnr1, setGnr1] = useState("");
  const [viewAll, setViewAll] = useState(true);
  return (
    <CategoryContainer>
      <section className="category-content-box">
        <CategoryTabList>
          <h2>Category</h2>
          <ul>
            <li onClick={() => setViewAll(true)}>All</li>
            {itemData.items &&
              itemData.items
                .filter(
                  (arr, index, callback) =>
                    index === callback.findIndex((t) => t.gnr === arr.gnr)
                )
                .map((el, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setGnr1(el.gnr);
                      setViewAll(false);
                    }}
                  >
                    {el.gnr}
                  </li>
                ))}
          </ul>
        </CategoryTabList>
        <CategoryContents>
          {viewAll
            ? itemData.items &&
              itemData.items.map((el) => {
                return (
                  <div className="itemgrid">
                    <CategoryItem data={el} key={el.no} />
                  </div>
                );
              })
            : itemData.items &&
              itemData.items
                .filter((el) => el.gnr === gnr1)
                .map((el) => {
                  return (
                    <div className="itemgrid">
                      <CategoryItem data={el} key={el.no} />
                    </div>
                  );
                })}
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
  background-color: #fcfcfc;
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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  .itemgrid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
`;
