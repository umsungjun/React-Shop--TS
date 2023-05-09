import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import carousel1 from "../assets/carouselImg/carousel1.jpeg";
import carousel2 from "../assets/carouselImg/carousel2.jpeg";
import carousel3 from "../assets/carouselImg/carousel3.jpeg";
import { ProductListProps } from "./MainPage";

export default function CarouselComponent({ theme }: ProductListProps) {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showThumbs={false} // 아래 나오는 이미지 제거
      showStatus={false}
    >
      <CarouselSlideBox1>
        <CarouselDesc>
          <CarouselDescTitle>물빠진 청바지!</CarouselDescTitle>
          <CarouselDescSubTitle>
            이제 막 도착한 패션 청바지를 구경해 보세요.
          </CarouselDescSubTitle>
          <StyledLink theme={theme} to="/fashion">
            <LinkInDiv theme={theme}>
              바로가기
              <HiOutlineArrowSmRight />
            </LinkInDiv>
          </StyledLink>
        </CarouselDesc>
      </CarouselSlideBox1>
      <CarouselSlideBox2>
        <CarouselDesc>
          <CarouselDescTitle>신속한 업무처리!</CarouselDescTitle>
          <CarouselDescSubTitle>
            다양한 디지털 상품을 둘러보세요.
          </CarouselDescSubTitle>
          <StyledLink theme={theme} to="/digital">
            <LinkInDiv theme={theme}>
              바로가기
              <HiOutlineArrowSmRight />
            </LinkInDiv>
          </StyledLink>
        </CarouselDesc>
      </CarouselSlideBox2>
      <CarouselSlideBox3>
        <CarouselDesc>
          <CarouselDescTitle>신선한 식품!</CarouselDescTitle>
          <CarouselDescSubTitle>
            농장 직배송으로 더욱 신선한 식료품을 만나보세요.
          </CarouselDescSubTitle>
          <StyledLink theme={theme} to="/grocery">
            <LinkInDiv theme={theme}>
              바로가기
              <HiOutlineArrowSmRight />
            </LinkInDiv>
          </StyledLink>
        </CarouselDesc>
      </CarouselSlideBox3>
    </Carousel>
  );
}

const CarouselSlideBox1 = styled.div`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${carousel1});
  background-repeat: no-repeat;
  background-position: center;
  color: white;
`;

const CarouselSlideBox2 = styled.div`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${carousel2});
  background-repeat: no-repeat;
  background-position: center;
  color: white;
`;

const CarouselSlideBox3 = styled.div`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${carousel3});
  background-repeat: no-repeat;
  background-position: center;
  color: white;
`;

const CarouselDesc = styled.div`
  padding: 0px 40px;
  width: 1360px;
  text-align: left;
`;

const CarouselDescTitle = styled.h2`
  margin: 0;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;

const CarouselDescSubTitle = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  height: 3rem;
  padding: 0 1rem;
  min-height: 3rem;
  font-size: 0.875rem;
  margin-top: 0.75rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#3d4451" : "#191d24"};
  color: ${(props) => (props.theme === "light" ? "#fff" : "#626671")};
  text-align: center;
  border-radius: 8px;
`;

const LinkInDiv = styled.div`
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: bold;
  color: ${(props) => (props.theme === "light" ? "#fff" : "#a6adab")};
  svg {
    margin-left: 0.25rem;
    font-size: 1rem;
  }
`;
