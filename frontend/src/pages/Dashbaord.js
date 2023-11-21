import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/generalComp/Sidebar'
import Home from '../components/Dashboard/Home'


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
export default function Dashbaord({account, state}) {
  return (
    <>
    <Sec>
      <Left>
      <Sidebar account={account}/> 
      </Left>
      <Right>
        <Home state= {state} account = {account}/>
      </Right>
    </Sec>
    </>
  )
}
