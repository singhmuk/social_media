import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const HomeScreen = () => {
  const [username, setUsername] = useState([]);

  useEffect(() => {
    fetch("/api/follows")
      .then((res) => res.json())
      .then((data) => setUsername(data))
      .catch((error) => console.log(error));
  }, []);

  const onDelete = async (_id) => {
    await fetch(`/api/follows/${_id}/follow`, {
      method: "PUT",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsername(
            username.filter((user) => {
              return user._id !== _id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };


  return (
    <div>
      <h1>Home Page</h1>
      {username.map(items=>(
        <li key={items._id}>{items.email} - "followers":{items.followers} - 
        "followings":{items.followings} - 
        <button onClick={onDelete}>X</button></li>
      ))}
      <Link to='/register'>SignUp</Link>
    </div>
  )
}

export default HomeScreen
