import React from 'react'
import { shallow } from 'enzyme'

import UserCard from '../UserCard.js'

const userData = {
  image: 'image.jpg',
  username: 'Joe',
  tagline: 'I am Joe!',
  bio: 'No really, I am Joe!',
  projects: [{ p: 1 }, { p: 2 }],
}

let wrapped

beforeEach(() => {
  wrapped = shallow(<UserCard {...userData} />)
})

it('shows username', () => {
  expect(wrapped.render().text()).toContain('Joe')
})

it('shows tagline', () => {
  expect(wrapped.render().text()).toContain('I am Joe!')
})

it('shows bio', () => {
  expect(wrapped.render().text()).toContain('I am Joe!')
})

it('shows number of projects', () => {
  expect(wrapped.render().text()).toContain('2 projects')
})
