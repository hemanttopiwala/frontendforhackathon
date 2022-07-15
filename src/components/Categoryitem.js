
import React from 'react'
import styled from 'styled-components';
import {mobile} from '../responsive';


const Container=styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position :relative;
`

const Image =styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    ${mobile({ height:"30vh"})};
    
    
`

const Info =styled.div`
    position: absolute;
    height:100%;
    width:100%;
    top:0;
    left:0;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

`

const Title =styled.h1`
    color:white;
    margin-bottom:20px;

`

const Button=styled.button`
    border:none;
    background-color:white;
    padding:10px;
    color:gray;
    cursor:pointer;
    font-weight:600;


`
const Categoryitem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />

        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>

        
    </Container>
  )
}

export default Categoryitem