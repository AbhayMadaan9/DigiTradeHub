import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Dialog, DialogTitle } from '@mui/material'
import swal from 'sweetalert'

const Navbar = styled.div`
padding: 16px;
font-size: x-large;
border-bottom: 1px dotted black;
h1{
    text-align: left;
}
`
const New = styled.div`
padding: 44px;
 button{
    padding: 12px;
    background-color: pink;
        outline: none;
        border: 1px solid black;
    &:hover{
    cursor: pointer;
    box-shadow: 5px 5px 0 0 #000;
    transform: translate(-5px, -5px); 
}
 }
`
const Img = styled.div`
width: 100%;
img{
    width: 100%;
}
`
const Sec = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
border: 1px dotted black;
padding: 32px;
input{
  padding: 8px;
  font-size: large;
  outline: none;
  width: 100%;
}
select{
  outline: none;
  padding: 8px;
  font-size: large;
}
button{
  padding: 12px;
  background-color: pink;
  outline: none;
  border: 1px solid black;
  cursor: pointer;
}
textarea{
  outline: none;
  font-size: large;
}
`

export default function Home({ account, state }) {
  const [img, setimg] = useState("")
  const [name, setname] = useState("")
  const [type, settype] = useState("digitalproduct")
  const [desc, setdesc] = useState("")
  const [price, setprice] = useState(0)
  const [filehash, setfilehash] = useState("")
  const { contract } = state;
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  const handle_upload = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `7eefe76a9cc559afde99`,
            pinata_secret_api_key: `2a4b67020652cb07bee166e1be9454d31f26ae80532102e85468c64bac2e8b1c`,
            "Content-Type": "multipart/form-data",
          },
        });
        const FileHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        setfilehash(FileHash)
        swal("File Successfully Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        swal("Unable to upload file to Pinata");
      }
    }
    swal("File Successfully Uploaded");
    setFileName("No file selected");
    setFile(null);
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handle_publish = async () => {
    try {
      const formData = new FormData();
      formData.append("file", img);
      await contract.addProduct(account, name, filehash, price, desc, formData, type);
      swal("Great Job", "Product published Successfully", "success")
      setOpen(false)
    } catch (error) {
      console.log(error)
      swal("Try again")
    }

  }
  return (
    <>
      <Navbar>
        <h1>Welcome To DigiTradeHub</h1>
      </Navbar>
      <New>
        <Sec>
          <Img><img src="https://assets.gumroad.com/packs/static/20f9d3e0a6869c1b28a1.png" alt="" /></Img>
          <div><h3>We're here to help you get paid for your work</h3></div>
          <div>
            <button onClick={handleClickOpen}>
              Create your product
            </button>
            <Dialog
              open={open}
              onClose={handleClose}
            >
              <Sec>
                <DialogTitle>Fill Product Details</DialogTitle>
                <label >Name: </label>
                <input type="text" placeholder='Name of Product' onChange={(e) => setname(e.target.value)} />
                <label>Type:</label>
                <select name="type" onChange={(e) => { settype(e.target.value) }} value={type}>
                  <option value="digitalproduct">DigitalProduct</option>
                  <option value="course">Course or Tutorial</option>
                  <option value="ebook">E-Book</option>
                  <option value="membership">Membership</option>
                  <option value="podcast">Poadcast</option>
                  <option value="audiobook">Audio-book</option>
                </select>
                <label >Description: </label>
                <textarea name='description' onChange={(e) => setdesc(e.target.value)} />
                <label >Cover photo: </label>
                <input type='file' accept='image/png, image/jpg' placeholder='Upload Image of your product' onChange={(e) => { setimg(URL.createObjectURL(e.target.value)) }} />
                <label htmlFor="file-upload" className="choose">
                  Choose file:
                </label>
                <input
                  disabled={!account}
                  type="file"
                  id="file-upload"
                  name="data"
                  onChange={retrieveFile}
                />
                <button type="submit" className="upload" disabled={!file} onClick={handle_upload}>
                  Upload File
                </button>
                <label>Price:</label>
                <input type="number" placeholder='In Ethers' onChange={(e) => setprice(e.target.value)} />
                <button
                  onClick={handle_publish}
                  disabled={(name.length == 0 || desc.length == 0)}
                >
                  Publish
                </button>
              </Sec>
            </Dialog>
          </div>
        </Sec>
      </New>
    </>
  )
}
