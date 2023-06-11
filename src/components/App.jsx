import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './Contacts/ContactList';
import { Filter } from './Filter/Filter';

export default function App() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
