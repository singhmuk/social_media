import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './components/HomeScreen'
import Counts from './components/counts'
import Distincts from './components/distincts'
import Projections from './components/projections'
import Aggregations from './components/aggregations'
import IndexCount from './components/indexCount'
const App = () => {
  return (
    <Router>
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/counts' component={Counts} />
          <Route path='/distincts' component={Distincts} />
          <Route path='/projections' component={Projections} />
          <Route path='/aggregations' component={Aggregations} />
          <Route path='/indexCount' component={IndexCount} />
        </Container>
      </main>
    </Router>
  )
}

export default App
