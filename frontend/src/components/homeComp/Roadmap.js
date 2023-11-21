import React from "react";
import styled from "styled-components";
import manAnimation from "../../assets/manAnimation.svg";
import arrow from "../../assets/arrow.svg";

const Section = styled.div`
  padding-top: 6.5rem;
  padding-bottom: 7rem;
  border-bottom: 2px solid #000;

  p {
    /* border: 1px solid red; */
    font-size: 2.75rem;
    line-height: 1;
    font-weight: 600;
    letter-spacing: -0.01em;
    width: 100%;
    margin: 0 auto;
    max-width: 60rem;
  }
`;

const LoopContainer = styled.div`
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  max-width: 75rem;
  margin-top: 6rem;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid #000;
  border-radius: 30rem;
  background-color: #ffc900;
  min-height: 16rem;
`;

const InnerLoop = styled.div`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 16rem;
  padding: 2rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 2px solid #000;
  border-radius: 30rem;
  background-color: #ffc900;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: auto;
  bottom: 2rem;
  z-index: 2;
  display: flex;
  margin: 0;
  padding: 0;
  width: 18rem;
  justify-content: center;

  img {
    padding: 0;
    display: block;
    margin: 0;
    width: 20rem;
  }
`;

const TopRow = styled.div`
  position: absolute;
  left: 0%;
  top: -19px;
  right: 0%;
  bottom: auto;
  padding-right: 16%;
  padding-left: 16%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

const LoopText = styled.div`
  position: relative;
  padding-right: 1vw;
  padding-left: 2vw;
  background-position: 0% 7px;
  background-size: 0.75rem;
  background-repeat: no-repeat;
  text-align: center;
  z-index: 1;
  font-size: 1.8rem;
  line-height: 1;
  font-weight: 600;
  background-color: #ffc900;
  /* border: 1px solid blue; */
`;

const ArrowImg = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  top: 4.11px;
  left: -10px;

  img {
    transform: rotateZ(180deg);
    width: 0.8rem;
  }
`;

const BottomRow = styled.div`
  /* border: 2px solid #000; */
  position: absolute;
  display: flex;
  padding-right: 8%;
  padding-left: 8%;
  justify-content: space-around;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: -0.9rem;
`;

const BottomArrowImg = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  top: 0.5px;
  right: -10px;

  img {
    width: 0.8rem;
  }
`;

const Roadmap = () => {
  return (
    <Section>
      <p>
        You know all those great ideas you have? We want you to try them, lots
        of them, and find out what works
      </p>
      <LoopContainer>
        <InnerLoop>
          <ImageContainer>
            <img className="man" src={manAnimation} alt="" />
          </ImageContainer>
          <TopRow>
            <LoopText>
              The Gumroad Way
              <ArrowImg>
                <img src={arrow} alt="" />
              </ArrowImg>
            </LoopText>
            <LoopText>
              Start Small
              <ArrowImg>
                <img src={arrow} alt="" />
              </ArrowImg>
            </LoopText>
          </TopRow>
          <BottomRow>
            <LoopText>
              Get Better Toghether
              <BottomArrowImg>
                <img src={arrow} alt="" />
              </BottomArrowImg>
            </LoopText>
            <LoopText>
              Learn Quickly
              <BottomArrowImg>
                <img src={arrow} alt="" />
              </BottomArrowImg>
            </LoopText>
          </BottomRow>
        </InnerLoop>
      </LoopContainer>
    </Section>
  );
};

export default Roadmap;
