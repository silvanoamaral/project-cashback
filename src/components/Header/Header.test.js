import React from 'react'
import { shallow } from 'enzyme'

import Header from './'

describe('PageView <Header />', () => {
  const comp = (
    <Header />
  )
  const wrapper = shallow(comp)

  it('renders <Header />', () => {
    expect(wrapper.find('header')).toHaveLength(1)
  })
})
