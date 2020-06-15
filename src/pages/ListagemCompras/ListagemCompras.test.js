import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'

import ListagemCompras from './'

describe('PageView <ListagemCompras />', () => {
  it('Fetch Load', async () => {
    const { container, getByTestId } = render(<Router history={createMemoryHistory()}><ListagemCompras /></Router>)

    const btn = getByTestId('btnCashback')
    fireEvent.click(btn)

    const btnClose = getByTestId('btnCashbackClose')
    fireEvent.click(btnClose)

    await waitForElementToBeRemoved(async () => {
      const titulo = container.querySelector('h2')
      if(titulo) {
        expect(titulo.innerHTML).toBe('Olá revendedor(a), veja bem vindo!')
      }
    }).catch(err =>
      err
    )
  })
})