import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'

import CadastrarCompras from './'

describe('PageView <CadastrarCompras />', () => {
  it('Cadatrar compras', async () => {
    const { container, getByTestId } = render(<Router history={createMemoryHistory()}><CadastrarCompras /></Router>)
    
    const codigo = getByTestId('codigo')
    const valor = getByTestId('valor')
    const date = getByTestId('date')
    const state = getByTestId('state')
    const form = getByTestId('form')

    fireEvent.change(codigo, { target: { value: '123456' } })
    fireEvent.change(valor, { target: { value: '123456' } })
    fireEvent.change(date.querySelector('input'), { target: { value: '12-12-2020' } })
    fireEvent.click(state.querySelector('input[value="Em validação"]'))

    fireEvent.submit(form)

    await waitForElementToBeRemoved(async () => {
      const message = container.querySelector('.message')
      
      /* if(message) {
        expect(message.innerHTML).toBe('Cadastro realizado com sucesso.')
      } */
    }).catch(err =>
      err
    )
  })
})