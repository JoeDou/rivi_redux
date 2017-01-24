import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import List from './components/list'
import Candidate from './components/candidate'
import EditForm from './components/editForm'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={List} />
    <Route path="candidate/new" component={EditForm} />
    <Route path="candidate/:id" component={Candidate} />
    <Route path="candidate/:id/edit" component={EditForm} />
  </Route>
)
