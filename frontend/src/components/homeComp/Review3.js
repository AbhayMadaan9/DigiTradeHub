import React from "react";
import styled from "styled-components";
import review3 from "../../assets/review3.png";
import dollar from "../../assets/dollar.svg";
import howTo from "../../assets/how-to.svg";
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
    font-size: 2.5rem;
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

  img.steph-img {
    display: block;
    height: 100vh;
  }
`;

const ImageContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;
`;

const HowToImg = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  bottom: -2rem;
  right: -3.5rem;
`;

const DollarImg = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  left: 3rem;
  top: -1rem;
  right: auto;
  bottom: auto;

  img {
    width: 6rem;
  }
`;

const Review3 = () => {
  return (
    <Section>
      <ReviewContainer>
        <h2>
          “For years, I had a goal to develop ‘passive’ income streams, but
          struggled to make that a reality. Last year, I started selling
          informational products on DigiTradeHub and since then have made $10k+ per
          month building products that I love.”
        </h2>
        <h4>Steph Smith sells content tutorials</h4>
      </ReviewContainer>
      <RightContainer>
        <ImageContainer>
          <img className="steph-img" src={review3} alt="" />
          <HowToImg>
            <img src={howTo} alt="" />
          </HowToImg>
          <DollarImg>
            <img src={dollar} alt="" />
          </DollarImg>
          <Chip name="stephsmithio" bottom="1rem" left="-1rem" />
        </ImageContainer>
      </RightContainer>
    </Section>
  );
};

export default Review3;
