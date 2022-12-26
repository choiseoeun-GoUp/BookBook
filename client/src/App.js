import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/mainPage/MainPage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import WishListPage from "./pages/wishlistPage/WishListPage";
import BookDetailPage from "./pages/bookdetailPage/BookDetailPage";
import BookRentalPage from "./pages/bookrentalPage/BookRentalPage";
import { useSelector } from "react-redux";

function App() {
  const [itemData, setitemData] = useState([]);
  const page = useSelector((state) => state.page.pageValue);

  const getContents = () => {
    fetch(
      `http://apis.data.go.kr/4050000/libebook/getLibebook?serviceKey=ivsTBybg%2FyaUtUrc5%2F6%2BJvWhOVLbJefA9Q9YegAX0e2vDPOrpN4KzJDQ8FmDDjB5eMwzlirugCRw%2BqEOQb3SOg%3D%3D&pageNo=${page}&numOfRows=9`
    )
      .then((res) => res.json())
      .then((data) => {
        setitemData(data);
      })
      .catch((e) => {
        console.log(`에러 캐치! ${e}`);
      });
  };

  useEffect(() => {
    getContents();
  }, [page]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />}></Route>
        <Route
          path="/category"
          element={<CategoryPage itemData={itemData} />}
        ></Route>
        <Route path="/category/:id" element={<BookDetailPage />}></Route>
        <Route path="/wishlist" element={<WishListPage />}></Route>
        <Route path="/bookrental" element={<BookRentalPage />}></Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
}

export default App;
