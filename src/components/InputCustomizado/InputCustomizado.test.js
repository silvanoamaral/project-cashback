import React from 'react'
import { shallow } from 'enzyme'

import InputCustomizado from './'

describe('PageView <InputCustomizado />', () => {
  it('renders <InputCustomizado />', () => {
    const dados = {
      name: 'email',
      error: {},
      message: 'teste'
    }
  
    const wrapper = shallow( <InputCustomizado {...dados} /> )

    expect(wrapper.find('.field')).toHaveLength(1)
  })
})