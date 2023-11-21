import React from "react";
import styled from "styled-components";
import Resource from "../pricingComp/Resource";
import advanced1 from "../../assets/university/advanced1.svg";
import advanced2 from "../../assets/university/advanced2.svg";
import advanced3 from "../../assets/university/advanced3.png";
import advanced4 from "../../assets/university/advanced4.svg";
import advanced5 from "../../assets/university/advanced5.svg";

const Section = styled.div`
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
  grid-column-gap: 0rem;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 6.025rem;
    line-height: 0.7;
    font-weight: 500;
    letter-spacing: -0.02em;
    /* border: 1px solid red; */
  }

  h4 {
    /* border: 1px solid red; */
    font-size: 1.6rem;
    font-weight: 600;
  }

  p {
    /* border: 1px solid red; */
    font-size: 1.8rem;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.01em;
  }
`;

const Resources = styled.div`
  /* border: 1px solid red; */
  padding: 0 4vw;
  display: grid;
  grid-template-columns: auto auto auto;

  header {
    /* border: 1px solid red; */
    height: 13.5rem;
  }
`;

const advancedResources = [
  {
    img: `${advanced1}`,
    guide: "Skyrocket your sales with proven strategies",
    desc: `Make a sale every day with these top tactics. You'll learn how to write an effective sales page, how to run a successful sale...`,
  },
  {
    img: `${advanced2}`,
    guide: "5 ways to double your membership sales",
    desc: "To many creators, the idea of going independent is daunting. They fear an unpredictable income but crave the...",
  },
  {
    img: `${advanced3}`,
    guide: "Writing & running an internet business with Dickie Bush",
    desc: `Dickie Bush is a macro investor, portfolio manager, and creator of Dickie's Digest, a newsletter focused on growth principles...`,
  },
  {
    img: `${advanced4}`,
    guide: "New, simplified pricing on Gumroad: pay less as you...",
    desc: "Exciting news! We are simplifying our fee structure and rewarding creators with lower fees as they find more success.The highest...",
  },
  {
    img: `${advanced5}`,
    guide: "How to sell online memberships: all you need to know",
    desc: "In this article, you’ll learn how to sell online memberships and generate monthly recurring revenue. From setup to promotion: all you...",
  },
];

const Advanced = () => {
  return (
    <Section>
      <Header>
        <h4>Advanced Resources</h4>
        <h1>Looking to level up?</h1>
        <p>
          If you’ve been selling for a while, these more advanced resources will
          help you excel.
        </p>
      </Header>
      <Resources>
        {advancedResources.map((resource, index) => {
          return <Resource {...resource} />;
        })}
      </Resources>
    </Section>
  );
};

export default Advanced;
