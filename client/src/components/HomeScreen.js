import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";


const HomeScreen = () => {
  const [username, setUsername] = useState([]);

  return (
    <div>
      <h1>Home Page</h1>
      <div className="w3-show-inline-block">
        <div className="w3-bar">
          <Link to='/counts'><button>Counts</button></Link>
          <Link to='/distincts'><button>Distincts</button></Link>
          <Link to='/projections'><button>Projections</button></Link>
          <Link to='/aggregations'><button>Aggregations</button></Link>
          <Link to='/indexCount'><button>IndexCount</button></Link>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
