import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Sidebar from '../components/generalComp/Sidebar'
import Product from '../components/generalComp/Product'
import axios from 'axios'
import { Dialog, DialogTitle } from '@mui/material'
import swal from 'sweetalert'
import Purchase from '../components/generalComp/Purchase'

const Navbar = styled.div`
padding: 16px;
font-size: x-large;
border-bottom: 1px dotted black;
h1{
    text-align: left;
}
`
const Sec2 = styled.div`
padding: 4px;
display: flex;
flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;
const Img = styled.div`
width: 100%;
img{
    width: 100%;
}
`
const Sec = styled.div`
display: flex;
flex-direction: row;
`
const Left = styled.div`
width: 15%;
background-color: #f4f4f0;
`
const Right = styled.div`
width: 85%;
`
export default function Products({ account, state }) {
    const [products_id, setproducts_id] = useState([])
    const {contract} = state;
    useEffect(()=>{
      const get_prod = async()=>{
        try {
            let res;
            if(!(account == "0x38d6f1cca95f73f6b3d429a2f78c658de37ea7c6")){
          res = await contract.list_user_products(account);
          setproducts_id(res)
            }
            else
            {
                res = await contract.listUnapprovedProducts();
          setproducts_id(res)
            }
        } catch (error) {
          console.log(error)
        }
      }
      get_prod()
    }, [contract])
  return (
    <>
    <Sec>
      <Left>
      <Sidebar account={account}/> 
      </Left>
      <Right>
      <Navbar>
        <h1>Welcome To DigiTradeHub</h1>
      </Navbar>
      <Sec2>
          {
              products_id.map(id=>{
                return(
                <>
                <Product id={id} state = {state} account={account} filter_type="digitalproduct" />
                </>
                )
              })
            }
          </Sec2>
      </Right>
    </Sec>
      
   
    </>
  )
}
