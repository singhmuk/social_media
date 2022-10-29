import React, {useState, useEffect} from "react";
import axios from "axios";


const ElementMatch = () => {
const [filteredData, setFilteredData] = useState([]);

useEffect(() => {
    axios('/api/contacts/elMa')
    .then(res => {
        console.log('res',res.data)
        setFilteredData(res.data);
    })
    .catch(error => {
        console.log(error);
    })
}, []);
  
return (
    <div>
    {filteredData.map((items) => (
        <li key={items._id}>{items.title}</li>
    ))}
    </div>
)
}

export default ElementMatch;
  