import React from "react";
import styled from "styled-components";
import { InspirationData } from "./InspirationData";

const Section = styled.div`
  border-bottom: 2px solid #000;
  padding-top: 5rem;
  padding-bottom: 7rem;
  font-family: Darker Grotesque;

  h1{
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  h3{
    font-size: 2.7rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }
`;

const List = styled.div`
  display: grid;
  align-content: stretch;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  width: 100%;
  padding-right: 4vw;
  padding-left: 4vw;
`;

const ListItem = styled.div`
  background-color: ${(props) => props.color};
  text-align: left;
  border: 1px solid #000;
  border-radius: 0.5rem;
  padding: 2rem;
  padding-bottom: 1rem;
  font-family: Darker Grotesque;

  div.details{
    /* border: 1px solid blue; */
    height: 12rem;
    /* min-height: 10rem; */
  }

  h2 {
    /* height: 5rem; */
    /* border: 1px solid red; */
    color: #000;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 100%;
    /* margin: 0; */
    margin-bottom: 1rem;
  }

  p {
    /* border: 1px solid red; */
    line-height: 115%;
    width: 85%;
    font-weight: 600;
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.7rem;
  }

  img {
    /* border: 1px solid red; */
    height: 4.5rem;
  }

  div.tags{
    /* border: 1px solid red; */
    display: flex;
    flex-wrap: wrap;
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  max-width: 100%;
  display: inline-block;

  padding: 0.5rem 0.75rem;
  border: 1px solid #000;
  border-radius: 99999px;
  background-color: #fff;
  -webkit-transition: all 140ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: all 140ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  line-height: 100%;

  &:hover{
    transform: translate(-3px, -3px);
    box-shadow: 3px 3px #000;
  }
`;

const Inspiration = () => {
  return (
    <Section>
      <h1>Looking for inspiration on what you can sell?</h1>
      <h3>Discover the best-selling products and creators on DigiTradeHub</h3>
      <List>
        {InspirationData.map((list) => {
          return (
            <ListItem color={list.color}>
              <img src={list.svg} alt="" />
              <div className="details" >
                <h2>{list.title}</h2>
                <p>{list.desc}</p>
              </div>
                <h4>Popular tags</h4>
                <div className="tags" >
                {list.tags.map((tag) => {
                    return <Tag>{tag}</Tag>;
                })}
                </div>
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};

export default Inspiration;
