import React from 'react'
import { shallow } from 'enzyme'

import InputCustomizado from './'

describe('PageView <InputCustomizado />', () => {
  const dados = {
    name: 'email',
    error: {}
  }
  const comp = (
    <InputCustomizado {...dados} />
  )
  const wrapper = shallow( comp )

  it('renders <InputCustomizado />', () => {
    expect(wrapper.find('.field')).toHaveLength(1)
  })
})