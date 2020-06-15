import React from 'react'
import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'

import CashbackAcumulado from './'

describe('<CashbackAcumulado />', () => {
  it('CashbackAcumulado render', async () => {
    const { container, getByTestId } = render(<CashbackAcumulado />)
    //console.log(container.innerHTML)
    /* const codigo = getByTestId('codigo')
    const valor = getByTestId('valor')
    const date = getByTestId('date')
    const state = getByTestId('state')
    const form = getByTestId('form')

    fireEvent.change(codigo, { target: { value: '123456' } })
    fireEvent.change(valor, { target: { value: '123456' } })
    fireEvent.change(date.querySelector('input'), { target: { value: '12-12-2020' } })
    fireEvent.click(state.querySelector('input[value="Em validação"]'))

    fireEvent.submit(form) */
    await waitForElementToBeRemoved(async () => {
      const message = container.querySelector('.message')
      
      if(message) {
        //expect(message.innerHTML).toBe('Cadastro realizado com sucesso.')
      }
    }).catch(err =>
      err
    )
  })
})