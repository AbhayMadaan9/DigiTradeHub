import React from "react";
import styled from "styled-components";
import img from "../../assets/61942b84ec3d406199f07d78_vegalia.png";
import Button from "../generalComp/Button";
import threeG from "../../assets/3G.svg";
import brush from '../../featuresImages/brush.svg'
import Chip from "../generalComp/Chip";

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  border-bottom: 2px solid #000;
`;

const LeftContainer = styled.div`
  width: 50%;
  background-color: #ff90e8;
  border-right: 2px solid #000;
  /* padding-top: 4rem; */
  padding: 6.5vw;
  text-align: left;
  /* border: 1px solid red; */

  h1 {
    /* border: 1px solid red; */
    text-align: left;
    margin-top: 0px;
    margin-bottom: 3.2rem;
    line-height: 0.8;
    letter-spacing: -0.02em;
    font-size: 7rem;
    font-family: Darker Grotesque;
    font-weight: 600;
  }

  span {
    display: block;
    white-space: nowrap;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.1;
    text-align: left;
    margin: 0 auto 3.8rem;
    letter-spacing: -0.01em;
    font-size: 1.8rem;
    font-family: Darker Grotesque;
    font-weight: 600;
  }

  footer {
    /* border: 1px solid red; */
    display: flex;
    align-items: flex-start;

    div {
      margin: 0;
    }
  }
`;

const RightContainer = styled.div`
  background-color: #ffc900;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0 1.5rem;
`;

const ImageContainer = styled.div`
  width: 50vw;
  height: 85vh;
  position: relative;
  img.vegalia {
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    max-width: 36rem;
    min-width: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    display: flex;
  }
`;

const Sells = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  font-size: 1.5rem;
  text-align: left;
  padding-left: 2rem;
  margin-top: 2rem;
  font-weight: 600;
`;

const ThreeG = styled.div`
  position: absolute;
  left: 4rem;
  /* top: auto; */
  /* right: auto; */
  bottom: -2rem;
  
  img{
    width: 13.5rem;
  }
  `;
const BrushImg = styled.div`
  position: absolute;
  right: 2.5rem;
  top: 3.5rem;
  /* border: 1px solid red; */
  
  img{
    width: 10.5rem;
  }
`;

const StartSelling = () => {
  return (
    <Section>
      <LeftContainer>
        <h1>
          Go from
          <span>zero to $1</span>
        </h1>
        <p>
          With DigiTradeHub, anyone can earn their first dollar. Just start with what
          you know, see what stcks and get paid. Its that easy.
        </p>
        <footer>
          <Button />
        </footer>
      </LeftContainer>
      <RightContainer>
        <ImageContainer>
          <img className="vegalia" src={img} alt="" />
          <ThreeG>
            <img src={threeG} alt="" />
          </ThreeG>
          <BrushImg>
            <img src={brush} alt="" />
          </BrushImg>
          <Chip name="Vegalia" bottom="3.5rem" right="3.5rem" />
        </ImageContainer>
        <Sells>Vegalia sells Procreate brushes</Sells>
      </RightContainer>
    </Section>
  );
};

export default StartSelling;
