import styled from "styled-components";

import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ProductListProps } from "../Main/MainPage";
import { decrement, increment, reset } from "../Store/cartCountSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import PaymentModal from "../Common/PaymentModal";
import { scrollToTop } from "../Utils/scrollToTop";

export default function CartPage(props: ProductListProps) {
  scrollToTop();
  const dispatch = useDispatch();

  const cartItems = localStorage.getItem("CART_ITEM");
  const objCartin = cartItems ? JSON.parse(cartItems) : {};
  localStorage.setItem("CART_ITEM", JSON.stringify(objCartin));
  const [productCount, setProductCount] = useState(() => {
    const initProductCount: { [key: number]: { count: number } } = {};
    for (let key in objCartin) {
      initProductCount[objCartin[key].id] = { count: objCartin[key].count };
    }
    return initProductCount;
  }); // 상품 count
  const [productSum, setProductSum] = useState(0);

  useEffect(() => {
    let totalCount = 0;
    for (let key in objCartin) {
      if (objCartin.hasOwnProperty(key)) {
        const index = objCartin[key].id - 1;
        if (index >= 0 && index < props.productList.length) {
          const price = Math.round(props.productList[index].price);
          totalCount += price * objCartin[key].count;
        }
      }
    }
    setProductSum(totalCount);
  }, [objCartin, props.productList]);

  // console.log(productSum);

  const handleProductCountMinus = (curCountId: number) => {
    objCartin[curCountId].count -= 1;
    localStorage.setItem("CART_ITEM", JSON.stringify(objCartin));

    const newProductCount = { ...productCount };
    newProductCount[curCountId].count -= 1;
    setProductCount(newProductCount);
    dispatch(decrement()); // 장바구니에서 1씩 감소
  };

  const handleProductCountPlus = (curCountId: number) => {
    objCartin[curCountId].count += 1;
    localStorage.setItem("CART_ITEM", JSON.stringify(objCartin));
    // console.log({ ...productCount, productCount });

    const newProductCount = { ...productCount };
    newProductCount[curCountId].count += 1;
    setProductCount(newProductCount);
    dispatch(increment()); // 장바구니에서 1씩 증가
  };
  // console.log(productCount);
  // console.log(productSum); // 상품 갯수가 없다면 cartWrapper가 없어야됨

  const [showModal, setShowModal] = useState(false);

  const handlePay = () => {
    setShowModal(true);
  };

  const handleCloseModal = (del: boolean) => {
    if (del) {
      localStorage.setItem("CART_ITEM", "");
      setProductSum(0);
      setProductCount({});
      setShowModal(false);
      dispatch(reset());
    }
    setProductSum(0);
    setShowModal(false);
  };

  return (
    <Section theme={props.theme}>
      {productSum > 0 ? (
        <CartWrapper>
          <CategoryBox>
            홈 <HiChevronRight /> 장바구니
          </CategoryBox>
          <CartBoxSumBox>
            <CartBox>
              {props.productList.map((product) => {
                for (let key in objCartin) {
                  if (objCartin[key].id == product.id) {
                    return (
                      <Product
                        count={productCount[product.id]?.count}
                        key={product.id}
                      >
                        <ProductImgBox to="/">
                          <ProductImg src={product.image} />
                        </ProductImgBox>
                        <ProductInfoBox>
                          <ProductInfoBoxLink to="/">
                            {product.title}
                          </ProductInfoBoxLink>
                          <ProductPrice>
                            ${Math.round(product.price * objCartin[key].count)}
                          </ProductPrice>
                          <ProductCountBox>
                            <ProductMinusButton
                              onClick={() =>
                                handleProductCountMinus(objCartin[key].id)
                              }
                            >
                              -
                            </ProductMinusButton>
                            <ProductCount>
                              {productCount[product.id]?.count}
                            </ProductCount>
                            <ProductPlusButton
                              onClick={() =>
                                handleProductCountPlus(objCartin[key].id)
                              }
                            >
                              +
                            </ProductPlusButton>
                          </ProductCountBox>
                        </ProductInfoBox>
                      </Product>
                    );
                  }
                }
              })}
            </CartBox>
            <CartSumBox>
              <CartSumPrice>총 : ${productSum}</CartSumPrice>
              <PaymentButton onClick={handlePay}>구매하기</PaymentButton>
            </CartSumBox>
          </CartBoxSumBox>
        </CartWrapper>
      ) : (
        <EmptCartSection>
          <InfoLinkBox>
            <h1>장바구니에 물품이 없습니다.</h1>
            <Link to="/">담으러가기</Link>
          </InfoLinkBox>
          <TotalBuyBox>
            <span>총 : $0</span>
            <PaymentButton onClick={handlePay}>구매하기</PaymentButton>
          </TotalBuyBox>
        </EmptCartSection>
      )}
      <PaymentModal
        show={showModal}
        onClose={handleCloseModal}
        theme={props.theme}
      />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  min-height: 60.9vh;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#2a303c"};
  color: ${(props) => (props.theme === "light" ? "#1f2937" : "#a6adba")};
`;

const CategoryBox = styled.div`
  width: 72%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    font-size: 1.3rem;
  }
  @media (max-width: 1025px) {
    width: 98%;
  }
`;

const CartBoxSumBox = styled.div`
  display: flex;
  width: 72%;
  justify-content: space-between;
  @media (max-width: 1025px) {
    width: 100%;
    flex-direction: column;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const CartBox = styled.div`
  display: flex;
  flex-direction: column;
`;
interface ProductProps {
  count: number;
  key: number;
}

const Product = styled.div<ProductProps>`
  display: ${(props) => (props.count > 0 ? "flex" : "none")};
  margin: 5rem 0;

  @media (max-width: 1025px) {
    flex-direction: column;
    padding: 0 2rem;
  }
`;

const ProductImgBox = styled(Link)`
  display: flex;
  padding: 1rem;
  align-items: center;
  background: #fff;
  border-radius: 1rem;

  @media (max-width: 1025px) {
    justify-content: center;
  }
`;

const ProductImg = styled.img`
  width: 192px;
  height: 192px;
  object-fit: contain;
`;

const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 0.5rem;
  padding: 2rem 3rem;

  @media (max-width: 1025px) {
    padding: 2rem 3rem 2rem 0;
  }
`;

const ProductInfoBoxLink = styled(Link)`
  font-size: 20px;
  font-weight: 700;
`;

const ProductPrice = styled.p`
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const ProductCountBox = styled.div`
  display: flex;
`;

const ProductMinusButton = styled.button`
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 10px 0px 0px 10px;
  color: #fff;
  background-color: #570df8;
  cursor: pointer;
`;

const ProductCount = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem;
`;

const ProductPlusButton = styled.button`
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 0px 10px 10px 0px;
  color: #fff;
  background-color: #570df8;
  cursor: pointer;
`;

const CartSumBox = styled.div`
  display: flex;
  height: 50px;
  padding-top: 6.3rem;

  @media (max-width: 1025px) {
    padding: 2rem 2rem 6rem 2rem;
  }
`;

const CartSumPrice = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-width: 8rem;
`;

const PaymentButton = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 20px;
  cursor: pointer;
  background-color: #570df8;
  border: none;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 10px;
  min-width: 6rem;
`;

const EmptCartSection = styled.section`
  width: 1360px;
  display: flex;
  flex-direction: column;
  margin-bottom: 8.2rem;
`;

const InfoLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 0;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
    width: 100px;
    height: 50px;
    background: #570df8;
    border-radius: 10px;
    font-size: 0.9rem;
    color: #fff;
    font-weight: 800;
  }
`;

const TotalBuyBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem;
  margin-top: 10rem;
  span {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-right: 1rem;
  }
  button {
    padding: 0.8rem 1rem;
    background: #570df8;
    color: #fff;
    font-weight: 800;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
