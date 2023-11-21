import React, {Suspense, useEffect, useState} from 'react'
import styled from 'styled-components'
import Navbar from '../components/generalComp/Navbar'
import swal from 'sweetalert'
import { Navigate } from 'react-router-dom'


const Sec = styled.div`
display: flex;
flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
`
const Sec1 = styled.div`
flex: 1;
width: 60%;
display: flex;
flex-direction: column;
  align-items: center;
  gap: 100px;
button{
  background-color: black;
  color: white;
  width: 300px;
  padding: 4px;
  font-size: large;
  border-radius: 4px
}
`
const Sec2 = styled.div`
flex: 1;
width: 40%;
height: 589px;
overflow: hidden;
img{
    width: 100%;
    height: auto;
    object-fit: cover;
}

`
const Field  = styled.div`
button{
  cursor: pointer;
}
display: flex;
flex-direction: column;
  align-items: center;
  align-items: start;
  gap: 4px;
input{
  outline: none;
  padding: 8px;
  width: 300px;
    border-radius: 4px;
    border: 1px solid black;
}

`
export default function Login({acc, state}) {
  const [pass, setpass] = useState("")
  const [success, setsuccess] = useState(false)
  const isuser = localStorage.getItem("isUser");
  useEffect(() => {
   return;
  }, [isuser])
  const handle_login = async()=>{
    const {contract} = state;
    try {
      const res = await contract.checkuser(acc);
      console.log(res)
      if(res === pass){
         swal("Good Job", "Login Successfull", "success");
         localStorage.setItem("isUser", true);
         setsuccess(true);
      }
      else{
        swal("Oops!", "Invalid Account", "error")
      }
    } catch(error) {
      swal("Error", "Try again with different account", "error");
    }
  }
  
 
  return (
    <>
    {success && <Navigate to="/" replace={true}/>} 
    <Navbar/>
    <Sec>
        <Sec1>
            <div><h1>Log in</h1></div>
            <Field>
            <Field>
                <label htmlFor="">Account</label>
                <input type="text" value={acc}/>
                <label htmlFor="">Password</label>
                <input type="password" onChange={(e)=>setpass(e.target.value)}/>
            </Field>
            <div  style={{marginTop: "16px", cursor: "pointer"}}><button onClick={handle_login}>Login</button></div>
            </Field>
        </Sec1>
        <Sec2>
            <img src="https://assets.gumroad.com/assets/auth/background-29d487bd6d844e8a6b763d36a7bff15523c665c4e44f8fd67840815f2edbea24.png" alt="side logo" />
        </Sec2>
    </Sec>
    </>
  )
}
