import React from "react";
import styled from "styled-components";
import FeatureRoadmap from "./FeatureRoadmap";
import img1 from "../../featuresImages/img1.svg";
import img2 from "../../featuresImages/img2.svg";
import img3 from "../../featuresImages/img3.svg";
import img4 from "../../featuresImages/img4.svg";
import img5 from "../../featuresImages/img5.svg";
import YourStore from "./YourStore";

const Section = styled.div`
  background-color: #f1f333;
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

const PaperImage1 = styled.div`
  position: absolute;
  left: 9vw;
  top: 2rem;
  right: auto;
  bottom: auto;
  width: 9rem;
`;
const PaperImage2 = styled.div`
  position: absolute;
  left: auto;
  top: 19rem;
  z-index: 1;
  right: -2rem;
  bottom: auto;
  width: 20rem;
`;

const PaperImage3 = styled.div`
  position: absolute;
  left: -3rem;
  top: 22rem;
  right: auto;
  bottom: auto;
  width: 14rem;
`;

const PaperImage4 = styled.div`
  position: absolute;
  left: -1rem;
  bottom: -10rem;
  width: 22rem;
`;

const PaperImage5 = styled.div`
  position: absolute;
  right: 22vw;
  bottom: -3rem;
  
  img{
      width: 9rem;
  }
`;

const intro = {
  heading: "Product Features",
  title: "Built for new beginnings",
  description:
    "DigiTradeHub is a powerful, but simple, e-commerce platform that puts a wide selection of tool at your fingertips. Now you can sell the digital services you want—books, memberships, courses, and more—right to your audience.",
};

const ProductFeatures = () => {
  return (
    <Section>
      <YourStore {...intro} />
      <PaperImage1>
        <img src={img1} alt="" />
      </PaperImage1>
      <PaperImage2>
        <img src={img2} alt="" />
      </PaperImage2>
      <PaperImage3>
        <img src={img3} alt="" />
      </PaperImage3>
      <PaperImage4>
        <img src={img4} alt="" />
      </PaperImage4>
      <PaperImage5>
        <img src={img5} alt="" />
      </PaperImage5>
      <FeatureRoadmap />
    </Section>
  );
};

export default ProductFeatures;
