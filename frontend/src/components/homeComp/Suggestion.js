import React from "react";
import styled from "styled-components";
import img1 from "../../assets/SmallBets.svg";
import img2 from "../../assets/SellBlog.svg";
import Exciting from "../../assets/Exciting.svg";

const Section = styled.div`
  box-sizing: border-box;
  font-family: Darker Grotesque;
  position: relative;
  /* overflow-x: hidden; */
  /* overflow-y: none; */
`;

const TopSection = styled.div`
  display: flex;
  border-bottom: 2px solid #000;

  font-size: 3.5rem;
  font-weight: 600;
  line-height: 1;

  span {
    display: block;
  }
`;

const LeftContainer = styled.div`
  width: 50vw;
  border-right: 2px solid #000;
  background-color: #b23386;
  padding: 6rem 0;
`;

const RightContainer = styled.div`
  width: 50vw;
  background-color: #ff90e8;
  padding: 6rem 0;
`;

const BottomSection = styled.div`
  display: flex;
  border-bottom: 2px solid #000;
  box-sizing: border-box;
`;

const BottomLeftContainer = styled.div`
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
    width: 90%;
    object-fit: contain;
  }
`;

const BottomRightContainer = styled.div`
  box-sizing: border-box;
  width: 50vw;
  background-color: #ffc900;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0 5rem;
  /* padding: 6.5vw; */

  img {
    /* border: 1px solid red; */
    display: block;
    width: 90%;
    object-fit: contain;
  }
`;

const ImageContainer = styled.div`
/* border: 1px solid blue; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BotttomSvg = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(5%, 45%);
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
  font-size: 1.4rem;
  font-weight: 600;
`;

const Suggestion = () => {
  return (
    <Section>
      <TopSection>
        <LeftContainer>
          Don't take risks.
          <br />
          <span>That's scary</span>
        </LeftContainer>
        <RightContainer>
          Place small bets.
          <br />
          <span>That's exciting!</span>
        </RightContainer>
      </TopSection>
      <BottomSection>
        <BottomLeftContainer>
          <ImageContainer>
            <img src={img1} alt="" />
            <Message>Instead of selling a book...</Message>
          </ImageContainer>
        </BottomLeftContainer>
        <BottomRightContainer>
          <ImageContainer>
            <img src={img2} alt="" />
            <Message>
            ...start by selling a blog post!
            </Message>
          </ImageContainer>
        </BottomRightContainer>
      </BottomSection>
      <BotttomSvg>
        <img src={Exciting} alt="" />
      </BotttomSvg>
    </Section>
  );
};

export default Suggestion;
