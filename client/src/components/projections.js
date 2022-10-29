import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const Projections =() => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        axios('api/aggregations/proj')
          .then(res => {
            console.log('proj',res.data)
            setUsers(res.data);
          })
          .catch(error => {
            console.log(error);
          })
      }, []);
  
    return(
      <div>
        <Link to='/'><button>Home</button></Link>
        {users.map(vals=>(
          <li key={vals._id}>{vals.id}</li>
        ))}
      </div>
    )
  }
  

  export default Projections;