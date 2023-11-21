import React from "react";
import styled from "styled-components";
import sellImg from "../../assets/SellAnywhere.svg";

const Section = styled.div`
  display: flex;
  border-bottom: 2px solid #000;
`;

const ImageContainer = styled.div`
  width: 50%;
  background-color: rgb(255, 201, 0);
  border-right: 2px solid #000;
  min-height: 22rem;
  padding: 6.5vw;

  img {
    height: 100%;
  }
`;

const RightContainer = styled.div`
  width: 50%;
  font-family: Darker Grotesque;
  text-align: left;
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 3.4rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  div {
    /* border: 1px solid red; */
    font-size: 1.75rem;
    line-height: 110%;
    font-weight: 600;
    width: 87%;
  }
`;

const SellAnywhere = () => {
  return (
    <Section>
      <ImageContainer>
 {/* <img src={sellImg} alt="" /> */}
      </ImageContainer>
      <RightContainer>
        <h3>Sell Anywhere</h3>
        <div>
          Create and customize your storefront with our all-in-one platform or
          choose to use your personal site instead. With Zapier, you can
          seamlessly connect your Gumroad account to thousands of apps in your
          current stack.
        </div>
      </RightContainer>
    </Section>
  );
};

export default SellAnywhere;
