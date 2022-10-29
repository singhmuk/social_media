import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const Counts =() => {
    const [counts, setCounts] = useState([]);
  
    useEffect(() => {
        axios('api/aggregations')
          .then(res => {
            setCounts(res.data);
          })
          .catch(error => {
            console.log(error);
          })
      }, []);
  
    return(
      <div>
        <Link to='/'><button>Home</button></Link>
        {counts.map(vals=>(
          <li key={vals._id}>{vals.title}</li>
        ))}
      </div>
    )
  }
  

  export default Counts;