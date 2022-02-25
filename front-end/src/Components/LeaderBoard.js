import {Table, Container } from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios"
import Product from "./Product"

const LeaderBoard = () => {
    const [leaders, setLeaders] = useState([])

    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions`)
            .then((response) =>{
                setLeaders(response.data)
            }).catch((err) => {
                throw err
            })
    }, [])

  return (
      <Container className="m-5">
          <h2>Top Collections</h2>
            <Table responsive striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {leaders.map((product) => {
            return <Product key={product.id} product={product}/>
          })}
            </tbody>
        </Table>
      </Container>
    
  )
}

export default LeaderBoard