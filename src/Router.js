import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from './containers/Home'

const Router = () => {
return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
  )
}

export default (Router)
