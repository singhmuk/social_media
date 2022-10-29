import React from 'react'
import { connect } from 'react-redux'
import { setCurrent, deleteContact } from '../actions/contact'


const ContactItem = ({ contact,
  setCurrent,
  deleteContact
}) => {

  const { _id, name, email, phone, messages, nameHistory, testScore } = contact;

  return (
    <>
      <div className="card bg-light">
        <h3>{name}</h3>
        <ul>
          <li>email: {email}</li>
          <li>phone: {phone}</li>
          <li>messages: {messages}</li>
          <li>nameHistory: {nameHistory}</li>
          <li>testScore: {testScore}</li>
          <p>
            <button onClick={() => setCurrent(contact)}>Edit</button>
            <button onClick={() => deleteContact(_id)}>Delete</button>
          </p>
        </ul>
      </div>
    </>
  )
}

export default connect(null, { setCurrent, deleteContact })(ContactItem)
