import React from "react";
import styled from "styled-components";
import creator1 from "../../assets/university/creator1.png";
import creator2 from "../../assets/university/creator2.png";
import creator3 from "../../assets/university/creator3.png";
import creator4 from "../../assets/university/creator4.png";
import creator5 from "../../assets/university/creator5.png";
import creator6 from "../../assets/university/creator6.png";
import arrow from "../../assets/ArrowSvg.svg";

const Section = styled.div``;

const Header = styled.div`
  padding-top: 4.5rem;
  padding-bottom: 5rem;
  h2 {
    font-size: 2.75rem;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.01em;
  }
`;

const Creators = styled.div`
  background-color: #000;
  padding-top: 4vw;
  padding-bottom: 7rem;
`;

const CreatorsGrid = styled.div`
  /* border: 1px solid red; */
  padding: 0 4vw;
  display: grid;
  grid-template-columns: auto auto auto;
`;

const Creator = styled.div`
  width: 28.13vw;
  /* width: 100%; */
  border: 2px solid #000;
  border-radius: 0.375rem;
  margin-bottom: 2rem;
  margin-right: 2.5rem;
  overflow: hidden;
  transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out,
    -webkit-transform 200ms ease-in-out;

  &:hover {
    box-shadow: 4px 4px 0 0 #ff90e8;
    transform: translate(-6px, -6px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 35vh;
  border-bottom: 2px solid #000;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Details = styled.div`
  /* border: 1px solid red; */
  background-color: #fff;
  padding: 1.5rem;
  text-align: left;

  h3 {
    margin-bottom: 0rem;
    font-weight: 500;
    line-height: 1;
    font-size: 1.8rem;
    letter-spacing: -0.01em;
  }

  div {
    margin-bottom: 2.7rem;
    font-size: 1.95rem;
    font-weight: 500;
    line-height: 1.1;
    color: ${(props) => props.color};
  }

  strong {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    span {
      font-size: 1.55rem;
      /* border: 1px solid red; */
      font-weight: 600;
    }

    img {
      width: 1.4rem;
      margin-top: 0.4rem;
      margin-left: 0.4rem;
      /* border: 1px solid red; */
    }
  }
`;

const creatorsData = [
  {
    img: `${creator1}`,
    tagline: "Creating original art as a full-time business",
    creator: "Floortje Visser, Artist",
    color: "#98282a",
  },
  {
    img: `${creator2}`,
    tagline: "Teaching Karate across the world",
    creator: "Jesse Enkamp, Educator",
    color: "#98282a",
  },
{
    img: `${creator6}`,
    tagline: "Generated over $100,000 selling a Twitter Growth eBook",
    creator: "Ed Latimore, Writer",
    color: "#4a99e9",
  },
];

const GumroadCreators = () => {
  return (
    <Section>
      <Header>
        <h2>Here are 3 DigiTradeHub creators who did it their way</h2>
      </Header>
      <Creators>
        <CreatorsGrid>
          {creatorsData.map((creator) => {
            return (
              <Creator>
                <ImageContainer>
                  <img src={creator.img} alt="" />
                </ImageContainer>
                <Details color={creator.color}>
                  <header>
                    <h3>{creator.tagline}</h3>
                    <div>{creator.creator}</div>
                  </header>
                  <strong>
                    <span>Read more</span> <img src={arrow} alt="" />
                  </strong>
                </Details>
              </Creator>
            );
          })}
        </CreatorsGrid>
      </Creators>
    </Section>
  );
};

export default GumroadCreators;
