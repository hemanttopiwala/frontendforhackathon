
import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../Data';
import ProductItem from './ProductItem';

const Container=styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;

`

const Products = () => {
  return (
    <Container>
        {
            popularProducts.map((obj)=>(
                <ProductItem item={obj} key={obj.id} />
            ))
        }
    </Container>
  )
}

export default Products