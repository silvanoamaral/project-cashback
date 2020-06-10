import React from 'react'
import { shallow } from 'enzyme'

import ListagemCompras from './'

describe('PageView <ListagemCompras />', () => {
  const comp = (
    <ListagemCompras />
  )
  const wrapper = shallow( comp )

  it('renders <ListagemCompras />', () => {
    expect(wrapper.find('h2')).toHaveLength(1)
  })
})