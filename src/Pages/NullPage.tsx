import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductListProps } from "../Main/MainPage";
import { scrollToTop } from "../Utils/scrollToTop";

interface themeProps {
  theme: string;
}

export default function NullPage({ theme }: themeProps) {
  scrollToTop();
  return (
    <Section theme={theme}>
      <SectionTitle>404</SectionTitle>
      <SectionSubTitle>페이지를 찾을 수 없습니다.</SectionSubTitle>
      <MainLink to="/">메인으로</MainLink>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  min-height: 60.9vh;
  justify-content: center;
  gap: 2.5rem;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 4rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#2a303c"};
  color: ${(props) => (props.theme === "light" ? "#1f2937" : "#a6adba")};
`;

const SectionTitle = styled.h1`
  font-size: 8rem;
  line-height: 1;
  margin-bottom: 0;
`;

const SectionSubTitle = styled.h3`
  font-size: 1.8rem;
  line-height: 2.25rem;
`;

const MainLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  height: 4rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  min-height: 4rem;
  font-size: 1.125rem;
  background: #570df8;
`;
