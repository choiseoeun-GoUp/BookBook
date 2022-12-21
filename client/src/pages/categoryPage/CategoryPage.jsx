import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryItem from "../../components/category/CategoryItem";

const CategoryPage = ({ itemData }) => {
  // const [itemData, setitemData] = useState([]);
  // const getContents = () => {
  //   fetch(
  //     `http://apis.data.go.kr/4050000/libebook/getLibebook?serviceKey=ivsTBybg%2FyaUtUrc5%2F6%2BJvWhOVLbJefA9Q9YegAX0e2vDPOrpN4KzJDQ8FmDDjB5eMwzlirugCRw%2BqEOQb3SOg%3D%3D&pageNo=1&numOfRows=10`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setitemData(data);
  //     })
  //     .catch((e) => {
  //       console.log(`에러 캐치! ${e}`);
  //     });
  // };

  // useEffect(() => {
  //   getContents();
  // }, []);

  return (
    <CategoryContainer>
      <section className="category-content-box">
        <CategoryTabList>
          <h2>Category</h2>
          <ul>
            {itemData.items &&
              itemData.items
                .filter(
                  (arr, index, callback) =>
                    index === callback.findIndex((t) => t.gnr === arr.gnr)
                )
                .map((el, index) => <li key={index}>{el.gnr}</li>)}
          </ul>
        </CategoryTabList>
        <CategoryContents>
          {itemData.items &&
            itemData.items.map((el) => {
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
