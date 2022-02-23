import React from 'react'
import Products from '../Components/Products'
import { Container } from "react-bootstrap"

const Index = () => {
  return (
    <Container className='my-5'>
        <h2 className='mb-4'>Index</h2>
        <Products /> 
    </Container>
  )
}

export default Index