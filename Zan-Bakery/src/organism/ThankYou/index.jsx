import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items:center;
  gap:2rem;
  flex-direction: column;
`
const Button = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  width:max-content;
`;

const Message = styled.span`
  font-size: 3rem;
  font-weight: 900;
`

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Message>Thank You!! Your order will be delivered Soon... To Browse More Items Click Below.</Message>
      <Button onClick={()=> navigate('/')}>Go To Home Page</Button>
    </Container>
  )
}

export default ThankYou
