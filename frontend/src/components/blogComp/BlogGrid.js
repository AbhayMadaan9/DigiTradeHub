import React from "react";
import styled from "styled-components";
import { BlogData } from "./Blogdata";
import arrow from "../../assets/ArrowSvg.svg";

const Section = styled.div`
  padding-top: 4.5rem;
  padding-bottom: 5rem;
  width: 100%;
  padding-right: 4vw;
  padding-left: 4vw;

  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 2vw;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  border-bottom: 2px solid #000;
`;

const BlogContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  flex-direction: column;
  border: 2px solid #000;
  border-radius: 0.375rem;
  transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    box-shadow: 6px 6px 0 0 #000;
    transform: translate(-6px, -6px);
  }
`;

const ImageContainer = styled.div`
  border-bottom: 2px solid #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const Content = styled.div`
  display: grid;
  padding: 2rem 2.5rem;
  align-items: start;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  h4,
  h2,
  p,
  div {
    /* border: 1px solid red; */
    text-align: left;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1;
  }

  h2 {
    line-height: 1;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 500;
  }

  div {
    display: flex;
    align-items: center;
    span {
      font-size: 1.5rem;
      font-weight: 700;
      /* border: 1px solid red; */
    }

    img {
      width: 1.2rem;
      /* border: 1px solid red; */
      margin-top: 0.4rem;
      margin-left: 0.2rem;
    }
  }
`;

const BlogGrid = () => {
  return (
    <Section>
      {BlogData.map((blog) => {
        return (
          <BlogContainer>
            <ImageContainer>
              <img src={blog.img} alt="" />
            </ImageContainer>
            <Content>
              <h4>{blog.date}</h4>
              <h2>{blog.title}</h2>
              <p>{blog.desc}</p>
              <div>
                <span>Read More</span>
                <img src={arrow} alt="" />
              </div>
            </Content>
          </BlogContainer>
        );
      })}
    </Section>
  );
};

export default BlogGrid;
