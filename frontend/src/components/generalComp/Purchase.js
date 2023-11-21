import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const PurchaseWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: fit-content;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Data = styled.div`
  margin-bottom: 12px;
`;

const Purchase = ({id, state, account}) => {
    const [buyer, setbuyer] = useState("")
    const [seller, setseller] = useState("")
    const [timestamp, settimestamp] = useState("")
    const [productId, setproductId] = useState("")
     const {contract} = state;
     useEffect(() => {
         const get_data = async()=>{
         const res =  await contract.get_purchase_info(id)
         console.log(res)
         setbuyer(res[0])
         setseller(res[1])
         settimestamp(res[2])
         setproductId(res[3])
         }
         get_data()
     }, [contract])
  // You can format the timestamp using JavaScript Date functions or a library like moment.js
  const formattedTimestamp = new Date(timestamp * 1000).toLocaleString();

  return (
    <PurchaseWrapper>
      <Label>Buyer:</Label>
      <Data>{buyer}</Data>

      <Label>Seller:</Label>
      <Data>{seller}</Data>

      <Label>Timestamp:</Label>
      <Data>{formattedTimestamp}</Data>

      <Label>Product ID:</Label>
      <Data>{productId}</Data>
    </PurchaseWrapper>
  );
};

export default Purchase;
