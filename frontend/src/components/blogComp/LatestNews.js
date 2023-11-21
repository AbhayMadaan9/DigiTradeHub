import React from "react";
import styled from "styled-components";
import beta from "../../assets/blog/beta.svg";
import follow from "../../assets/blog/follow.svg";
import qna1 from "../../assets/blog/qna1.svg";
import qna2 from "../../assets/blog/qna2.svg";
import smallBets from "../../assets/blog/smallBets.svg";

const Section = styled.div`
  background-color: #ff90e8;
  position: relative;
  padding-top: 6.5rem;
  padding-bottom: 7rem;
  border-bottom: 2px solid #000;
`;

const Header = styled.div`
  display: grid;
  width: 65vw;
  max-width: 45rem;
  margin-right: auto;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  /* grid-auto-columns: 1fr; */
  grid-column-gap: 0rem;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  text-align: center;

  h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 7rem;
    line-height: 0.7;
    font-weight: 500;
    letter-spacing: -0.02em;
    /* border: 1px solid red; */
  }

  h4 {
    /* border: 1px solid red; */
    font-size: 1.75rem;
    font-weight: 600;
  }

  p {
    /* border: 1px solid red; */
    font-size: 1.8rem;
    line-height: 1.3;
    font-weight: 500;
    letter-spacing: -0.01em;
  }

  p.link{
    font-size: 1.5rem;
    font-weight: 600;

    span{
        text-decoration: underline;
    }
  }
`;

const BetaImg = styled.div`
  position: absolute;
  left: 5rem;
  top: 2.3rem;
  right: auto;
  bottom: auto;
  img {
    width: 9rem;
  }
`;

const QNA = styled.div`
  position: absolute;
  left: auto;
  top: 3.3rem;
  right: 18vw;
  bottom: auto;
  img {
    width: 8rem;
  }
`;

const SmallBets = styled.div`
  position: absolute;
  right: 4vw;
  bottom: -2.3rem;
  img {
    width: 18vw;
  }
`;

const Follow = styled.div`
  position: absolute;
  left: -3vw;
  bottom: 2.7rem;
  z-index: 2;
  img {
    width: 20vw;
  }
`;

const QNA2 = styled.div`
  position: absolute;
  left: 13vw;
  bottom: -0.7rem;
  z-index: 1;
  img {
    width: 10vw;
  }
`;

const LatestNews = () => {
  return (
    <Section>
      <Header>
        <h4>DigiTradeHub Blog</h4>
        <h1>The latest news and resources</h1>
        <p>
          There’s no roadmap for making your own road. But here’s some how-tos,
          helpful tips, templates, and tools to help you.
        </p>
        <p className="link" >
          Start reading below or
          <span> grab the RSS.</span>
        </p>
      </Header>
      <BetaImg>
        <img src={beta} alt="" />
      </BetaImg>
      <QNA>
        <img src={qna1} alt="" />
      </QNA>
      <SmallBets>
        <img src={smallBets} alt="" />
      </SmallBets>
      <Follow>
        <img src={follow} alt="" />
      </Follow>
      <QNA2>
        <img src={qna2} alt="" />
      </QNA2>
    </Section>
  );
};

export default LatestNews;
