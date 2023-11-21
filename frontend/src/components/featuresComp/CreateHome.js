import React from "react";
import styled from "styled-components";
import GumroadProfile from "../../assets/GumroadProfilr.svg";
import Thumbsup from "../../assets/ThumbsUp.svg";
import Steps from "./Steps";

const Section = styled.div`
  border-bottom: 2px solid #000;
  display: flex;
`;

const ContentBox = styled.div`
  border-right: 2px solid #000;
  width: 50%;
  padding: 4rem 0;
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
  padding: 4rem 0 6rem;
  position: relative;
  background-color: #ffc900;
`;

const ThumbsUpImage = styled.div`
  position: absolute;
  bottom: 1.4rem;
  left: -2rem;
  width: 10.625rem;
`;

const createHomeContent = [
  {
    title: "Create a home here",
    desc: "No site? No problem. Use our flexible page editor to build a storefront and customize your site’s colors, and more.",
  },
  {
    title: "Use your own website, too",
    desc: "Already have a site? Link it to ours under a custom domain.",
  },
  {
    title: "Power-up your page",
    desc: "You can easily embed our payment platform and ‘follow’ button on your existing site.",
  },
];

const CreateHome = () => {
  return (
    <Section>
      <ContentBox>
        {createHomeContent.map((step) => {
          return <Steps title={step.title} desc={step.desc} />;
        })}
      </ContentBox>
      <ImageContainer>
        {/* <img src={GumroadProfile} alt="" />
        <ThumbsUpImage>
          <img src={Thumbsup} alt="" />
        </ThumbsUpImage> */}
      </ImageContainer>
    </Section>
  );
};

export default CreateHome;
