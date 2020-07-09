import React from 'react'
import { shallow } from 'enzyme'

import InputSubmit from './'

describe('PageView <InputSubmit />', () => {
  const dados = {
    loading: false,
    label: 'Enviar'
  }

  const wrapper = shallow(<InputSubmit {...dados} />)

  it('renders <InputSubmit loadin={false} />', () => {
    expect(wrapper.find('.btn')).toHaveLength(1)
  })
})
