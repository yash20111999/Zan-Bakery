import React, { useContext } from 'react';
import { DataContext } from '../../DataContext';
import { Card } from '../../atoms';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const CardViewer = () => {

  const { data } = useContext(DataContext);
  
  return (
    <Container>
      {data !== {} && data?.map((card) => {
        return <Card card={card} />
      })}
    </Container>
  )
}

export default CardViewer
