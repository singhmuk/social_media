import React, {useState, useEffect} from 'react';
import axios from "axios";


const App = () => {
  const [count, setCounts] = useState([]);
  const [isClick, setIsclick] = useState(false);

  useEffect(() => {
    onIncre();
}, []);

const handleClick = () => {
  setIsclick(!isClick);
  console.log('isClick',isClick)
}

const onIncre = () => {
  if(isClick){
    axios('/api/increase')
    .then(res => {
        setCounts([res.data.counts]);
    })
    .catch(error => {
        console.log(error);
    })
  }else{
    axios('/api/increase/decre')
    .then(res => {
        setCounts([res.data.counts]);
    })
    .catch(error => {
        console.log(error);
    })
  }
}

  return (
    <div>
      {count}<br/>
      <button onClick={onIncre}>counts</button>
      <button onClick={handleClick}>isCheck</button>
    </div>
  )
}

export default App;
