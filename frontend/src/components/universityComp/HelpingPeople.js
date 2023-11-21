import React from "react";
import styled from "styled-components";
import helping from '../../assets/university/helping.svg'
import video from '../../assets/university/vidfeo.svg'

const Section = styled.div`
  display: flex;
  border-bottom: 2px solid #000;
  box-sizing: border-box;
`;

const RightContainer = styled.div`
  box-sizing: border-box;
  width: 50vw;
  background-color: #ff90e8;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0 5rem;
  /* padding: 6.5vw; */

  img {
    /* border: 1px solid red; */
    display: block;
    width: 95%;
    object-fit: contain;
  }
`;

const LeftContainer = styled.div`
  width: 50vw;
  border-right: 2px solid #000;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0 5rem;
  box-sizing: border-box;

  img {
    /* border: 1px solid red; */
    display: block;
    width: 95%;
    object-fit: contain;
  }
`;

const ImageContainer = styled.div`
  /* border: 1px solid blue; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`
  position: absolute;
  border: 2px solid #000;
  border-radius: 1.5rem;
  background-color: #fff;
  top: -3rem;
  left: -2rem;
  padding: 2rem;
  line-height: 100%;
  width: fit-content;
  font-size: 1.5rem;
  font-weight: 600;
`;

const HelpingPeople = () => {
  return (
    <Section>
      <LeftContainer>
        <ImageContainer>
          <img src={helping} alt="" />
          <Message>Start by helping people.</Message>
        </ImageContainer>
      </LeftContainer>
      <RightContainer>
        <ImageContainer>
          <img src={video} alt="" />
          <Message>Scale by helping people help people.</Message>
        </ImageContainer>
      </RightContainer>
    </Section>
  );
};

export default HelpingPeople;
