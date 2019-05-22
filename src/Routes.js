import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { ShopPage, CartPage, ConfirmationPage } from './pages'

const Routes = props => {
  return (
    <Switch>
      <Route path='/confirmation/:key' component={ConfirmationPage} />
      <Route path='/cart' component={CartPage} />
      <Route path='/shop' component={ShopPage} />
      <Redirect to='/shop' exact />
    </Switch>
  )
}

export default Routes
