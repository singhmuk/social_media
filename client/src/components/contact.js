import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ContactItem from './contactItem'
import ContactForm from './contactForm'
import { getContacts } from '../actions/contact'


const Contact = () => {
  const contact = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const { contacts } = contact;

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch])

  return (
    <>
      <div className="grid-2"><ContactForm /><div>
          <>
            {contacts.map(contact => (
              <ContactItem key={contact._id} contact={contact} />
            ))}
          </>
        </div>
      </div>
    </>
  )
}


export default Contact
