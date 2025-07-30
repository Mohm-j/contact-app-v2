import { useContacts } from "../context/ContactContext";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Modal from "./Modal";
import Alert from "./Alert";
import SearchBar from "./SearchBar";
import { showMsg, validateForm } from "../utils/helper";
import { addContact, updateContact, deleteAllContacts } from "../services/api";

const Contacts = () => {
  const { state, dispatch } = useContacts();
  const { form, showModal, showEdit, contacts } = state;

  const add = async () => {
    if (!validateForm(form, dispatch)) return;

    try {
      const newContact = await addContact(form);
      dispatch({ type: "ADD_CONTACT", payload: newContact }); 
      dispatch({ type: "RESET_FORM" });
      showMsg(dispatch, "Contact added", "success");
    } catch (error) {
      showMsg(dispatch, "Failed to add contact", "error");
    }
  };

  const update = async () => {
    if (!validateForm(form, dispatch)) return;

    try {
      const updated = await updateContact(state.idEdit, form);
      dispatch({ type: "UPDATE_CONTACT", payload: updated });
      dispatch({ type: "RESET_FORM" });
      showMsg(dispatch, "Contact updated", "success");
    } catch (error) {
      showMsg(dispatch, "Update failed", "error");
    }
  };

  const removeAll = async (confirmed) => {
    if (!contacts.length) {
      showMsg(dispatch, "No contacts to delete", "error");
      return;
    }

    if (!confirmed) {
      dispatch({ type: "TOGGLE_MODAL", payload: true });
      return;
    }

    try {
      await deleteAllContacts();
      dispatch({ type: "REMOVE_ALL_CONTACTS" });
      dispatch({ type: "TOGGLE_MODAL", payload: false });
      showMsg(dispatch, "All contacts deleted", "success");
    } catch (error) {
      showMsg(dispatch, "Failed to delete all", "error");
    }
  };

  return (
    <div className={styles.container}>
      <ContactForm onSubmit={add} isEdit={false} />
      <Alert />

      <div className={styles.head}>
        <div className={styles.headItems}>
          <h2>Contact List</h2>
          <SearchBar />
          <button onClick={() => removeAll()} className={styles.deleteAllBtn}>
            Delete All Contacts
          </button>
        </div>
      </div>

      {showModal && (
        <Modal
          onConfirm={() => removeAll(true)}
          onCancel={() => dispatch({ type: "TOGGLE_MODAL", payload: false })}
          variant="delete"
        />
      )}

      {showEdit && (
        <Modal
          onConfirm={update}
          onCancel={() => {
            dispatch({ type: "SET_SHOW_EDIT", payload: false });
            dispatch({ type: "RESET_FORM" });
          }}
        >
          <h3>Edit Contact</h3>
          <ContactForm isEdit={true} onSubmit={update} />
        </Modal>
      )}

      <ContactList />
    </div>
  );
};

export default Contacts;
