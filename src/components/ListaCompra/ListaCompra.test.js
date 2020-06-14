import React from 'react'
import { shallow } from 'enzyme'

import ListaCompra from './'

describe('PageView <ListaCompra />', () => {
  const initialProps = {
    codigo: '123',
    valor: '222.55',
    date: '12-12-2000',
    status: 'Aprovado',
    formata: 'aprovado'
  }

  const wrapper = shallow( <ListaCompra {...initialProps} /> )

  it('renders <ListaCompra />', () => {
    expect(wrapper.find('.aprovado')).toHaveLength(1)
  })
})