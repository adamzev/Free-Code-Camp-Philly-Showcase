import React from 'react'
import { render } from 'enzyme'

import ProjectCardList from '../ProjectCardList.js'

let wrapped

beforeEach(() => {
  wrapped = render(
    <ProjectCardList
      items={[
        {
          header: 'project 1',
          href: 'www.google.com',
          description: 'a site to search things',
        },
        {
          header: 'project 2',
          href: 'www.yahoo.com',
          description: 'a site to search things',
        },
      ]}
    />
  )
})

it('renders 2 project cards', () => {
  expect(wrapped.find('.ui.card').length).toEqual(2)
})

it('shows project titles on cards', () => {
  expect(wrapped.find('.header').text()).toContain('project 1')
  expect(wrapped.find('.header').text()).toContain('project 2')
})
