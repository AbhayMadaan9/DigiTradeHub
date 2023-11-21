import './App.css';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import University from './pages/University';
import Blog from './pages/Blog';
import Discover from './pages/Discover';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashbaord from './pages/Dashbaord';
import swal from 'sweetalert';
import abi from "./contracts/Tradinghub.json"
import Products from './pages/Products';
import Analytics from './pages/Analytics'

function App() {
  const ethers = require("ethers")

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [account, setAccount] = useState('Not connected');   
  const [isuser, setisuser] = useState(false)

  useEffect(() => {
    const res = localStorage.getItem("isUser");
    if(res == "true") setisuser(true)
    const connectWallet = async () => {
      const contractAddress = "0x38BBF23FF9211b346EF1D3bf855D126c88e60bF1"; 
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account[0]);
          setState({ provider, signer, contract });
        } else {
          setisuser(false)
          swal("Please install metamask");
        }
      } catch (error) {

        console.log(error);
      }
    };
    connectWallet();
  }, [account]);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={isuser?<Dashbaord state= {state} account = {account} />:<Home/>} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/university' element={<University />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/discover' element={<Discover state={state} account={account}/>} />
        <Route path='/login' element={<Login acc={account} state={state}/>} />
        <Route path='/register' element={<Register state={state} acc = {account}/>} />
        <Route path='/dashboard' element={<Dashbaord />} />
        <Route path='/products' element={<Products  state={state} account={account} />} />
        <Route path='/analytics' element={<Analytics  state={state} account={account} />} />
      </Routes>
    </div>
  );
}

export default App;
