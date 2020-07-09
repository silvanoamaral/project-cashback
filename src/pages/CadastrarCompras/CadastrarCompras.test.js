import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, waitForElementToBeRemoved, cleanup } from '@testing-library/react'

import CadastrarCompras from './'

afterEach(cleanup)

describe('PageView <CadastrarCompras />', () => {
  it('Cadastrar compras', async () => {
    const { container, getByTestId } = render(
      <Router history={createMemoryHistory()}>
        <CadastrarCompras />
      </Router>
    )

    const codigo = getByTestId('codigo')
    const valor = getByTestId('valor')
    const date = getByTestId('date')
    const state = getByTestId('state')
    const form = getByTestId('form')

    fireEvent.change(codigo, { target: { value: '123456' } })
    fireEvent.change(valor, { target: { value: '123456' } })
    fireEvent.change(date.querySelector('input'), { target: { value: '2020-12-12' } })
    fireEvent.click(state.querySelector('input[value="Em validação"]'))

    fireEvent.submit(form)

    await waitForElementToBeRemoved(async () => {
      if (container.querySelector('.message')) {
        expect(container.querySelector('.message').textContent)
          .toEqual('Compra registrada com sucesso.')
      }
    }).catch(err =>
      err
    )
  })
})
