import React from "react";
import styled from "styled-components";
import Steps from "./Steps";
import growAudience from "../../assets/growAudience.svg";
import clapping from '../../assets/clapping.svg'

const Section = styled.div`
  border-bottom: 2px solid #000;
  display: flex;
`;

const ContentBox = styled.div`
  border-right: 2px solid #000;
  width: 50%;
  padding: 4rem 0rem;
  background-color: #000;

  h3 {
    color: #ffc900;
  }

  div {
    color: #fff;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  padding: 4rem 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc900;
  position: relative;
  /* border: 1px solid red; */

  img {
    /* border: 1px solid red; */
    width: 70%;
  }
`;

const ClappingImage = styled.div`
position: absolute;
bottom: 3.5rem;
right: 0;
transform: translateX(20px);
img{
    width: 13rem;
}
`

const growAudienceContent = [
  {
    title: "Be ready when they are",
    desc: "All payments are secure and smooth, so your customers can read, listen, or watch their purchase immediately.",
  },
  {
    title: "Make decisions with your data",
    desc: "Dive deeper into your sales with analytics that can help you improve your products and messaging.",
  },
  {
    title: "Grow your audience",
    desc: "Post new updates, send email broadcasts, and use powerful automated workflows to connect and grow your audience.",
  },
];

const GrowAudience = () => {
  return (
    <Section>
      <ContentBox>
        {growAudienceContent.map((step) => {
          return <Steps title={step.title} desc={step.desc} />;
        })}
      </ContentBox>
      <ImageContainer>
        <img src={growAudience} alt="" />
        <ClappingImage>
            <img src={clapping} alt="" />
        </ClappingImage>
      </ImageContainer>
    </Section>
  );
};

export default GrowAudience;
