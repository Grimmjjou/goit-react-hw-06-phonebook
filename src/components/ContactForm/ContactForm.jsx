import React from 'react';
import styles from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getContacts } from 'redux/selector';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    formSubmit({ name, number, id: nanoid() });
    setName('');
    setNumber('');
  };

  const formSubmit = newContact => {
    const isExist = contacts.find(
      cont =>
        cont.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
    );
    if (isExist) {
      return alert(`${newContact.name} is already in contacts`);
    } else if (
      (newContact.name.trim() === '', newContact.number.trim() === '')
    ) {
      return alert('Заповніть всі поля');
    }
    dispatch(addContact(newContact));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
