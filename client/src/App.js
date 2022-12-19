import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
