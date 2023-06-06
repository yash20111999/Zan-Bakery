import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DataContext } from '../../DataContext';

const Container = styled.div`
  padding: 1rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
`

const Image = styled.img`
  width:5rem;
  height:5rem;
  border-radius: 50%;
`

const ItemContainer = styled.div`
  display: flex;
    background-color: bisque;
    padding: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    border-radius: 0.5rem;
`
const Amount = styled.span`
  padding: 1rem;
  font-weight: 900;
`

const Button = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
`;

const Payment = () => {
  const { items, removeItem } = useContext(DataContext);

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + Number(item.price), 0);
  };

  const navigate = useNavigate();
  return (
    <Container>
      {items.length?items.map((item,index) => (
        <ItemContainer key={item.id}>
          <Image src={item.image} alt='preview' />
          <span>{item.name}</span>
          <span>{item.price} Rs.</span>
          <button onClick={()=>removeItem(index)}>Remove</button>
        </ItemContainer>
      )):<span>No Items to Checkout Go Back to Home By Clicking Zan Bakery</span>}
      <Amount>Total Amount {calculateTotal()} Rs</Amount>
      <Button onClick={()=>navigate('/thankyou')}>Proceed To Payment of {calculateTotal()} Rs</Button>
    </Container>
  )
}

export default Payment
