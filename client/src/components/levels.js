import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const Levels =() => {
    const [orcon, setOrcon] = useState([]);
  
    useEffect(() => {
        axios('api/conditions/level')
          .then(res => {
            console.log('orCon',res.data)
            setOrcon(res.data);
          })
          .catch(error => {
            console.log(error);
          })
      }, []);
  
    return(
      <div>
        <Link to='/'><button>Home</button></Link>
        {orcon.map(vals=>(
          <li key={vals._id}>{vals.qty}</li>
        ))}
      </div>
    )
  }
  

  export default Levels;