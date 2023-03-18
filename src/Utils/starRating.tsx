import { BsStarFill } from "react-icons/bs"; // 꽉찬 별
import { BsStarHalf } from "react-icons/bs"; // 반쪽 별
import styled from "styled-components";

export const starRating = (count: number, rate: number) => {
  // console.log(count);
  if (rate < 0.5) {
    return (
      <RaitingBox>
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
      </RaitingBox>
    );
  } else if (rate < 1) {
    return (
      <RaitingBox>
        <BsStarHalf className="colored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
      </RaitingBox>
    );
  } else if (rate < 1.5) {
    return (
      <RaitingBox>
        <BsStarFill className="colored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
      </RaitingBox>
    );
  } else if (rate < 2) {
    return (
      <RaitingBox>
        <BsStarFill className="colored" />
        <BsStarHalf className="colored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
      </RaitingBox>
    );
  } else if (rate < 2.5) {
    return (
      <RaitingBox>
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
      </RaitingBox>
    );
  } else if (rate < 3) {
    return (
      <RaitingBox>
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarHalf className="colored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
      </RaitingBox>
    );
  } else if (rate < 3.5) {
    return (
      <RaitingBox>
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarFill className="noColored" />
        <BsStarFill className="noColored" />
      </RaitingBox>
    );
  } else if (rate < 4) {
    return (
      <RaitingBox>
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarHalf className="colored" />
        <BsStarFill className="noColored" />
      </RaitingBox>
    );
  } else if (rate < 4.5) {
    return (
      <RaitingBox>
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarFill className="noColored" />
      </RaitingBox>
    );
  } else if (rate < 5) {
    return (
      <RaitingBox>
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarHalf className="colored" />
      </RaitingBox>
    );
  } else if (rate === 5) {
    return (
      <RaitingBox>
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
        <BsStarFill className="colored" />
      </RaitingBox>
    );
  }
};

const RaitingBox = styled.div`
  font-size: 1.5rem;
  .noColored {
    color: #facc1533;
  }
  .colored {
    color: #facc15;
  }
`;
