import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/mainPage/MainPage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import WishListPage from "./pages/wishlistPage/WishListPage";
import BookDetailPage from "./pages/bookdetailPage/BookDetailPage";
import BookRentalPage from "./pages/bookrentalPage/BookRentalPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />}></Route>
        <Route path="/category" element={<CategoryPage />}></Route>
        <Route path="/category/1" element={<BookDetailPage />}></Route>
        <Route path="/wishlist" element={<WishListPage />}></Route>
        <Route path="/bookrental" element={<BookRentalPage />}></Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
}

export default App;
