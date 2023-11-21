import React from "react";
import styled from "styled-components";
import Steps from "./Steps";
import playUkulele from "../../assets/plauUkulele.svg";
import easy from "../../assets/easy.svg";
import tag from '../../assets/tag.svg'

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

const EasyImage = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  /* width: 10rem; */
  top: 2.5rem;
  right: 1.4vw;
  
  img{
    display: block;
      width: 10rem;
  }
`;

const TagImage = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  /* width: 10rem; */
  bottom: 4rem;
  left: 2vw;
  
  img{
    display: block;
    width: 14rem;  
}
`;

const goFastContent = [
  {
    title: "Tools to get going fast",
    desc: "Create a profit-making machine in no time with our flexible page editor or easily embed a ‘Follow’ button onto your existing site.",
  },
  {
    title: "Sell Anything",
    desc: `We don’t limit your ideas. Whether it's a digital download, eBook, course, or monthly membership, we make sure it checks out.`,
  },
  {
    title: "Bring your friends",
    desc: "Already have fans? Easily import your existing email list—and export your followers and customers at any time.",
  },
];

const GetGoingFast = () => {
  return (
    <Section>
      <ContentBox>
        {goFastContent.map((step) => {
          return <Steps title={step.title} desc={step.desc} />;
        })}
      </ContentBox>
      <ImageContainer>
        <img src={playUkulele} alt="" />
        <EasyImage>
          <img src={easy} alt="" />
        </EasyImage>
        <TagImage>
        <img src={tag} alt="" />
        </TagImage>
      </ImageContainer>
    </Section>
  );
};

export default GetGoingFast;
