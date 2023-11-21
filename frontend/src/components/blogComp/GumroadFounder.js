import React from "react";
import styled from "styled-components";
import sahil from "../../assets/blog/sahil.svg";
import gum from "./Gum.svg";

const Section = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  border-bottom: 2px solid #000;
  background-color: #000;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 48rem;
  margin-right: 0px;
  margin-left: 0px;
  justify-items: stretch;
  align-items: stretch;
  align-content: start;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 3rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 6.5vw;
  padding-left: 0;
  color: #fff;

  p,
  h2,
  div {
    /* border: 1px solid #fff; */
    text-align: left;
  }
  
  h2{
    /* border: 1px solid #fff; */
    font-size: 3rem;
    line-height: 1;
    font-weight: 500;
    letter-spacing: -0.01em;
  }
  
  p.msg{
    /* border: 1px solid #fff; */
    font-size: 1.85rem;
    line-height: 1.1;
    font-weight: 500;
    letter-spacing: -0.01em;

    span{
      text-decoration: underline;
    }
  }

  p.date{
     /* border: 1px solid #fff; */
    font-size: 1.3rem;
    line-height: 1;
    font-weight: 500;
    letter-spacing: -0.01em;
  }
`;

const SahilBio = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: 7rem 1fr;
  grid-template-rows: auto;
  /* border: 1px solid #fff; */

  div {
    p {
      /* border: 1px solid #fff; */
      font-size: 1.5rem;
      line-height: 1;
      font-weight: 500;
      margin-bottom: 0.25rem;
    }
    
    span {
      /* border: 1px solid #fff; */
      font-weight: 600;
      line-height: 1;
      font-size: 1.7rem;
      display: block;
      white-space: nowrap;
    }
  }
`;

const GumroadFounder = () => {
  return (
    <Section>
      <ImageContainer>
        <img src={gum} alt="" />
      </ImageContainer>
      <RightContainer>
        <SahilBio>
          <img src={sahil} alt="" />
          <div>
            <p>Abhay Madaan</p>
            <p>DigiTradeHub founder, Irregular painter,</p>
            <span>VC-hating VC, Aspiring Sci-Fi author</span>
          </div>
        </SahilBio>
        <h2>Betting on a new DigiTradeHub</h2>
        <p className="msg" >
        DigiTradeHub is ten years old, but instead of just celebrating, we’re
          focusing on the next 10 years. I’ve been asking myself, and many
          others, which path DigiTradeHub should take next to further support
          creators. <span>Read more</span> about the bets we're placing — beginning with our
          new brand.
        </p>
        <p className="date" >November 26, 2021</p>
      </RightContainer>
    </Section>
  );
};

export default GumroadFounder;
