import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Router from './Router'
import favicon from '../public/favicon.ico'
import { MainContainer } from './styledComponents/StyledContainers'

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer>
        <Router />
      </MainContainer>
    </Provider>
  )
}

export default App
