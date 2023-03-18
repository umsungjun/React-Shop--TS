import axios from "axios";

const remote = axios.create(); // axios객체를 생성

export interface ProductListResponseType {
  //response에서 data만 추출
  data: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
      count: number;
      rate: number;
    };
    title: string;
  }[];
}

export const fetchProducts = async () => {
  const productURL = "https://fakestoreapi.com/products";

  const response = await remote.get(productURL);
  // console.log("response", response);
  // console.log("responsedata", response.data);
  return response.data;
};
