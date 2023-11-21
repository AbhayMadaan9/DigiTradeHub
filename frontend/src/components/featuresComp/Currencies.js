import React from 'react'
import styled from 'styled-components'
import Steps from './Steps';
import currenciesImg from '../../assets/Currencies.svg'

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
    color: #90a8ed;
  }

  div {
    color: #fff;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  /* padding: 4rem 0 4rem; */
  display: flex;
  align-items: center;
  /* height: fit-content; */
  justify-content: center;
  background-color: #90a8ed;
  /* border: 1px solid red; */
  overflow: hidden;
  
  img{
    /* transform: translateY(-2%); */
    display: block;
      /* border: 1px solid red; */
    width: 105%;
  }
`;


const currencyContent = [
    {
      title: "Say ¥£$ to different currencies",
      desc: "Increase your sales opportunities by accepting payments from a global audience.",
    },
    {
      title: "Don't sweat VAT",
      desc: "We collect VAT as required and send it to the EU . You don’t need to do a thing." 
    },
    {
      title: "Want to give 10% off?",
      desc: 'Create discount offer codes for your products, as a percentage or fixed amount.'
    },
];

const Currencies = () => {
  return (
    <Section>
      <ContentBox>
        {currencyContent.map((step) => {
          return <Steps title={step.title} desc={step.desc} />;
        })}
      </ContentBox>
      <ImageContainer>
        <img src={currenciesImg} alt="" />
      </ImageContainer>
    </Section>
  )
}

export default Currencies