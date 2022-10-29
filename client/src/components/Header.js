import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/userActions'
import "../index.css"

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
      <div className="topnav">
          {userInfo ? (
            <div>
            <p className="fontColor">{userInfo.name}</p>
              <button onClick={logoutHandler}>SignOut</button>
              </div>
          ) : (
            <div className="fontColor" to='/login'>SignIn</div>
          )}
          {userInfo && userInfo.isAdmin && (
            <p className="fontColor">Admin</p>
          )}
      </div>
  )
}

export default Header
