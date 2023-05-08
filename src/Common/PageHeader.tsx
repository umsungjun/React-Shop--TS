import React, { useRef, useState } from "react";
import styled from "styled-components"; // npm i -D @types/styled-components 타입스크립트로 타입을 정의해 줘야 함
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Store";

import { FaRegMoon } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import { TbSunHigh } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";

interface themProps {
  changeTheme: () => void;
  theme: string;
  productList: Array<any>;
}

export default function PageHeader({
  changeTheme,
  theme,
  productList,
}: themProps) {
  const count = useSelector((state: RootState) => state.counter.value);

  const [search, setSerch] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearchbar = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value); // 값 잘 넘어옴
    setSerch(e.target.value);
  };

  const filterProduct = (search: string) => {
    return productList.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleInputClear = () => {
    if (searchRef.current) {
      searchRef.current.value = "";
    }
    setSerch("");
  };

  const [show, setShow] = useState("off");

  const handleSideBar = () => {
    setShow("on");
    // document.body.style.overflow = "hidden";
    // document.body.style.opacity = "0.3";
    // document.body.style.transition = "opacity 0.3s ease-in-out";
  };

  const handleSideBarOff = () => {
    setShow("off");
    document.body.style.overflow = "visible";
    // document.body.style.opacity = "1";
  };

  return (
    <HeaderContainer theme={theme}>
      <SideBar show={show} theme={theme} onClick={handleSideBarOff}></SideBar>
      <SideBarWapper show={show} theme={theme}>
        <SideBarLink theme={theme} to="/fashion" onClick={handleSideBarOff}>
          패션
        </SideBarLink>
        <SideBarLink theme={theme} to="/accessory" onClick={handleSideBarOff}>
          액세서리
        </SideBarLink>
        <SideBarLink theme={theme} to="/digital" onClick={handleSideBarOff}>
          디지털
        </SideBarLink>
      </SideBarWapper>
      <HeaderWraper>
        <HambergerLabel theme={theme} onClick={handleSideBar}>
          <RxHamburgerMenu />
        </HambergerLabel>
        <LogoLink theme={theme} to="/">
          React Shop
        </LogoLink>
        <LinkBox>
          <StyledLink theme={theme} to="/fashion">
            패션
          </StyledLink>
          <StyledLink theme={theme} to="/accessory">
            액세서리
          </StyledLink>
          <StyledLink theme={theme} to="/digital">
            디지털
          </StyledLink>
          {/* TODO LINK연결 */}
        </LinkBox>
        <HeaderRightBox>
          <LightBlackBtnBox>
            {theme === "light" ? (
              <FaRegMoon onClick={changeTheme} />
            ) : (
              <TbSunHigh style={{ color: "#fff" }} onClick={changeTheme} />
            )}
          </LightBlackBtnBox>
          <SearchBox
            theme={theme}
            type="text"
            placeholder="검색"
            onChange={handleSearchbar}
            ref={searchRef}
          />
          <SearchUl theme={theme}>
            {search &&
              filterProduct(search).map((product) => (
                <LinkLi
                  to={`product/${product.id}`}
                  key={product.id}
                  onClick={handleInputClear}
                  theme={theme}
                >
                  <LinkText>{product.title}</LinkText>
                </LinkLi>
              ))}
          </SearchUl>
          <BasketBox theme={theme} to="cart">
            <BsBasket3 />
            <BasketCount>{count}</BasketCount>
          </BasketBox>
        </HeaderRightBox>
      </HeaderWraper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#191d24"};
  padding: 8px;
  width: 100%;
  height: 48px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  position: fixed;
  z-index: 10;
  color: ${(props) => (props.theme === "light" ? "#191d24" : "#fff")};
`;

interface showTheme {
  show: string;
  theme: string;
}

const SideBar = styled.div<showTheme>`
  display: ${(props) => (props.show === "on" ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vh;
  background: ${(props) => (props.theme === "light" ? "#acaeb3" : "#20252e")};
  opacity: 0.5;
`;

const SideBarWapper = styled.ul<showTheme>`
  display: ${(props) => (props.show === "on" ? "flex" : "none")};
  flex-direction: column;
  padding: 2rem;
  width: 25vh;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props) => (props.theme === "light" ? "#fff" : "#20252e")};
  left: -30vh;
  transform: translateX(${(props) => (props.show === "on" ? "30vh" : "0")});
  transition: transform 1s ease-in-out;
  z-index: 10;
`;

const SideBarLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 0 1rem 1rem;
  border-radius: 1rem;
  &:hover {
    background-color: ${(props) =>
      props.theme === "light" ? "#d2d4d7" : "#353a42"};
    transition: background-color 0.5s;
  }
`;

const HeaderWraper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 86rem;
  height: 100%;
`;

const HambergerLabel = styled.label`
  display: none;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 10px;
  padding: 3px;
  &:hover {
    background-color: ${(props) =>
      props.theme === "light" ? "#d2d4d7" : "#353a42"};
    transition: background-color 0.5s;
  }
  svg {
    color: ${(props) => (props.theme === "light" ? "#191d24" : "#fff")};
    font-size: 1.6rem;
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

const LogoLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${(props) => (props.theme === "light" ? "#191d24" : "#fff")};

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const LinkBox = styled.div`
  flex: 1 1 0px;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  min-height: 2rem;
  font-size: 0.875rem;
  font-weight: 800;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${(props) =>
      props.theme === "light" ? "#d2d4d7" : "#353a42"};
    transition: background-color 0.5s;
  }
`;

const HeaderRightBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  height: 100%;
  margin-right: 0.5rem;
  position: relative;
`;

const SearchBox = styled.input`
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#d2d4d7" : "#353a42"};
  transition: background-color 0.5s;
  border: none;
  width: 13rem;
  height: 100%;
  padding: 0 16px;
  border-radius: 0.25rem;
  outline: none;
  font-size: 0.8rem;
  margin-right: 0.3rem;
`;

const SearchUl = styled.ul`
  width: 16rem;
  max-height: 26rem;
  overflow: scroll;
  overflow-x: hidden;
  list-style: none;
  padding: 0px;
  margin: 0px;
  position: absolute;
  top: 56px;
  left: 65px;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#353a42"};
  display: flex;
  flex-direction: column;
  // box-shadow: 0px 0px 1px 1px whitesmoke;
  border-radius: 0px 0px 10px 10px;
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
`;

const LinkLi = styled(Link)`
  display: block;
  padding: 12px 16px;
  border-radius: 6px;
  &:hover {
    background-color: ${(props) =>
      props.theme === "light" ? "#e8e9eb" : "#545d6c"};
    transition: background-color 0.5s;
  }

  &:focus {
    outline: none;
    background-color: ${(props) =>
      props.theme === "light" ? "#e8e9eb" : "#545d6c"};
    transition: background-color 0.5s;
  }
`;

const LinkText = styled.span`
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BasketBox = styled(Link)`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  svg {
    font-size: 23px;
    color: ${(props) => (props.theme === "light" ? "#191d24" : "#fff")};
  }
  &:hover {
    background-color: ${(props) =>
      props.theme === "light" ? "#d2d4d7" : "#353a42"};
    transition: background-color 0.5s;
  }
  position: relative;
`;

const BasketCount = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  background-color: rgb(239, 68, 68);
  color: rgb(229, 231, 235);
  font-weight: 700;
  top: 0px;
  right: 0px;
  border-radius: 50%;
  font-size: 0.8rem;
`;

const LightBlackBtnBox = styled.a`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  svg {
    font-size: 23px;
  }
  margin-right: 0.5rem;
`;
