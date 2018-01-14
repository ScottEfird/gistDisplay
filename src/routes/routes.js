import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './app'
import GistsDetailViewRoute from './GistsDetailView'
import GistsDetailListRoute from './GistsDetailList'

export default (
  <Route path={GistsDetailViewRoute.path} component={App}>
    <IndexRoute component={GistsDetailViewRoute.component} />
    <Route path={GistsDetailListRoute.path} component={GistsDetailListRoute.component} />
  </Route>
)