import React from "react";
import styled from "styled-components";

const Section = styled.div`
  border-bottom: 2px solid #000;
  padding: 5rem 0 7rem;

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  h1 {
    font-size: 5.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  
  p {
    /* border: 1px solid red; */
    font-size: 1.9rem;
    font-weight: 600;
    width: 45%;
    margin: 0 auto;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }
`;

const YourStore = ({ heading, title, description }) => {
  return (
    <Section className="intro" >
      <h4>{heading}</h4>
      <h1>{title}</h1>
      <p>{description}</p>
    </Section>
  );
};

export default YourStore;
