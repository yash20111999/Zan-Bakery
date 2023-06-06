import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CheckoutList } from '../../molecules';

const Navbar = styled.div`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
`
const Heading = styled.h1`
  cursor:pointer;
`

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar>
      <Heading onClick={()=> navigate('/')}>Zan Bakery</Heading>
      <CheckoutList />
    </Navbar>
  );
}

export default Header;
