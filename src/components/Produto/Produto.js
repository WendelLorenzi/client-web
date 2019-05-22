import React, { useState, useContext } from 'react'
import { CartContext } from '../../context'
import { Button, Col, Card } from 'react-bootstrap'

var ID = function () {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  )
}

const Produto = ({ name, value, id, disableSize }) => {
  const [size, setSize] = useState()

  const { add } = useContext(CartContext)

  const sizeChanged = e => {
    setSize(e.target.value)
  }

  const submitHandler = () => {
    if (!disableSize && !size) {
      alert('Escolha um tamanho')
      return
    }

    add({ value, size, name, id, uid: ID() })
    setSize(null)
  }

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {!disableSize && (
              <div onChange={sizeChanged}>
                <input
                  type='radio'
                  checked={size === 'P'}
                  name={`size-${id}`}
                  value='P'
                />
                P<br />
                <input
                  type='radio'
                  checked={size === 'M'}
                  name={`size-${id}`}
                  value='M'
                />
                M<br />
                <input
                  type='radio'
                  checked={size === 'G'}
                  name={`size-${id}`}
                  value='G'
                />
                G<br />
                <input
                  type='radio'
                  checked={size === 'GG'}
                  name={`size-${id}`}
                  value='GG'
                />
                GG
              </div>
            )}
            R${value.toFixed(2)}
          </Card.Text>
          <Button
            variant='primary'
            type='submit'
            id='submit'
            onClick={submitHandler}
          >
            Adicionar ao carrinho
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Produto
