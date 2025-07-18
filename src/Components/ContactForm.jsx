import { useContacts } from "../context/ContactContext";
import styles from "./ContactForm.module.css";

const fields = ["name", "lastName", "email", "phone"];

const ContactForm = ({ isEdit, onSubmit }) => {
  const { state, dispatch } = useContacts();
  const { form } = state;

  const handleChange = (e) => {
    dispatch({
      type: "SET_FORM",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <div className={styles.form}>
      {fields.map((field) => (
        <input
          key={field}
          type={
            field === "email" ? "email" : field === "phone" ? "number" : "text"
          }
          name={field}
          placeholder={`${field[0].toUpperCase() + field.slice(1)}...`}
          value={form[field]}
          onChange={handleChange}
          className={styles.input}
        />
      ))}

      {!isEdit && <button onClick={onSubmit}>Add Contact</button>}
    </div>
  );
};

export default ContactForm;
