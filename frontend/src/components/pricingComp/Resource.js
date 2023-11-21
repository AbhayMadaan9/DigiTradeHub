import React from "react";
import styled from "styled-components";
import arrow from "../../assets/ArrowSvg.svg";

const Section = styled.div`
  width: 28.13vw;
  border: 2px solid #000;
  border-radius: 0.375rem;
  margin-top: 2rem;
  margin-right: 2.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;

  &:hover {
    box-shadow: 6px 6px 0 0 #000;
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

const Content = styled.div`
  /* border: 1px solid red; */
  padding: 1.5rem;
  text-align: left;
  h3 {
    margin-bottom: 1.2rem;
    font-size: 2.125rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.005em;
  }

  div {
    margin-bottom: 1.2rem;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.1;
  }

  strong {
    font-size: 1.3rem;
    font-weight: 600;
    display: flex;
    align-items: center;

    img {
      /* border: 1px solid red; */
      width: 1.2rem;
      margin-top: 0.5rem;
      margin-left: 0.3rem;
    }
  }
`;

const Resource = ({ img, guide, desc }) => {
  return (
    <Section>
      <ImageContainer>
        <img src={img} alt="" />
      </ImageContainer>
      <Content>
        <header>
          <h3>{guide}</h3>
          <div>{desc}</div>
        </header>
        <strong>
          Read more <img src={arrow} alt="" />{" "}
        </strong>
      </Content>
    </Section>
  );
};

export default Resource;
