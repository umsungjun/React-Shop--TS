import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import PageHeader from "./Common/PageHeader";
import PageNavigator from "./PageNavigator";
import PageFooter from "./Common/PageFooter";
import { store } from "./Store";
import { useEffect, useState } from "react";
import { fetchProducts } from "./Service/productService";

export interface ProductListThemProps {
  theme: string;
  productList: Array<any>; // 배열안의 요소가 string과 number로 섞여있기 때문에 any를 줌
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("THEME") || "light");
  // console.log(theme);

  const changeTheme = () => {
    if (theme === "light") {
      localStorage.setItem("THEME", "black");
      setTheme("black");
    } else {
      setTheme("light");
      localStorage.setItem("THEME", "light");
    }
  };

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchProducts();

      setProductList(result);
    })();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageHeader
          changeTheme={changeTheme}
          theme={theme}
          productList={productList}
        />
        <PageNavigator theme={theme} productList={productList} />
        <PageFooter theme={theme} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
