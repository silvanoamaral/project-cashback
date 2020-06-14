import React from 'react'
import { shallow } from 'enzyme'

import MessageAlert from './'

describe('PageView <MessageAlert />', () => {
  const initialProps = {
    error: false,
    text: 'Mensagem de sucesso.'
  }
  const wrapper = shallow( <MessageAlert {...initialProps} /> )

  it('renders <MessageAlert />', () => {
    expect(wrapper.find('.message')).toHaveLength(1)
  })
})