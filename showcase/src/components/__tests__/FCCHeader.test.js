import React from 'react'
import { shallow } from 'enzyme'

import { Header, Divider } from 'semantic-ui-react'

import FCCHeader from '../FCCHeader.js'

it('shows a semantic-ui Header', () => {
  const wrapped = shallow(<FCCHeader />)

  expect(wrapped.find(Header).length).toEqual(1)
})

it('shows a semantic-ui Divider', () => {
  const wrapped = shallow(<FCCHeader />)

  expect(wrapped.find(Divider).length).toEqual(1)
})
