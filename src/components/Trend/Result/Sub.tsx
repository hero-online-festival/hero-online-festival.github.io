import React from "react";
import styled from "@emotion/styled";
import { MBTIType, Trend } from "../../../common/Result";

interface ISub {
  score: number;
}

export const Sub = ({ score }: ISub): React.ReactElement => {
  return (
    <>
      <SubWrapper>
        <Description>{Trend[score].description}</Description>
        <Item>필수템 : {Trend[score].item}</Item>
      </SubWrapper>
    </>
  );
};

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  max-height: 50%;
  margin: auto;
  justify-content: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 1rem;
  margin: auto;
  margin-top: 1rem;
  background-color: #5671d38c;
  border-radius: 10px;

  font-size: 1rem;
  margin-bottom: 0.9rem;
  font-family: "AppleSDM";
`;

const Item = styled.div`
  text-align: center;
  font-size: 1rem;
  width: 70%;
  margin: auto;
  font-family: "AppleSDB";
`;