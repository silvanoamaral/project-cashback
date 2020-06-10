import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount, shallow } from 'enzyme'

import Routes from '../../routes'
import NotFound from '../NotFound'
import App from './'

describe('PageView <App />', () => {
  it('NotFound router', () => {
    const component = mount(<MemoryRouter initialEntries = {['/error']} >
        <Routes/>
      </MemoryRouter>
    )
    expect(component.find(NotFound)).toHaveLength(1)
  })

  const comp = (
    <App />
  )
  const wrapper = shallow( comp )

  it('renders <App />', () => {
    expect(wrapper.find('.container')).toHaveLength(1)
  })
})