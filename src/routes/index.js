import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import CadastrarRevendedor from '../pages/CadastrarRevendedor'
import ListagemCompras from '../pages/ListagemCompras'
import CadastrarCompras from '../pages/CadastrarCompras'
import NotFound from '../pages/NotFound'

const Router = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/cadastrar-revendedor" component={CadastrarRevendedor} />
    <Route path="/listagem-compras" component={ListagemCompras} />
    <Route path="/cadastrar-compras" component={CadastrarCompras} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default Router
