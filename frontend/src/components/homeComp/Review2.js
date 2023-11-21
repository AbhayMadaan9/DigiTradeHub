import React from "react";
import styled from "styled-components";
import Chip from "../generalComp/Chip";
import Book from "../../assets/Book.svg";
import trendsvc from "../../assets/trendsvc.png";
import Free from "../../assets/Free.svg";

const Section = styled.div`
  background-color: rgb(35, 160, 148);
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
`;

const ImageContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;

  img#profile {
    display: block;
    height: 90vh;
    width: 100%;
  }
`;

const BookImage = styled.div`
  position: absolute;
  width: 15rem;
  height: 14rem;
  top: 48vh;
  left: -6rem;
  /* border: 1px solid red; */

  img {
    width: 100%;
    height: 100%;
  }
`;

const FreeImage = styled.div`
  position: absolute;
  top: -2.5rem;
  right: -3rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Review2 = () => {
  return (
    <Section>
      <ReviewContainer>
        <h2>
          “Originally, I took pre-orders for my Trend Reports on DigiTradeHub. But I
          received... exactly $0. So I changed tactics: I made half of my report
          free, and the other half paid. Today, 99% of Trends.VC revenue is
          recurring in the form of annual and quarterly subscriptions.”
        </h2>
        <h4>Dru Riley sells business insights and expertise</h4>
      </ReviewContainer>
      <RightContainer>
        <ImageContainer>
          <img id="profile" src={trendsvc} alt="" />
          <BookImage>
            <img src={Book} alt="" />
          </BookImage>
          <FreeImage>
            <img src={Free} alt="" />
          </FreeImage>
          <Chip name="trendsvc" />
        </ImageContainer>
      </RightContainer>
    </Section>
  );
};

export default Review2;
