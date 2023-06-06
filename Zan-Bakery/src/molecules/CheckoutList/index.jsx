import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../DataContext';
import styled from 'styled-components'


const Button = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
`;

const DropdownContainer = styled.div`
  display: flex;
  position: absolute;
  top: calc(100% - 30px);
  right: 0px;
  z-index: 2;
  padding: 8px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(204, 204, 204);
  flex-direction: column;
`;

const DropdownItem = styled.div`
  display: flex;
  padding: 8px;
  cursor: pointer;
  color: black;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text =styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-inline: 0.5rem;
  color: black;
`;

const CheckoutList = () => {

  const navigate = useNavigate();

  const { items, removeItem } = useContext(DataContext);

  const [toggle, setToggle] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // add event listener to detect clicks outside container
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // remove event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  return (
    <>
      <Button onClick={() => setToggle(!toggle)}>
        {items.length ? `${items.length} Items Added to the` : 'Add Items to the '}
        Cart
      </Button>
      {
        toggle &&
        <DropdownContainer ref={containerRef}>
          {items.length ? items.map((item) => (
            <DropdownItem key={item.id}>
              <Text>{item.name}</Text>
              <Text>{item.price} Rs.</Text>
              <button onClick={removeItem}>Remove</button>
            </DropdownItem>
          )):<Text>Add Items From List</Text>}
            <Button disabled={!items.length} onClick={() => {
              navigate('/payment');
              setToggle(false);
            }}>Proceed To Checkout</Button>
        </DropdownContainer>
      }

    </>
  );
}

export default CheckoutList;
