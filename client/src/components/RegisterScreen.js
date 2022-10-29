import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../reducers/userActions'


const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
          <label>Name</label>
          <input type='name' placeholder='Enter name' value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email Address</label>
          <input type='email' placeholder='Enter email' value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input type='password' placeholder='Enter password' value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input type='password' placeholder='Confirm password' value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

        <button type='submit'>Register</button>
      </form>

          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
    </div>
  )
}

export default RegisterScreen
