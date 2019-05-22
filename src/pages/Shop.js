import React from 'react'
import { Produto } from '../components'
import { Row } from 'react-bootstrap'

const produtos = [
  { name: 'Camisa Feminina', value: 45.5, id: 1 },
  { name: 'Camisa Masculina', value: 45.5, id: 2 },
  { name: 'Shorts Praia Feminino', value: 45, id: 3 },
  { name: 'Shorts Praia Masculino', value: 45, id: 4 },
  { name: 'Caneca e tirante', value: 20, id: 5, disableSize: true },
  { name: 'Bone', value: 50, id: 6, disableSize: true }
]

const Shop = props => {
  return (
    <Row>
      {produtos.map(produto => (
        <Produto key={produto.id} {...produto} />
      ))}
    </Row>
  )
}

export default Shop
