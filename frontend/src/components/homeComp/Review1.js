import React from "react";
import styled from "styled-components";
import maxImg from "../../assets/Maxulli.png";
import Pen from "../../assets/Pen.svg";
import Chip from "../generalComp/Chip";

const Section = styled.div`
  background-color: #ff90e8;
  border-bottom: 2px solid #000;
  display: flex;
  font-family: Darker Grotesque;
  box-sizing: border-box;
`;

const ReviewContainer = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  width: 50vw;
  padding-left: 4rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2.3rem;
    font-weight: 600;
    margin-bottom: 2.5rem;
    line-height: 1.15;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    /* border: 1px solid red; */
    width: 100%;
  }
`;

const RightContainer = styled.div`
  box-sizing: border-box;
  /* border: 1px solid red; */
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;

  img.max-img {
    display: block;
    height: 80vh;
  }
`;

const ImageContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;
`;

const PenImage = styled.div`
  position: absolute;
  width: 11.5rem;
  height: 12rem;
  top: 48vh;
  left: 1rem;

  img {
    width: 11.5rem;
    height: 12rem;
  }
`;

const Review1 = () => {
  return (
    <Section>
      <ReviewContainer>
        <h2>
          “I launched MaxPacks as an experimental side gig; but within 2 years
          those Procreate brushes were earning more than my 6-figure salary in
          CG. Leaving in favor of DigiTradeHub enabled me to explore other aspects of
          my art, develop new hobbies, and finally prioritize my personal life.”
        </h2>
        <h4>Max Ulichney sells Procreate Brush Packs</h4>
      </ReviewContainer>
      <RightContainer>
        <ImageContainer>
          <img className="max-img" src={maxImg} alt="" />
          <PenImage>
            <img src={Pen} alt="" />
          </PenImage>
          <Chip name="maxulichney" />
        </ImageContainer>
      </RightContainer>
    </Section>
  );
};

export default Review1;
