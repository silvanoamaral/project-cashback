import React from 'react'
import { shallow } from 'enzyme'

import MenuLateral from './'

describe('PageView <MenuLateral />', () => {
  const wrapper = shallow( <MenuLateral /> )

  it('renders <MenuLateral />', () => {
    expect(wrapper.find('.menuLateral')).toHaveLength(1)
  })
})