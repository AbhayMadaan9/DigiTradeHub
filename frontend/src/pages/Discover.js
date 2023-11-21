import React, { useEffect, useState } from 'react'
import Navbar from '../components/generalComp/Navbar'
import styled from 'styled-components'
import logo from "../assets/618ea7afd990103829d614ff_gumroad-logo.svg";
import { Link } from 'react-router-dom';
import Product from '../components/generalComp/Product';

const Sec = styled.div`
padding-top: 2.5rem;
background-color: #f4f4f0;
`;
const Sec1 = styled.div`
display: flex;
flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 4px;

  img {
    width: 100px;
  }
  input{
    width: 550px;
    padding: 8px;
    border-radius: 4px;
    border: 0.5px solid black;
    &:focus{
        outline: none;
        border: 2px outset pink;
    }
  }
`;
const Sec2 = styled.div`
padding: 4px;
display: flex;
flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;
const Category = styled.div`
border-radius: 12px;
padding: 4px;
&:hover{
    border: 1px solid black ;
    cursor: pointer;
    box-shadow: 5px 5px 0 0 #000;
    transform: translate(-5px, -5px); 
}
`
const Sec3 = styled.div`
padding: 40px ;
`;

export default function Discover({state, account}) {
  const [filter_type, setfilter_type] = useState("")
  const [products_id, setproducts_id] = useState([])
  const {contract} = state;
  useEffect(()=>{
    const get_prod = async()=>{
      try {
        const res = await contract.listAllProducts();
        setproducts_id(res)
      } catch (error) {
        console.log(error)
      }
    }
    
    
    get_prod()
  }, [contract])
  return (
    <>
    <Sec>
        <Sec1>
          <Link to="/">
            {/* <img src={Gumroad} alt="" /> */}
            <h2>DigiTradeHub</h2>
          </Link>
            <input type="text" placeholder='Search Products'/>
        </Sec1>
        <Sec2>
            <Category onClick={()=>setfilter_type("digitalproduct")}><p>All</p></Category>
            <Category onClick={()=>setfilter_type("audiobook")}><p>Audiobook</p></Category>
            <Category onClick={()=>setfilter_type("podcaast")}><p>Podcast</p></Category>
            <Category onClick={()=>setfilter_type("course")}><p>Course & Tutorial</p></Category>
            <Category onClick={()=>setfilter_type("membership")}><p>Membership</p></Category>
            <Category onClick={()=>setfilter_type("ebook")}><p>E-book</p></Category>
        </Sec2>
        <hr />
        <Sec3>
            <div><h2>Popular Products</h2></div>
          <Sec2>
          {
              products_id.map(id=>{
                return(
                <>
                <Product id={id} state = {state} account={account} filter_type = 
                {filter_type}/>
                </>
                )
              })
            }
          </Sec2>
        </Sec3>
    </Sec>
    </>
  )
}
