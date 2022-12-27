import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryItem from "../../components/category/CategoryItem";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { pageActios } from "../../utils/pageSlice";

const CategoryPage = ({ itemData }) => {
  const [gnr, setGnr] = useState("All");
  const [viewAll, setViewAll] = useState(true);

  const page = useSelector((state) => state.page.pageValue);

  const dispatch = useDispatch();
  const handlePageChange = (e) => {
    dispatch(pageActios.setPaging(e));
  };
  useEffect(() => {
    let vh = document.body.offsetHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <>
      <CategoryContainer>
        <section className="category-content-box">
          <CategoryTabList>
            <h2>Category</h2>
            <ul>
              <li
                className={"All" === gnr ? "focused" : ""}
                onClick={() => {
                  setViewAll(true);
                  setGnr("All");
                }}
              >
                All
              </li>
              {itemData.items &&
                itemData.items
                  .filter(
                    (arr, index, callback) =>
                      index === callback.findIndex((t) => t.gnr === arr.gnr)
                  )
                  .sort((a, b) => {
                    return a.gnr > b.gnr ? 1 : -1;
                  })
                  .map((el, index) => (
                    <li
                      key={index}
                      className={el.gnr === gnr ? "focused" : ""}
                      onClick={() => {
                        setGnr(el.gnr);
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
                    <div className="itemgrid" key={el.no}>
                      <CategoryItem data={el} />
                    </div>
                  );
                })
              : itemData.items &&
                itemData.items
                  .filter((el) => el.gnr === gnr)
                  .map((el) => {
                    return (
                      <div className="itemgrid" key={el.no}>
                        <CategoryItem data={el} />
                      </div>
                    );
                  })}
          </CategoryContents>
        </section>
        <CategoryPaging>
          {viewAll ? (
            <Pagination
              activePage={page && page}
              itemsCountPerPage="9"
              totalItemsCount={itemData.totalCount}
              pageRangeDisplayed={5}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange}
            />
          ) : null}
        </CategoryPaging>
      </CategoryContainer>
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

export default CategoryPage;

const CategoryContainer = styled.section`
  position: relative;
  z-index: 1;
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
  flex: 1 0 0;
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
    .focused {
      color: ${({ theme }) => theme.colors.Orange_040};
      /* background-color: ${({ theme }) => theme.colors.Gray_040}; */
      transition: 1s;
    }
  }
`;
const CategoryContents = styled.div`
  flex: 3.5 0 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  .itemgrid {
    position: relative;
  }
`;

const CategoryPaging = styled.div`
  margin-top: 50px;
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 50px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border-radius: 30px;
  }

  ul.pagination li:first-child a {
    color: ${({ theme }) => theme.colors.Orange_040};
  }
  ul.pagination li:nth-child(2) a {
    color: ${({ theme }) => theme.colors.Orange_040};
  }
  ul.pagination li:nth-last-child(2) a {
    color: ${({ theme }) => theme.colors.Orange_040};
  }
  ul.pagination li:last-child a {
    color: ${({ theme }) => theme.colors.Orange_040};
  }

  ul.pagination li a {
    text-decoration: none;
    font-size: 1rem;
    border-radius: 30px;
    color: rgba(174, 174, 178, 1);
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: ${({ theme }) => theme.colors.Orange_040};
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: ${({ theme }) => theme.colors.Orange_040};
  }
`;
const OutLine = styled.div`
  z-index: -1;
  .bg-line-1 {
    width: 0.5px;
    min-height: calc(var(--vh, 1vh) * 100);
    background-color: #eeeeee;
    position: absolute;
    top: -100px;
    left: 45px;
  }
  .bg-line-2 {
    width: 0.5px;
    height: calc(var(--vh, 1vh) * 100);
    background-color: #eeeeee;
    position: absolute;
    top: -100px;
    left: 196px;
  }
  .bg-line-3 {
    width: 0.5px;
    height: calc(var(--vh, 1vh) * 100);
    background-color: #eeeeee;
    position: absolute;
    top: -100px;
    right: 150px;
  }
  .bg-line-4 {
    width: 0.5px;
    height: calc(var(--vh, 1vh) * 100);
    background-color: #eeeeee;
    position: absolute;
    top: -100px;
    right: 310px;
  }
  .bg-circle {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 0.5px solid #eeeeee;
    position: absolute;
    top: 80px;
    right: 400px;
  }
`;
