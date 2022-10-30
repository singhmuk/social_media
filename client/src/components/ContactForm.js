import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addContact, clearCurrent, updateContact  } from '../actions/contact'


const ContactForm = ({ addContact, clearCurrent, updateContact, current }) => {
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    }
    else {
      setContact({name: '', type: ''})
    }
  }, [current]);

  
  const [contact, setContact] = useState({name: '', type: ''});
  const {  name, type } = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault();
    if (current !== null) {
      updateContact(contact);
      }
      else {
        addContact(contact);
    }

    clearCurrent();
    setContact({name: '', type: ''});
  }

  return (
    <>
      <form onSubmit={e => onSubmit(e)}>
        <h2>{current ? 'Edit Contact' : 'Add Contact'}</h2>

        <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} />

        <h5>Contact Type</h5>
        <input type="radio" place="type" name="type" value="personal" checked={type === "personal"} onChange={e => onChange(e)} />Personal &nbsp;
        <input type="radio" place="type" name="type" value="professional" checked={type === "professional"} onChange={e => onChange(e)} />Professional

        <input type="submit" value={current ? "Update Contact" : "Add Contact"} />
        <br/>
        {current && <button onClick={() => clearCurrent()}>Clear</button>}
      </form>
    </>
  )
}

const mapStateToProps = state => ({
  current: state.contact.current
})


export default connect(mapStateToProps, { addContact, updateContact, clearCurrent })(ContactForm)
