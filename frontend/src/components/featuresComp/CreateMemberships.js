import React from 'react'
import styled from 'styled-components'
import Steps from './Steps';
import membership from '../../assets/membership.svg'

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
    width: 80%;
  }
`;

const createHomeContent = [
    {
      title: "Create simple memberships",
      desc: "Give customers access to a library of content for as long as they’re subscribed.",
    },
    {
      title: "Set up sunscriptions",
      desc: "Let customers pay over time—monthly, quarterly, biannually, yearly, and more.",
    },
    {
      title: "The sky's the limit",
      desc: 'Give your audience the chance to pay what they want for your product.'
    },
];

const CreateMemberships = () => {
  return (
    <Section>
      <ContentBox>
        {createHomeContent.map((step) => {
          return <Steps title={step.title} desc={step.desc} />;
        })}
      </ContentBox>
      <ImageContainer>
        <img src={membership} alt="" />
      </ImageContainer>
    </Section>
  )
}

export default CreateMemberships