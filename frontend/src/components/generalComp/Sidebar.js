import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import logo from "../../assets/618ea7afd990103829d614ff_gumroad-logo.svg";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, Navigate, redirect } from 'react-router-dom';




const Sec = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
padding: 44px;
img {
    width: 100px;
  }
height: 588px;
`
const Heading = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 4px;
padding: 12px;
cursor: pointer;
`
export default function Sidebar({account}) {
  const [logout_success, setlogout_success] = useState(false)
  const res = localStorage.getItem("isUser");
  useEffect(() => {
    return;
   }, [res])
  const handle_logout = ()=>{
    localStorage.removeItem('isUser');
    setlogout_success(true)
    window.location.reload()
  }
  return (
    <>
    {logout_success && (<Navigate to='/'/>)}
    <Sec>
        <div> <Link to="/"><h2>DigiTradeHub</h2></Link></div>
        <div style={{width: 100}}>
            <Heading>
              <HomeIcon/>
              <div><h2><Link to="/">Home</Link></h2></div>
              </Heading>
              <hr />
            <Heading>
              <><ArticleIcon/></>
              <div> <h2><Link to="/products">Products</Link></h2></div>
            </Heading>
            <hr />
            {!(account == "0x38d6f1cca95f73f6b3d429a2f78c658de37ea7c6") && <><Heading>
              <><SearchIcon/></>
              <div> <h2><Link to="/discover">Discover</Link></h2></div>
            </Heading><hr/></>}
           {(account == "0x38d6f1cca95f73f6b3d429a2f78c658de37ea7c6") && <><Heading>
              <><SignalCellularAltIcon/></>
              <div> <h2><Link to="/analytics">Analytics</Link></h2></div>
            </Heading><hr/></>}
            
            <Heading>
              <><LogoutIcon/></>
              <div onClick={handle_logout}> <h2>Logout</h2></div>
            </Heading>
            
        </div>
    </Sec>
    </>
  )
}
