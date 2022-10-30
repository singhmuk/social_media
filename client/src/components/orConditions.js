import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'


const Or =() => {
    const [or, setOr] = useState([]);
  
    useEffect(() => {
        axios('api/conditions/or')
          .then(res => {
            console.log('or',res.data)
            setOr(res.data);
          })
          .catch(error => {
            console.log(error);
          })
      }, []);
  
    return(
      <div>
        <Link to='/'><button>Home</button></Link>
        {or.map(vals=>(
          <li key={vals._id}>{vals._id}</li>
        ))}
      </div>
    )
  }
  

  export default Or;