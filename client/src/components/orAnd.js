import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const Counts =() => {
    const [orAnd, setOrand] = useState([]);
  
    useEffect(() => {
        axios('api/conditions/orAnd')
          .then(res => {
            console.log('setOrand',res.data);
            setOrand(res.data);
          })
          .catch(error => {
            console.log(error);
          })
      }, []);
  
    return(
      <div>
        <Link to='/'><button>Home</button></Link>
        {orAnd.map(vals=>(
          <li key={vals._id}>{vals.title}</li>
        ))}
      </div>
    )
  }
  

  export default Counts;