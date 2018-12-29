import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import App from '../App.js'

import About from '../About.js'
import MainMenu from '../components/Menu.js'
import FCCHeader from '../components/FCCHeader.js'

let wrapped

beforeEach(() => {
  wrapped = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
})

it('shows About page initially', () => {
  expect(wrapped.find(About)).toHaveLength(1)
})

it('renders MainMenu', () => {
  expect(wrapped.find(MainMenu).length).toEqual(1)
})

it('renders FCCHeader', () => {
  expect(wrapped.find(FCCHeader).length).toEqual(1)
})
