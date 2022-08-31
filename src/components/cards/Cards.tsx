import React from 'react';
import { useParams } from 'react-router-dom';

function Cards() {
  const params = useParams();
  return <div>{params.category}</div>;
}

export default Cards;
