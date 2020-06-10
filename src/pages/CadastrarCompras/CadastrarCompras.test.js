import React from 'react'
import { shallow } from 'enzyme'

import CadastrarCompras from './'

describe('PageView <CadastrarCompras />', () => {
  const comp = (
    <CadastrarCompras />
  )
  const wrapper = shallow( comp )

  it('renders <CadastrarCompras />', () => {
    expect(wrapper.find('h2')).toHaveLength(1)
  })
})