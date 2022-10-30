import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux'

import ContactForm from './ContactForm'
import { getContacts } from '../actions/contact'
import { setCurrent, deleteContact } from '../actions/contact'


const Contact = (props) => {
  const contact = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const { contacts } = contact;

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch])

  return (
    <>
      <ContactForm />
        {contacts.map(contact => (
          <div style={{backgroundColor:'pink'}} key={connect._id}>
          <h3>{contact.name}: </h3>
              {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
          
            <p>
              <button onClick={() => props.setCurrent(contact)}>Edit</button>
              <button onClick={() => props.deleteContact(contact._id)}>Delete</button>
            </p>
          </div>
        ))}
    </>
  )
}


export default connect(null, { setCurrent, deleteContact })(Contact)
