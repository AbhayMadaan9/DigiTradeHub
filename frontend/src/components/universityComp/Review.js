import React from "react";
import styled from "styled-components";
import ed from "../../assets/university/edImg.png";
import scale from "../../assets/university/scale.svg";
import Chip from "../generalComp/Chip";

const Section = styled.div`
  background-color: #23a094;
  border-bottom: 2px solid #000;
  display: flex;
  /* font-family: Darker Grotesque; */
  box-sizing: border-box;
`;

const ReviewContainer = styled.div`
  /* border: 1px solid red; */
  padding-right: 6.5vw;
  box-sizing: border-box;
  width: 50vw;
  /* padding-left: 4rem; */
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2.5rem;
    line-height: 110%;
    font-weight: 600;
    margin-bottom: 2.5rem;
  }

  h4 {
    /* border: 1px solid red; */
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    width: 100%;
  }
`;

const LeftContainer = styled.div`
  /* box-sizing: border-box; */
  /* border: 1px solid red; */
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;

  img.max-img {
    display: block;
    height: 100vh;
  }
`;

const ImageContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;
  /* width: 100%; */

  img {
  }
`;

const ScaleImg = styled.div`
  position: absolute;
  left: auto;
  right: -3rem;
  bottom: 2rem;

  img {
    width: 13rem;
  }
`;

const Review = () => {
  return (
    <Section>
      <LeftContainer>
        <ImageContainer>
          <img className="max-img" src={ed} alt="" />
          <ScaleImg>
            <img src={scale} alt="" />
          </ScaleImg>
          <Chip name="edwardlatimore" bottom="3.8rem" left="-2.5rem" />
        </ImageContainer>
      </LeftContainer>
      <ReviewContainer>
        <h2>
        DigiTradeHub has been essential to my journey as an entrepreneur. It has
          streamlined so many of the day-to-day operations, freeing me up to
          focus on creating content for our wonderful community.”
        </h2>
        <h4>Ed Latimore sells Twitter engagement tutorials</h4>
      </ReviewContainer>
    </Section>
  );
};

export default Review;
