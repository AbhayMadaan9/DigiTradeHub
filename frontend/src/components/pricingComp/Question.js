import React, { useState } from "react";
import styled from "styled-components";
import Plus from "./Plus.svg";
import arrow from "../../assets/ArrowSvg.svg";

const Section = styled.div`
  /* border: 2px solid red; */
  transition: max-height 0.225s linear;
  max-height: ${(props) => (props.show ? "30rem" : "12rem")};
  overflow: hidden;
`;

const Horizontal = styled.div`
  /* border: 1px solid red; */
  position: relative;
  cursor: pointer;
  z-index: 2;

  img {
    width: 2.25rem;
    height: 2.25rem;
    display: block;
  }
`;

const Vertical = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  z-index: 1;

  img {
    display: block;
    width: 2.25rem;
    height: 2.25rem;
    transform: ${(props) => (props.collapse ? "rotateZ(90deg)" : null)};
    transition: all 0.225s ease-in;
  }
`;

const QuestionContainer = styled.div`
  /* border: 1px solid blue; */

  display: grid;
  padding: 4rem 15vw 4rem 0vw;
  justify-content: space-between;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 12vw;
  grid-row-gap: 0vh;
  grid-template-columns: 2.25rem 1fr;
  grid-template-rows: auto;
  border-top: 2px solid #000;
  cursor: pointer;
  /* max-height: 14rem; */

  &:hover {
    opacity: 0.7;
  }

  h2 {
    margin-top: 0px;
    /* border: 1px solid red; */
    text-align: left;
    margin-bottom: 0px;
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 500;
    /* font-style: ; */
    letter-spacing: -0.01em;
  }
`;

const AnswerContainer = styled.div`
  display: grid;
  padding-right: 15vw;
  padding-bottom: 4rem;
  padding-left: 0vw;
  grid-auto-columns: 1fr;
  grid-column-gap: 12vw;
  grid-row-gap: 0vh;
  -ms-grid-columns: 2.25rem 1fr;
  grid-template-columns: 2.25rem 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;

  p {
    /* border: 1px solid red; */
    line-height: 1.1;
    letter-spacing: -0.01em;
    text-align: left;
    font-size: 2rem;
    font-weight: 500;
  }

  span {
    /* border: 1px solid red; */
    width: fit-content;
    text-align: left;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0%;
      top: auto;
      right: auto;
      bottom: 0%;
      width: 0%;
      background-color: black;
      height: 2px;
      transition: all 0.15s linear;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }

    img {
      margin-left: 0.35rem;
      padding-top: 0.35rem;
      padding-bottom: 0.1rem;
      width: 1.2rem;
    }
  }
`;

const Answer = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  align-items: stretch;
  align-content: start;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;

const Question = ({ ques, ans, link, boolean }) => {
    const [showAnswer, setShowAnswer] = useState(false)
  return (
    <Section show={showAnswer} >
      <QuestionContainer onClick={() => setShowAnswer(!showAnswer)} >
        <Horizontal>
          <img src={Plus} alt="" />
        </Horizontal>
        <Vertical collapse={!showAnswer} >
          <img src={Plus} alt="" />
        </Vertical>
        <h2>{ques}</h2>
      </QuestionContainer>
      <AnswerContainer >
        <div></div>
        <Answer>
          {boolean ? <p>Yes!</p> : null}
          <p>{ans}</p>
          {link ? (
            <span>
              {link}
              <img src={arrow} alt="" />
            </span>
          ) : null}
        </Answer>
      </AnswerContainer>
    </Section>
  );
};

export default Question;
