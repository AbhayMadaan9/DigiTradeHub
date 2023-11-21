import React, { useState } from "react";
import styled from "styled-components";
import review1 from "../../featuresImages/review1.png";
import review2 from "../../featuresImages/review2.png";
import review3 from "../../featuresImages/review3.png";
import review4 from "../../featuresImages/review4.png";
import Chip from "../generalComp/Chip";
import arrow from "../../assets/ArrowSvg.svg";

const Section = styled.div`
  background-color: #ff90e8;
  height: 100vh;
  /* Making the parent element a flex container. */
  /* display: flex; */
  border-bottom: 2px solid #000;
`;

const TopContainer = styled.div`
  display: flex;
  height: calc(100vh - 2rem);
  position: relative;
`;

const ImagContainer = styled.div`
  width: 50%;
  position: relative;
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: center;

  img.user-image {
    width: 68%;
    padding-left: 1rem;
  }
`;

const RightArrow = styled.div`
position: absolute;
/* border: 1px solid red; */
top: 0;
right: 0rem;
height: 100vh;
width: 4rem;
/* width: calc(auto + 1rem); */
display: flex;
align-items: center;
justify-content: flex-start;
cursor: pointer;
`

const LeftArrow = styled.div`
/* border: 1px solid red; */
cursor: pointer;
height: 100vh;
position: absolute;
top: 0;
left: 0rem;
width: 4rem;
display: flex;
align-items: center;
justify-content: flex-end;

img{
    transform: rotateZ(180deg);
}
`

const ReviewContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  text-align: left;

  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 110%;
    width: 85%;
    margin-bottom: 4rem;
    /* border: 1px solid red; */
  }

  p {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1;
    width: 85%;
    /* border: 1px solid red; */
  }
`;

const GalleryHandler = styled.div`
  /* border: 1px solid red; */
  height: 2rem;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const ReviewDot = styled.div`
  border-radius: 50%;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border: 2px solid #000;
  margin: 0 4px;
  background-color: ${(props) => (props.selected ? "#222" : "#ff90e8")};
`;

const reviews = [
  {
    username: "motionbynick",
    name: "Nick Greenawalt",
    img: `${review1}`,
    desc: "“I like to move fast and break shit. DigiTradeHub allows me to quickly experiment with new ideas, without the headache of managing a complicated store.”",
    sells: "motion design tutorials",
  },
  {
    username: "stephsmithio",
    name: "Steph Smith",
    img: `${review2}`,
    desc: "DigiTradeHub lets creators be creators. It handles payments, affiliates, discounts, etc, so that you can stick to what you know best. I especially love their affiliate tools, making it super easy for supporters to join in on the upside.”",
    sells: "informational courses",
  },
  {
    username: "dvassallo",
    name: "Daniel Vassallo",
    img: `${review3}`,
    desc: "“I love DigiTradeHub because it can’t be any simpler. I upload a file, set a price, and I can start selling on the internet. The money I make from my sales lands directly in my bank account every Friday.”",
    sells: "entrepreneurial courses and kitchen tools",
  },
  {
    username: "boringbotlab",
    name: "Setu Choudhary",
    img: `${review4}`,
    desc: "DigiTradeHub has been a key driver of my journey to build a community around my product. It makes it much easier to sell digital products online and provides sellers with a lot of features.”",
    sells: "Cinema4D material packs",
  },
];

const ReviewGallery = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    if (currentReview === 3) {
        setCurrentReview(0)
    } else {
        setCurrentReview(currentReview+1)
    }
  }

  const prevReview = () => {
    if (currentReview === 0) {
        setCurrentReview(3)
    } else {
        setCurrentReview(currentReview-1)
    }
  }

  return (
    <Section>
      <TopContainer>
        <ImagContainer>
          <img className="user-image" src={reviews[currentReview].img} alt="" />
          <Chip
            name={reviews[currentReview].username}
            bottom="20vh"
            left="17%"
          />
        </ImagContainer>
        <ReviewContainer>
          <h3>{reviews[currentReview].desc}</h3>
          <p>
            {reviews[currentReview].name} sells {reviews[currentReview].sells}
          </p>
        </ReviewContainer>
        <RightArrow onClick={nextReview} >
          <img src={arrow} alt="" />
        </RightArrow>
        <LeftArrow onClick={prevReview} >
          <img src={arrow} alt="" />
        </LeftArrow>
      </TopContainer>
      <GalleryHandler>
        {reviews.map((review, index) => {
          return (
            <ReviewDot
              selected={index === currentReview}
              onClick={() => setCurrentReview(index)}
            />
          );
        })}
      </GalleryHandler>
    </Section>
  );
};

export default ReviewGallery;
