import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './components/HomeScreen'
import OrAnd from './components/orAnd'
import And from './components/andConditions'
import OrCondi from './components/orConditions'
import Orcon from './components/orCon'
import Levels from './components/levels'
const App = () => {
  return (
    <Router>
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/orAnd' component={OrAnd} />
          <Route path='/andConditions' component={And} />
          <Route path='/orConditions' component={OrCondi} />
          <Route path='/orCon' component={Orcon} />
          <Route path='/levels' component={Levels} />
        </Container>
      </main>
    </Router>
  )
}

export default App
