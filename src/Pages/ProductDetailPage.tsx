import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { ProductListProps } from "../Main/MainPage";
import { useDispatch } from "react-redux";
import { increment } from "../Store/cartCountSlice";

import { HiChevronRight } from "react-icons/hi";
import { starRating } from "../Utils/starRating";
import { TbCurrencyDollar } from "react-icons/tb";
import { scrollToTop } from "../Utils/scrollToTop";

export default function ProductDetailPage(props: ProductListProps) {
  const { id } = useParams();
  scrollToTop();
  const dispatch = useDispatch();

  // const [productCount, setProductCount] = useState(0);

  // useEffect(() => {
  //   const cartItem = localStorage.getItem("CART_ITEM");
  //   if (!cartItem) return;

  //   const parsedCartItem = JSON.parse(cartItem);
  //   let countSum = 0;
  //   for (const key in parsedCartItem) {
  //     if (parsedCartItem.hasOwnProperty(key)) {
  //       countSum += parsedCartItem[key].count;
  //     }
  //   }
  //   setProductCount(countSum);
  // }, []);
  // console.log(productCount);

  const handleGetCart = (productId: string) => {
    // setProductCount(productCount + 1);
    dispatch(increment());
    const cartIn = localStorage.getItem("CART_ITEM") || null;

    if (!cartIn) {
      // 카트가 비어있는 경우 새로운 상품 정보를 추가합니다.
      // console.log("카트가 빔");
      const newCartItem = { id: productId, count: 1 };
      localStorage.setItem(
        "CART_ITEM",
        JSON.stringify({ [productId]: newCartItem })
      );
    } else {
      // 카트에 이미 상품 정보가 있는 경우
      // console.log("카트에 상품이 이미 있음");
      const cartItems = JSON.parse(cartIn);
      const existingCartItem = cartItems[productId]; // 데이터를 파싱하지않으면 오류가 발생

      if (existingCartItem) {
        // 동일한 상품이 이미 있으면 카운트를 1 증가시킵니다.
        // console.log("이미 있는 상품입니다.");
        existingCartItem.count += 1;
        localStorage.setItem("CART_ITEM", JSON.stringify(cartItems));
      } else {
        // 새로운 상품 정보를 추가합니다.
        // console.log("새로운 상품입니다.");
        const newCartItem = { id: productId, count: 1 };
        cartItems[productId] = newCartItem;
        localStorage.setItem("CART_ITEM", JSON.stringify(cartItems));
      }
    }
  };

  const categoryChange = (category: string) => {
    if (category.includes("clothing")) {
      return "패션";
    } else if (category === "jewelery") {
      return "액세서리";
    } else {
      return "디지털";
    }
  };

  console.log(props.productList.length);
  if (props.productList.length < 1) {
    return (
      <Section theme={props.theme}>
        <ScheletonBox theme={props.theme}>상품정보가 없습니다.</ScheletonBox>
      </Section>
    );
  }
  return (
    <Section theme={props.theme}>
      {props.productList.map((product) => {
        if (product.id == id) {
          // console.log(product);
          return (
            <ProductDetailSection key={product.id}>
              <CategoryBox>
                {categoryChange(product.category)} <HiChevronRight />
                {product.title}
              </CategoryBox>
              <ProductSection>
                <ProductImgBox theme={props.theme}>
                  <ProductImg src={product.image} />
                </ProductImgBox>
                <ProductInfoBox>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductInfo>{product.description}</ProductInfo>
                  <ProductRating>
                    {starRating(product.rating.count, product.rating.rate)}
                    <ProductRatingText>
                      {product.rating.rate} / {product.rating.count} 참여
                    </ProductRatingText>
                  </ProductRating>
                  <ProductPrice>
                    <TbCurrencyDollar />
                    {Math.round(product.price)}
                  </ProductPrice>
                  <CartButtonBox>
                    <GetCartButton
                      onClick={() => handleGetCart(String(product.id))}
                    >
                      {/* 한번 감싸서 전송하면 괜찮 */}
                      장바구니에 담기
                    </GetCartButton>
                    <GoCartButton to="/cart" theme={props.theme}>
                      장바구니로 이동
                    </GoCartButton>
                  </CartButtonBox>
                </ProductInfoBox>
              </ProductSection>
            </ProductDetailSection>
          );
        }
      })}
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

const ProductDetailSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryBox = styled.div`
  width: 71%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.3rem;
  }
`;

const ProductSection = styled.section`
  display: flex;
  margin-top: 3.5rem;
  width: 69%;
  @media (max-width: 1025px) {
    flex-direction: column;
  }
`;

const ProductImgBox = styled.div`
  min-width: 20em;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 1rem;
`;

const ProductImg = styled.img`
  height: 18rem;
`;

const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  gap: 1rem;
  padding: 2rem;
`;

const ProductTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0px;
  display: flex;

  ::after {
    content: "NEW";
    margin-left: 0.8rem;
    padding: 0px 8px;
    background: #37cdbe;
    color: #fff;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    border-radius: 10px;
  }
`;

const ProductInfo = styled.p`
  margin: 0px;
  font-weight: 500;
  line-height: 1.5rem;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
`;

const ProductRatingText = styled.div`
  margin-left: 8px;
  font-weight: 600;
`;

const ProductPrice = styled.p`
  font-size: 1.875rem;
  line-height: 2.25rem;
  display: flex;
  align-items: center;
  margin: 0;
`;

const CartButtonBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const GetCartButton = styled.button`
  border: none;
  color: #fff;
  background: #570df8;
  padding: 1rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 900;
  border-radius: 10px;
  cursor: pointer;
`;

const GoCartButton = styled(Link)`
  border: 1px solid black;
  background: inherit;
  padding: 1rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 900;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#2a303c"};
  border: ${(props) =>
    props.theme === "light" ? "1px solid black" : "1px solid #a6adba"};
`;

const ScheletonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 20rem;
  margin-top: 5rem;
  border-radius: 1rem;
  font-size: 2rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#2a303c" : "#fff"};
  color: ${(props) => (props.theme === "light" ? "#a6adba" : "#1f2937")};
`;
