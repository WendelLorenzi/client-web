import React from 'react'

export default React.createContext({
  add: product => {},
  remove: uid => {},
  quantity: () => {},
  total: () => {},
  products: () => {},
  clear: () => {}
})
