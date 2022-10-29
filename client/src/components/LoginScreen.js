import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../reducers/userActions'


const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={submitHandler}>
          <label>Email Address</label>
          <input type='email' placeholder='Enter email' value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input type='password' placeholder='Enter password' value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        <button type='submit'>Sign In</button>
      </form>

          New User?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
    </div>
  )
}

export default LoginScreen
