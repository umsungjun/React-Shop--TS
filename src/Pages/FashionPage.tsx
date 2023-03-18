import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductListProps } from "../Main/MainPage";

import { HiChevronRight } from "react-icons/hi";

export default function FashionPage({ productList, theme }: ProductListProps) {
  // console.log(props.productList);

  if (productList.length < 1) {
    return (
      <SetionContainer theme={theme}>
        <SectionWrapper>
          <CategoryBox>
            <Category>
              홈 <HiChevronRight /> 패션
            </Category>
          </CategoryBox>
          <SectionTitle>패션</SectionTitle>
          <ProductWrapper>
            {Array.from({ length: 12 }).map((_, index) => {
              {
                return (
                  <LinkContainer to="/" key={index} theme={theme}>
                    <ProductImgBox>
                      <ProductImg />
                    </ProductImgBox>
                    <ProductInfo theme={theme}>
                      <ProductInfoDivTop theme={theme} />
                      <ProductInfoDivMiddle theme={theme} />
                      <ProductInfoDivBottom theme={theme} />
                    </ProductInfo>
                  </LinkContainer>
                );
              }
            })}
          </ProductWrapper>
        </SectionWrapper>
      </SetionContainer>
    );
  }

  return (
    <SetionContainer theme={theme}>
      <SectionWrapper>
        <CategoryBox>
          <Category>
            홈 <HiChevronRight /> 패션
          </Category>
        </CategoryBox>
        <SectionTitle>패션</SectionTitle>
        <ProductWrapper>
          {productList.map((product) => {
            const productUrl = `/product/${product.id}`;
            if (
              product.category === `men's clothing` ||
              product.category === `women's clothing`
            ) {
              return (
                <LinkContainer to={productUrl} key={product.id} theme={theme}>
                  <ProductImgBox>
                    <ProductImg src={product.image} />
                  </ProductImgBox>
                  <ProductInfo theme={theme}>
                    <ProductTitle>{product.title} </ProductTitle>
                    <ProductPrice>
                      {`$${Math.ceil(product.price)}`}{" "}
                    </ProductPrice>
                  </ProductInfo>
                </LinkContainer>
              );
            }
          })}
        </ProductWrapper>
      </SectionWrapper>
    </SetionContainer>
  );
}

const SetionContainer = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  align-items: center;
  height: 100%;
  padding-top: 64px;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#2a303c"};
  color: ${(props) => (props.theme === "light" ? "#1f2937" : "#a6adba")};
`;

const CategoryBox = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 2rem 0rem;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.3rem;
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
`;

const SectionWrapper = styled.section`
  width: 72%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 1rem 0.5rem;
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 1890px) {
    justify-content: center;
  }
`;

interface KeyTheme {
  key: number;
  theme: string;
}

const LinkContainer = styled(Link)<KeyTheme>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 478px;
  overflow: hidden;
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
      transform: scale(1.5);
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
