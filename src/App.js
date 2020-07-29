import React from 'react'
import Router from './Router'
import favicon from '../public/favicon.ico'
import { MainContainer } from './styledComponents/StyledContainers'

const App = () => {
  return (
    <MainContainer>
      <Router />
    </MainContainer>
  )
}

export default App
