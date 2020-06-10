import React from 'react'
import { shallow } from 'enzyme'

import Comprar from './'

describe('PageView <Comprar />', () => {
  const comp = (
    <Comprar />
  )
  const wrapper = shallow( comp )

  it('renders <Comprar />', () => {
    expect(wrapper.find('ul')).toHaveLength(1)
  })
})