import React from "react";
import styled from "styled-components";
import { ProductListResponseType } from "../Service/productService";
import CarouselComponent from "./CarouselComponent";
import MainAccessorySection from "./MainAccessorySection";
import MainDigitalSection from "./MainDigitalSection";
import MainFashionSection from "./MainFashionSection";

export interface ProductListProps {
  productList: Array<any>; // 배열안의 요소가 string과 number로 섞여있기 때문에 any를 줌
  theme: string;
}

export default function MainPage(props: ProductListProps) {
  return (
    <MainContainer theme={props.theme}>
      <CarouselComponent theme={props.theme} productList={props.productList} />
      <MainFashionSection productList={props.productList} theme={props.theme} />
      <MainAccessorySection
        productList={props.productList}
        theme={props.theme}
      />
      <MainDigitalSection productList={props.productList} theme={props.theme} />
    </MainContainer>
  );
}

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#252628"};
  .carousel-root {
    width: 100%;
  }
`;
