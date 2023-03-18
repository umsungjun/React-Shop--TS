import { Routes, Route } from "react-router";
import { ProductListThemProps } from "./App";
import MainPage from "./Main/MainPage";
import AccessoryPage from "./Pages/AccessoryPage";
import CartPage from "./Pages/CartPage";
import DigitalPage from "./Pages/DigitalPage";
import FashionPage from "./Pages/FashionPage";
import NullPage from "./Pages/NullPage";
import ProductDetailPage from "./Pages/ProductDetailPage";

// 모든 정보를 뿌려줄 수 있는 곳에서 fetch
export default function PageNavigator({
  theme,
  productList,
}: ProductListThemProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage productList={productList} theme={theme} />}
      />
      <Route path="/grocery" element={<NullPage theme={theme} />} />
      <Route
        path="/fashion"
        element={<FashionPage productList={productList} theme={theme} />}
      />
      <Route
        path="/accessory"
        element={<AccessoryPage productList={productList} theme={theme} />}
      />
      <Route
        path="/digital"
        element={<DigitalPage productList={productList} theme={theme} />}
      />
      <Route
        path="/cart"
        element={<CartPage productList={productList} theme={theme} />}
      />
      <Route
        path="/product/:id"
        element={<ProductDetailPage productList={productList} theme={theme} />}
      />
    </Routes>
  );
}
