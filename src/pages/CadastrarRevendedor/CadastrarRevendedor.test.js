import React from 'react'
import { render, fireEvent, waitForElementToBeRemoved, cleanup } from '@testing-library/react'

import CadastrarRevendedor from './'

afterEach(cleanup)

describe('PageView <CadastrarRevendedor />', () => {
  it('CPF já cadastrado', async () => {
    const { container, getByTestId } = render(<CadastrarRevendedor />)

    const nome = getByTestId('nome')
    const cpf = getByTestId('cpf')
    const email = getByTestId('email')
    const senha = getByTestId('senha')
    const form = getByTestId('form')

    fireEvent.change(nome, { target: { value: 'silvano' } })
    fireEvent.change(cpf, { target: { value: '01234567890' } })
    fireEvent.change(email, { target: { value: 'silvano@gmail.com' } })
    fireEvent.change(senha, { target: { value: '123456' } })
    fireEvent.submit(form)
    
    await waitForElementToBeRemoved(async () => {
      const message = container.querySelector('.message')
      if(message) {
        expect(message.innerHTML).toBe('O CPF 012.345.678-90, já existente.')
      }
    }).catch(err =>
      err
    )
  })

  it('Novo cadastro', async () => {
    const { container, getByTestId } = render(<CadastrarRevendedor />)

    const nome = getByTestId('nome')
    const cpf = getByTestId('cpf')
    const email = getByTestId('email')
    const senha = getByTestId('senha')
    const form = getByTestId('form')

    const randomCpf = Math.floor(Math.random() * 99999999999)

    fireEvent.change(nome, { target: { value: 'testeunitario' } })
    fireEvent.change(cpf, { target: { value: randomCpf } })
    fireEvent.change(email, { target: { value: 'testeunitario@gmail.com' } })
    fireEvent.change(senha, { target: { value: '123456' } })
    fireEvent.submit(form)
    
    await waitForElementToBeRemoved(async () => {
      const message = container.querySelector('.message')      
      if(message) {
        expect(message.innerHTML).toBe('Cadastro realizado com successo ;)')
      }
    }).catch(err =>
      err
    )
  })
})