import { useContacts } from "../context/ContactContext";
import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const { state } = useContacts();
  const { contacts, search } = state;

  const filtered = contacts.filter((contact) =>
    Object.values(contact).some((v) =>
      v.toLowerCase().includes(search.toLowerCase())
    )
  );

  if (!filtered.length) {
    return <p className={styles.message}>No Contacts Yet!</p>;
  }

  return (
    <ul className={`${styles.contacts} ${styles.contactsScrollable}`}>
      {filtered.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
