import React, { useState } from 'react'
import { CartContext } from '../context'
const load = () =>
  localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const CartProvider = props => {
  const [cart, setCart] = useState(load())

  const save = cart => {
    setCart(cart)
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const add = product => {
    save([...cart, product])
  }
  const remove = product => {
    save([...cart].filter(el => el.uid !== product.uid))
  }
  const quantity = () => cart.length

  const total = () => {
    let total = 0
    cart.map(product => (total += product.value))
    return total
  }

  const clear = () => {
    save([])
  }
  const products = () => cart
  return (
    <CartContext.Provider
      value={{ add, remove, quantity, total, products, clear }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
