import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'


const Aggregations =() => {
    const [aggre, setAggre] = useState([]);
  
    useEffect(() => {
        axios('api/aggregations/agg')
          .then(res => {
            console.log('agg',res.data)
            setAggre(res.data);
          })
          .catch(error => {
            console.log(error);
          })
      }, []);
  
    return(
      <div>
        <Link to='/'><button>Home</button></Link>
        {aggre.map(vals=>(
          <li key={vals._id}>{vals._id}</li>
        ))}
      </div>
    )
  }
  

  export default Aggregations;