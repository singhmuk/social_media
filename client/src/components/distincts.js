import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const Disticts =() => {
    const [distict, setDistict] = useState([]);
  
    useEffect(() => {
        axios('api/aggregations/distincts')
          .then(res => {
            setDistict(res.data);
          })
          .catch(error => {
            console.log(error);
          })
      }, []);
  
    return(
      <div>
        <Link to='/'><button>Home</button></Link>
        {distict.map(vals=>(
          <li key={vals._id}>{vals}</li>
        ))}
      </div>
    )
  }
  

  export default Disticts;