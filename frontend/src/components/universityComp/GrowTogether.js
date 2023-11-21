import React from "react";
import styled from "styled-components";
import grow from "../../assets/university/grow.svg";

const Section = styled.div`
  background-color: #ff90e8;
  border-bottom: 2px solid #000;
  display: flex;
  height: 36rem;
`;

const LeftContainer = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 22rem;
  padding: 6.5vw;
  align-items: flex-start;
  justify-content: center;
  text-align: left;

  h3{
    font-size: 2.8rem;
    line-height: 1.25;
    letter-spacing: -0.01em;
    width: 100%;
    line-height: 1;
    margin-bottom: 3rem;
    font-weight: 600;
    /* border: 1px solid red; */
  }
  
  p{
    /* border: 1px solid red; */
    width: 90%;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.1;
  }
`;

const ImageContainer = styled.div`
  background-color: #23a094;
  width: 50%;
  height: 36rem;
  overflow: hidden;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GrowTogether = () => {
  return (
    <Section>
      <LeftContainer>
        <h3>Grow Together</h3>
        <p>
          Sell what you know and ask questions about what you don’t. Start
          learning in the Community, where thousands of alums are posting
          advice, tips, and encouragement. Introduce yourself, learn from
          others, and get inspired.
        </p>
      </LeftContainer>
      <ImageContainer>
        <img src={grow} alt="" />
      </ImageContainer>
    </Section>
  );
};

export default GrowTogether;
