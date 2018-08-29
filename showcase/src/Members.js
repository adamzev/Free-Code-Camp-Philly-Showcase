import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MemberList from './components/MemberList'
import SingleMember from './components/SingleMember'

const Members = () => (
  <Switch>
    <Route exact path="/members" component={MemberList} />
    <Route path="/members/:member" component={SingleMember} />
  </Switch>
)

export default Members
