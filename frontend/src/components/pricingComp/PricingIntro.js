import React from "react";
import styled from "styled-components";
import YourStore from "../featuresComp/YourStore";

import coin1 from "../../assets/pricingImgs/coin1.svg";
import coin2 from "../../assets/pricingImgs/coin2.svg";
import coin3 from "../../assets/pricingImgs/coin3.svg";
import coin4 from "../../assets/pricingImgs/coin4.svg";
import coin5 from "../../assets/pricingImgs/coin5.svg";
import coin6 from "../../assets/pricingImgs/coin6.svg";

const Section = styled.div`
  background-color: #ffc900;
  border-bottom: 2px solid #000;
  padding: 5rem 0 6.5rem;
  position: relative;

  div.intro {
    &:first-child {
      border-bottom: none;
      padding: 0;

      h1 {
        font-size: 6rem;
        width: 50%;
        line-height: 80%;
        margin: 1rem auto 3rem;
      }

      p {
        width: 55%;
        line-height: 1.1;
        letter-spacing: -0.02em;
        font-weight: 600;
      }
    }
  }
`;

const Coin1 = styled.div`
  position: absolute;
  left: -0.5rem;
  top: 1rem;
  bottom: auto;
  margin-left: 0px;
  img {
    width: 7rem;
  }
`;
const Coin2 = styled.div`
  position: absolute;
  left: 11vw;
  top: 4rem;
  bottom: auto;
  overflow: visible;
  margin-left: 0px;
  img {
    width: 10rem;
  }
`;
const Coin3 = styled.div`
  position: absolute;
  left: auto;
  top: 4.5rem;
  right: 10vw;
  bottom: auto;
  margin-left: 0px;
  img {
    width: 6.875rem;
  }
`;
const Coin4 = styled.div`
  position: absolute;
  left: auto;
  top: auto;
  right: -1rem;
  bottom: 2rem;
  overflow: hidden;
  img {
    width: 10rem;
  }
`;
const Coin5 = styled.div`
  position: absolute;
  left: -2rem;
  bottom: -4rem;
  margin-left: 0px;
  img {
    width: 15rem;
  }
`;
const Coin6 = styled.div`
  position: absolute;
  left: 50%;
  bottom: -9rem;
  margin-left: -5rem;
  img {
    width: 10rem;
  }
`;

const pricingIntro = {
  heading: "Pricing",
  title: "10% flat",
  description:
    "We want you to live a better life, not focus on fees. That’s why we have no monthly charges and only take a small cut of every sale.",
};

const PricingIntro = () => {
  return (
    <Section>
      <YourStore {...pricingIntro} />
      <Coin1>
        <img src={coin1} alt="" />
      </Coin1>
      <Coin2>
        <img src={coin2} alt="" />
      </Coin2>
      <Coin3>
        <img src={coin3} alt="" />
      </Coin3>
      <Coin4>
        <img src={coin4} alt="" />
      </Coin4>
      <Coin5>
        <img src={coin5} alt="" />
      </Coin5>
      <Coin6>
        <img src={coin6} alt="" />
      </Coin6>
    </Section>
  );
};

export default PricingIntro;
