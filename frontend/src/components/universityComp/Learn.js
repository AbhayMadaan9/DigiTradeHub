import React from "react";
import styled from "styled-components";
import cap1 from "../../assets/university/cap1.svg";
import cap2 from "../../assets/university/cap2.svg";
import cap3 from "../../assets/university/cap3.svg";
import cap4 from "../../assets/university/cap4.svg";
import cap5 from "../../assets/university/cap5.svg";

const Section = styled.div`
  background-color: #23a094;
  position: relative;
  padding-top: 6.5rem;
  padding-bottom: 7rem;
  border-bottom: 2px solid #000;
`;

const Header = styled.div`
  display: grid;
  width: 65vw;
  max-width: 45rem;
  margin-right: auto;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  /* grid-auto-columns: 1fr; */
  grid-column-gap: 0rem;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  text-align: center;

  h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 6.625rem;
    line-height: 0.7;
    font-weight: 600;
    letter-spacing: -0.02em;
    /* border: 1px solid red; */
  }

  h4 {
    /* border: 1px solid red; */
    font-size: 1.75rem;
    font-weight: 600;
  }

  p {
    /* border: 1px solid red; */
    font-size: 1.8rem;
    line-height: 1.3;
    font-weight: 500;
    letter-spacing: -0.01em;
  }
`;

const CapImg1 = styled.div`
  position: absolute;
  left: 10vw;
  top: 2rem;
  right: auto;
  bottom: auto;
  img {
    width: 10rem;
  }
`;
const CapImg2 = styled.div`
  position: absolute;
  left: auto;
  top: 19vh;
  right: -2rem;
  bottom: auto;
  img {
    width: 16rem;
  }
`;

const CapImg3 = styled.div`
  position: absolute;
  left: -4rem;
  top: 24vh;
  right: auto;
  bottom: auto;
  img {
    width: 16rem;
  }
`;

const CapImg4 = styled.div`
  position: absolute;
  left: auto;
  top: auto;
  right: 10vw;
  bottom: -8rem;
  img {
    width: 10rem;
  }
`;

const CapImg5 = styled.div`
  position: absolute;
  left: 25vw;
  top: auto;
  right: auto;
  bottom: -9rem;
  img {
    width: 15rem;
  }
`;

const Learn = () => {
  return (
    <Section>
      <Header>
        <h4>DigiTradeHub University</h4>
        <h1>
          Learn while
          <br />
          you earn
        </h1>
        <p>
          Jump into DigiTradeHub University, a free resource to get you through your
          1st or 5000th sale. Made by creators, for creators.
        </p>
      </Header>
      <CapImg1>
        <img src={cap1} alt="" />
      </CapImg1>
      <CapImg2>
        <img src={cap2} alt="" />
      </CapImg2>
      <CapImg3>
        <img src={cap3} alt="" />
      </CapImg3>
      <CapImg4>
        <img src={cap4} alt="" />
      </CapImg4>
      <CapImg5>
        <img src={cap5} alt="" />
      </CapImg5>
    </Section>
  );
};

export default Learn;
