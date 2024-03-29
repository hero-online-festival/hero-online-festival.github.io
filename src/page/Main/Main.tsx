import React from "react";
import styled from "@emotion/styled";
import { Header, Events } from "../../components/Main";

const Page = (): React.ReactElement => {
  return (
    <>
      <MainPage>
        <Header />
        <MainWrapper>
          <MainText>이벤트</MainText>
          <EventsWrapper>
            <Events
              title={`PHASE 1\n졸업생 & 현직자 멘토링`}
              description="진로 고민 해결!!"
              linkText="자세한 내용은 클릭"
              link="/mentor"
              id=""
            />
            <Events
              title={`PHASE 2\nLCH`}
              description="공대의 진짜 롤 챔피언은?"
              linkText="자세한 내용은 클릭"
              link="/detail"
              id="lol"
            />
            <Events
              title={`PHASE 3\n공대 가요제`}
              description="공대 가왕은 누구?"
              linkText="자세한 내용은 클릭"
              link="/detail"
              id="songFestival"
            />

            <Events
              title={`PHASE 4\n이상형 학과 테스트`}
              description="내 이상형은 어디에...?"
              linkText="테스트 하려면 클릭"
              link="/mbti"
              id="0"
            />
            <Events
              title={`PHASE 5\n내 안의 학번 테스트`}
              description="내 진짜 학번은...?"
              linkText="테스트 하려면 클릭"
              link="/trend"
              id="0"
            />
            <Events
              title={`PHASE 6\n히어로 게임`}
              description="최후의 1인은 과연?"
              linkText="자세한 내용은 클릭"
              link="/detail"
              id="heroGame"
            />
          </EventsWrapper>
        </MainWrapper>
      </MainPage>
    </>
  );
};
const MainWrapper = styled.div`
  width: 90%;
  height: fit-content;
  margin: auto;
`;

const EventsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainText = styled.div`
  color: #000;
  margin-top: 30px;
  font-size: 1.2rem;
  font-family: "AppleSDB";
`;

const MainPage = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #f2f0f0;
  padding-bottom: 5rem;
`;
export default Page;
