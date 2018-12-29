import React from 'react'
import { shallow } from 'enzyme'
import data from '../../data/dataIndex.js'

import MemberList from '../MemberList.js'
import UserCard from '../UserCard.js'

const numberOfUsers = data.allUsers().length

it('shows a UserCard', () => {
  const wrapped = shallow(<MemberList />)

  expect(wrapped.find(UserCard).exists()).toBe(true)
  expect(wrapped.find(UserCard).length).toEqual(numberOfUsers)
})
