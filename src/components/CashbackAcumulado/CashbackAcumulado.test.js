import React from 'react'
import { shallow } from 'enzyme'

import CashbackAcumulado from './'

describe('<CashbackAcumulado />', () => {

  const comp = (
    <CashbackAcumulado />
  )
  const wrapper = shallow( comp )

  it('renders <CashbackAcumulado />', () => {
    expect(wrapper.find('.cashback')).toHaveLength(1)
  })
})