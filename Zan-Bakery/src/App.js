import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataContext } from "./DataContext";
import { data } from './store';
import { CardViewer, Header, Payment } from "./organism";
import styled from "styled-components";
import ThankYou from "./organism/ThankYou";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {

  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    const hasDuplicate = items.some((check) => item.name === check.name);
    if(!hasDuplicate)setItems([...items, item]);
  }


  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <DataContext.Provider value={{ data , addToCart, items, removeItem}}>
    <Router>
      <div>
        <Header />
      </div>
      <Container >
        <Routes>
            <Route path="/" element={<CardViewer />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/thankyou' element={<ThankYou/>}/>
        </Routes>
      </Container>
      </Router>
      </DataContext.Provider>
  );
};

export default App;
