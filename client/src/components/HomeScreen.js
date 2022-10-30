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
        <Link to='/orConditions'><button>or</button></Link>
          <Link to='/orCon'><button>orCon</button></Link>
          <Link to='/andConditions'><button>and</button></Link>
          <Link to='/orAnd'><button>orAnd</button></Link>
          <Link to='/levels'><button>Levels</button></Link>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
