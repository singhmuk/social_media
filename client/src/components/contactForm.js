import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { addContact, clearCurrent, updateContact } from '../actions/contact'


const ContactForm = ({ addContact, clearCurrent, updateContact, current }) => {

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    }
    else {
      setContact({ name: '', email: '', phone: '', messages: '',  nameHistory: '',  
        testScore: ''})
    }
  }, [current]);

  const [contact, setContact] = useState({ name: '', email: '', phone: '', messages: '',
    nameHistory: '',  testScore: ''});

  const { name, email, phone, messages, nameHistory, testScore } = contact;

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

    setContact({ name: '', email: '', phone: '', messages: '', nameHistory: '', testScore: ''
    });
  }

  return (
    <>
      <form onSubmit={e => onSubmit(e)}>
        <h2>{current ? 'Edit Contact' : 'Add Contact'}</h2>
          <div class="w3-show-inline-block">
            <Link to="/ElementMatch"><button>EleMatch</button></Link>
            <Link to=""><button>Button</button></Link>
            <Link to=""><button>Button</button></Link>
          </div>

        <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} />
        <input type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)} />
        <input type="text" placeholder="Phone" name="phone" value={phone} onChange={e => onChange(e)} />
        <input type="text" placeholder="messages" name="messages" value={messages} onChange={e => onChange(e)} />
        <input type="text" placeholder="nameHistory" name="nameHistory" value={nameHistory} onChange={e => onChange(e)} />
        <input type="text" placeholder="testScore" name="testScore" value={testScore} onChange={e => onChange(e)} />

        <div>
          <input type="submit" value={current ? "Update Contact" : "Add Contact"} />
        </div>

        {
          current &&
          <div>
            <button onClick={() => clearCurrent()}>Clear</button>
          </div>
        }
      </form>
    </>
  )
}

const mapStateToProps = state => ({
  current: state.contact.current
})


export default connect(mapStateToProps, { addContact, updateContact, clearCurrent })(ContactForm)
