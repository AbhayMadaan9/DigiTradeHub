import React from "react";
import styled from "styled-components";
import Follow from "../../assets/Follow.svg";

const Section = styled.div`
  display: flex;
  border-bottom: 2px solid #000;
`;

const ImageContainer = styled.div`
  width: 50%;
  background-color: #000;
  border-right: 2px solid #000;
  min-height: 22rem;
  padding: 6.5vw;

  img {
    height: 100%;
  }
`;

const RightContainer = styled.div`
  width: 50%;
  font-family: Darker Grotesque;
  text-align: left;
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 3.4rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  div {
    /* border: 1px solid red; */
    font-size: 1.75rem;
    line-height: 110%;
    font-weight: 600;
    width: 87%;
  }
`;

const SellToAnyone = () => {
  return (
    <Section>
      <ImageContainer>
        <img src={Follow} alt="" />
      </ImageContainer>
      <RightContainer>
        <h3>Sell To Anyone</h3>
        <div>
          Build a loyal following with simple posts, email newsletters, and
          automated workflows. Plus let your customers pay what they want or
          choose between one-time, recurring, or fixed-length payments in your
          currency of choice. (We’ll handle the fine print, like VAT)
        </div>
      </RightContainer>
    </Section>
  );
};

export default SellToAnyone;
