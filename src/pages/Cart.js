import React, { useContext } from 'react'
import { CartContext } from '../context'
import { Button, Table } from 'react-bootstrap'

const Cart = props => {
  const { products, total, remove, clear } = useContext(CartContext)

  const fecharPedido = () => {
    // enviar pedido para servidor
    console.log('pedindo', products())
    clear()
  }
  return (
    <React.Fragment>
      <Table responsive='md'>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {products().map(produto => (
            <tr key={produto.id}>
              <td>
                {produto.name}({produto.size})
              </td>
              <td>R${produto.value.toFixed(2)}</td>
              <td>
                <Button onClick={() => remove(produto)}>x</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      Total: R${total().toFixed(2)} (pode ser parcelado em até 12x no crédito
      com juros ou até 2x no débito ou dinheiro)
      <br />
      <input
        id='email'
        label='Email'
        placeholder='Enter your email'
        type='email'
      />
      <Button onClick={fecharPedido}>Fechar pedido</Button>
    </React.Fragment>
  )
}

export default Cart
