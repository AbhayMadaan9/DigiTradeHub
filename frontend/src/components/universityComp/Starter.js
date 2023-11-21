import React from "react";
import styled from "styled-components";
import beginner1 from "../../assets/university/beginner1.svg";
import beginner2 from "../../assets/university/beginner2.png";
import beginner3 from "../../assets/university/beginner3.png";
import beginner4 from "../../assets/university/beginner4.svg";
import Resource from "../pricingComp/Resource";

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

  &:last-child{
    margin-bottom: 0;
  }
`;

const starterData = [
  {
    img: `${beginner1}`,
    guide: "Five ways digital artists make money online",
    desc: "Making money as a Digital Artist is a dream for many artists. Read this article to learn the 5 actionable ways digital artists can make...",
  },
  {
    img: `${beginner4}`,
    guide: "From ‘how-to’ articles to $25k in one month",
    desc: "Six days before graduating from Grinnell College, at 21, Philip Kiely launched his first product on Gumroad. And 24 hours later...",
  },
  {
    img: `${beginner1}`,
    guide: "Making money online with Jose Rosado, part 1",
    desc: "Jose and Justin talk about affiliate marketing, personal branding, communicating with your audience, and more. ",
  },
  {
    img: `${beginner4}`,
    guide: "How to earn a side income selling digital products",
    desc: "A whole new world of potential revenue streams await you and getting started is easier than you think. In fact, your...",
  },
];

const Starter = () => {
  return (
    <Section>
      <Header>
        <h4>Beginner Resources</h4>
        <h1>Starters, start here</h1>
        <p>
        We’ve got the guides that will get you going.
        </p>
      </Header>
      <Resources>
        {starterData.map((resource, index) => {
          return <Resource {...resource} />;
        })}
      </Resources>
    </Section>
  );
};

export default Starter;
