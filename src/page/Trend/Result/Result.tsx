import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { Header } from "../../../components/Main";
import { Main } from "../../../components/Trend/Result/Main";
import { Sub } from "../../../components/Trend/Result/Sub";
import { initTrendAnswer, TTrend } from "../../../stores/trend/trend";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReducerType } from "../../../stores/rootReducer";
import { TrendScorePermute } from "../../../common/Calculater";

export const Page = (): React.ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLinkTo = useCallback(() => {
    dispatch(initTrendAnswer({}));
    history.replace("/main");
  }, [history]);

  const trendResult = useSelector<ReducerType, TTrend>(
    (state) => state.TrendReducer
  );

  const score = TrendScorePermute(trendResult.answers);
  return (
    <>
      <ResultPage>
        <Header />
        <ResultWrapper>
          <Main score={score} />
          <Sub score={score} />
        </ResultWrapper>
        <MainButton onClick={onLinkTo}>메인으로 돌아가기</MainButton>
      </ResultPage>
    </>
  );
};

const ResultPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f0f0;
`;

const ResultWrapper = styled.div`
  background-color: #fff;
  margin: auto;
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 3rem;
`;
const MainButton = styled.div`
  cursor: pointer;
  width: 50%;
  margin: auto;
  height: 3rem;
  margin-top: 1rem;
  text-align: center;
  border-radius: 10px;
  font-family: "AppleSDB";
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background-color: #0765cd;
`;

export default Page;
