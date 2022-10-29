import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const IndexCount =() => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        axios('api/aggregations/index')
          .then(res => {
            console.log('index',res.data)
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
          <li key={vals.id}>{vals.id}</li>
        ))}
      </div>
    )
  }
  

  export default IndexCount;