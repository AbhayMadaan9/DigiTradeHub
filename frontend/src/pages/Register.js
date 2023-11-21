import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Navbar from '../components/generalComp/Navbar'
import swal from "sweetalert"


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
  border-radius: 4px;
  cursor: pointer;
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
export default function Register({state, acc}) {
  const [uname, setuname] = useState(" ")
  const handle_submit = async()=>{
    const {contract} = state;
    try {
      const res = await contract.registerUser(acc, uname);
         swal("Good Job", "Account Successfully created", "success");
         localStorage.setItem("isUser", true);
    } catch {
      swal("Error", "Try again with different account", "error");
    }
  }
  return (
    <>
    <Navbar/>
    <Sec>
       <Sec1>
            <div><h1>Sign Up</h1></div>
            <Field>
            <Field>
                <label htmlFor="">Account</label>
                <input type="text"  value={acc}/>
            </Field>
            <Field>
            <label htmlFor="">Password</label>
                <input type="password" onChange={(e)=>setuname(e.target.value)}/>
            </Field>
            <div  style={{marginTop: "16px", cursor: "pointer"}} onClick={handle_submit}><button disabled = {uname.length == 0}>Create Account</button></div>
            </Field>
        </Sec1>
        <Sec2>
            <img src="https://assets.gumroad.com/assets/auth/background-29d487bd6d844e8a6b763d36a7bff15523c665c4e44f8fd67840815f2edbea24.png" alt="side logo" />
        </Sec2>
    </Sec>
    </>
  )
}
