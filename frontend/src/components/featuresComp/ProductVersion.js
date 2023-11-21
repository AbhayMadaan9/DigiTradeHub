import React from 'react'
import styled from 'styled-components'
import Steps from './Steps';
import productVersions from '../../assets/productVersions.svg'

const Section = styled.div`
  border-bottom: 2px solid #000;
  display: flex;
  flex-direction: row-reverse;
`;

const ContentBox = styled.div`
  border-left: 2px solid #000;
  width: 50%;
  padding: 4rem 0rem 4rem 1.8rem;
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
  padding: 4rem 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #90a8ed;

  img{
    width: 70%;
  }
`;


const versionsContent = [
    {
        title: 'Generate license keys',
        desc: 'Selling software? We can create your license keys, so you can get back to beta.'
    },
    {
        title: 'Sell multiple versions',
        desc: 'Allow buyers to pick from PDF, ePub, and Mobi. Even charge more for lossless audio.'
    },
    {
        title: 'Protect your work',
        desc: 'We can create lightweight DRM to help keep customers honest.'
    },
]

const ProductVersion = () => {
  return (
    <Section>
      <ContentBox>
        {versionsContent.map((step) => {
          return <Steps title={step.title} desc={step.desc} />;
        })}
      </ContentBox>
      <ImageContainer>
        <img src={productVersions} alt="" />
      </ImageContainer>
    </Section>
  )
}

export default ProductVersion