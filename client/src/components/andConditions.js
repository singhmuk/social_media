import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const And =() => {
    const [and, setAnd] = useState([]);
  
    useEffect(() => {
        axios('api/conditions/and')
          .then(res => {
            console.log('res', res.data);
            setAnd(res.data);
          })
          .catch(error => {
            console.log(error);
          })
      }, []);
  
    return(
      <div>
        <Link to='/'><button>Home</button></Link>
        {/* {and.map(vals=>(
          <li key={vals._id}>{vals}</li>
        ))} */}
      </div>
    )
  }
  

  export default And;