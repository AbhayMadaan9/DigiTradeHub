import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';

// Styled components for the product card
const ProductCardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: fit-content;
  white-space: normal; /* Add this line to enable text wrapping */
  button {
    padding: 8px;
    background-color: pink;
    outline: none;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 4px;
  }

`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const ProductName = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const ProductDescription = styled.p`

  color: #555;
  margin-bottom: 8px;
`;

const ProductType = styled.span`
  font-size: 0.8rem;
  color: #888;
`;

const ProductPrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

// Main ProductCard component
const Product = ({id, state, account, filter_type}) => {
  const [success, setsuccess] = useState(false)
  const [filehash, setfilehash] = useState("")
  const [visbility, setvisbility] = useState(true)
  const ethers = require("ethers")
   const [prod_name, setprod_name] = useState("")
   const [prod_price, setprod_price] = useState("")
   const [prod_type, setprod_type] = useState("")
   const [prod_desc, setprod_desc] = useState("")
   const [prod_img, setprod_img] = useState("")
   const [selleracc, setselleracc] = useState("")
    const {contract, provider} = state;
    useEffect(() => {
        const get_data = async()=>{
          const hashfile = await contract.get_product_filehash(id);
        setfilehash(hashfile)
        console.log(hashfile)
        const res =  await contract.getProductDetails(id)
        setselleracc(res[0])
        setprod_name(res[1]);
        setprod_price(res[2])
        setprod_type(res[3])
        setprod_desc(res[4])
        setprod_img(res[5])
        // if(filter_type == "digitalproduct") setvisbility(true)
        // if(prod_type !== filter_type) setvisbility(false);
        // if(prod_type == filter_type) setvisbility(true)
        }
        get_data()
    }, [contract, filter_type])
    const handle_purchase = async () => {
      try {
        
        // Convert the product price to wei
        const productPriceInWei = ethers.utils.parseEther(prod_price.toString());
        // Send the purchase transaction with the product price as value
        const tx = await contract.purchase(id, selleracc, {
          value: productPriceInWei,
        });
        // Assuming 'tx' is the transaction object
//  const inputData = tx.data; // This is the hexadecimal representation of the input data

// // // Convert the hexadecimal data to a string
//  const inputString = ethers.utils.toUtf8String(inputData);

// // // Extract the file hash from the input string (assuming the file hash is at the end of the string)
//  const fileHash = inputString.substring(inputString.length - 46);

//  console.log("File Hash:", fileHash);
        // Wait for the transaction to be mined
          await tx.wait();
         
        swal("Good Job", "Purchased Successfully", "success");
        setsuccess(true)
      } catch (error) {
        console.log(error);
        swal("Try again");
      }
   //   window.location.reload()
    };
    const handle_approve = async()=>{
      try {
        // Convert the product price to wei
        const productPriceInWei = ethers.utils.parseEther(prod_price.toString());
    
        // Send the purchase transaction with the product price as value
         await contract.approveProduct(id);
        swal("Product approved Successfully");
      } catch (error) {
        console.log(error);
        swal("Try again");
      }
      window.location.reload()
    }
    return (
      <>
      {
        visbility && (
         <>
         <ProductCardWrapper>
          <ProductImage src={prod_img} />
          <ProductName>{prod_name}</ProductName>
          <ProductDescription>{prod_desc}</ProductDescription>
          <ProductType>Type: {prod_type}</ProductType>
          <ProductPrice>{prod_price} Eth </ProductPrice>
          {(account === "0x38d6f1cca95f73f6b3d429a2f78c658de37ea7c6") && <><a href={filehash} target='blank'><button>Link to File</button></a> </>}
         <div> {success && <><a href={filehash} target='blank'><button>Link to File</button></a> </>}</div>
         {!(account === "0x38d6f1cca95f73f6b3d429a2f78c658de37ea7c6")? <> <button onClick={handle_purchase}>Purchase</button></>:<><button onClick={handle_approve}>Approve</button></>}
          </ProductCardWrapper>
       </>
        )
      }

    </>
    );
}
    
    
export default Product;