import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import CadastrarRevendedor from '../pages/CadastrarRevendedor'
import Comprar from '../pages/Comprar'
import NotFound from '../pages/NotFound'

export default () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/cadastrar-revendedor" component={CadastrarRevendedor} />
    <Route path="/comprar" component={Comprar} />
    <Route path="/listagem-compras" component={() => <h2>Listagem das compras</h2>} />
    <Route path="/cadastrar-compras" component={() => <h2>Cadastrar compras</h2>} />
    <Route path="*" component={NotFound} />
  </Switch>
)