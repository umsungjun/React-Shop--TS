import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductListProps } from "./MainPage";

export default function MainAccessorySection(props: ProductListProps) {
  if (props.productList.length < 1) {
    return (
      <SectionContainer theme={props.theme}>
        <SectionContainerTitle theme={props.theme}>패션</SectionContainerTitle>
        <SectionWrapper>
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <LinkContainer to={"/"} key={index} theme={props.theme}>
                <ProductImgBox>
                  <ProductImg />
                </ProductImgBox>
                <ProductInfo theme={props.theme}>
                  <ProductInfoDivTop theme={props.theme}></ProductInfoDivTop>
                  <ProductInfoDivMiddle
                    theme={props.theme}
                  ></ProductInfoDivMiddle>
                  <ProductInfoDivBottom
                    theme={props.theme}
                  ></ProductInfoDivBottom>
                </ProductInfo>
              </LinkContainer>
            );
          })}
        </SectionWrapper>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer>
      <SectionContainerTitle theme={props.theme}>
        액세서리
      </SectionContainerTitle>
      <SectionWrapper>
        {props.productList.map((product) => {
          const productUrl = `/product/${product.id}`;
          if (product.category === `jewelery`) {
            return (
              <LinkContainer
                to={productUrl}
                key={product.id}
                theme={props.theme}
              >
                <ProductImgBox>
                  <ProductImg src={product.image} />
                </ProductImgBox>
                <ProductInfo theme={props.theme}>
                  <ProductTitle>{product.title} </ProductTitle>
                  <ProductPrice>{`$${Math.ceil(product.price)}`} </ProductPrice>
                </ProductInfo>
              </LinkContainer>
            );
          }
        })}
      </SectionWrapper>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  padding-top: 3rem;
  padding-bottom: 2rem;
  width: 100%;
`;

const SectionContainerTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: ${(props) => (props.theme === "light" ? "#1f2937" : "#a6adb3")};
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 50px;

  @media (max-width: 690px) {
    //scroll 생기게
    display: flex;
    overflow-x: auto;
    gap: 1.5rem;
    margin-top: 50px;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 0 1rem;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 10px;
    }
  }
`;

const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 31rem;
  border: ${(props) =>
    props.theme === "light" ? "1px solid #e5e7eb" : "1px solid #374151"};
  border-radius: 16px;
  background: #fff;
`;

const ProductImgBox = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  width: 75%;
  flex: 1 1 0;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;

    & > img {
      transform: scale(1.3);
    }
  }
`;

const ProductImg = styled.img`
  overflow: hidden;
  max-width: 50%;
  max-height: 50%;
  transform: scale(1.2);
`;
const ProductInfo = styled.div`
  width: 16rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#f9fafb" : "#374151"};
  border-radius: 0px 0px 12px 12px;
  color: ${(props) => (props.theme === "light" ? "#1f2937" : "#a6adb3")};
`;

const ProductInfoDivTop = styled.div`
  width: 95%;
  height: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#fff")};
`;
const ProductInfoDivMiddle = styled.div`
  width: 75%;
  height: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#fff")};
`;
const ProductInfoDivBottom = styled.div`
  width: 55%;
  height: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#fff")};
`;

const ProductTitle = styled.p`
  margin-bottom: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
`;
const ProductPrice = styled.p`
  font-weight: 500;
`;
