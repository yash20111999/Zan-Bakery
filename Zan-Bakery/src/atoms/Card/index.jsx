import React, { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../DataContext';

const CardContainer = styled.div`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover{
    transform: scale(1.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const CardFooter = styled.div`
  display: flex;
  background-color: rgb(242, 242, 242);
  padding: 1rem;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: black;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  width:fit-content;
`;

const Card = ({card}) => {
  const { image, name, price } = card
  const { addToCart } = useContext(DataContext);
  
  return (
    <CardContainer>
      <CardImage src={image} alt={name} />
      <CardFooter>
        <CardTitle>{name}</CardTitle>
        <Price>Price: {price}</Price>
        <Button onClick={()=>addToCart(card)}>Add To Cart</Button>
      </CardFooter>
    </CardContainer>
  );
}

export default Card;
