import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import Login from './'

let history
beforeEach(() => {
  history = {
    history: {
      push: jest.fn()
    }
  }
})

describe('PageView <Login />', () => {
  it('Usuário inválido', async () => {
    const { container, getByTestId } = render(<Router history={ createMemoryHistory() }><Login /></Router>)

    const email = getByTestId('email')
    const senha = getByTestId('senha')
    const form = getByTestId('form')

    fireEvent.change(email, { target: { value: 'silvano@gmail.com' } })
    fireEvent.change(senha, { target: { value: '12345' } })
    fireEvent.submit(form)

    await waitForElementToBeRemoved(async () => {
      const message = container.querySelector('.message')
      if(message) {
        expect(message.innerHTML).toBe('Usuário ou senha inválidos')
      }
    }).catch(err =>
      err
    )
  })

  it('Login sucesso', async () => {    
    const { container, getByTestId } = render(<Router history={createMemoryHistory()}><Login {...history}/></Router>)

    const email = getByTestId('email')
    const senha = getByTestId('senha')
    const form = getByTestId('form')

    fireEvent.change(email, { target: { value: 'silvano@gmail.com' } })
    fireEvent.change(senha, { target: { value: '123456' } })
    fireEvent.submit(form)

    await waitForElementToBeRemoved(async () => {
      const message = container.querySelector('.message')
      if(message) {
        expect(message.innerHTML).toBe('Usuário cadastrado, direciona para página restrita')
      }
    }).catch(err =>
      err
    )
  })
})