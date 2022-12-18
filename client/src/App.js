import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./pages/main/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
