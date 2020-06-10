import React from 'react'
import { shallow } from 'enzyme'

import Login from './'

describe('PageView <Login />', () => {
  const comp = (
    <Login />
  )
  const wrapper = shallow( comp )

  it('renders <Login />', () => {
    expect(wrapper.find('div')).toHaveLength(1)
  })
})