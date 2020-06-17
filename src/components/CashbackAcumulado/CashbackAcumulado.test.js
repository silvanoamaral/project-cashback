import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import CashbackAcumulado from './'

afterEach(cleanup)

describe('<CashbackAcumulado />', () => {
  it('CashbackAcumulado render', async () => {
    const { getByTestId } = render(<CashbackAcumulado />)

    const btnCashback = getByTestId('btnCashback')
    fireEvent.click(btnCashback)

    if(document.querySelector('.lightbox')) {
      expect(document.querySelectorAll('.lightbox').length).toBe(1)
    }
  })
})