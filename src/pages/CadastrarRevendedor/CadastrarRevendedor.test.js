import React from 'react'
import { shallow } from 'enzyme'

import CadastrarRevendedor from './'

describe('PageView <CadastrarRevendedor />', () => {
  const comp = (
    <CadastrarRevendedor />
  )
  const wrapper = shallow( comp )

  it('renders <CadastrarRevendedor />', () => {
    expect(wrapper.find('div')).toHaveLength(1)
  })
})