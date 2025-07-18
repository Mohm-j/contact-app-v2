import { useContacts } from "../context/ContactContext";
import styles from "./ContactItem.module.css";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { showMsg } from "../utils/helper";

const ContactItem = ({ contact }) => {
  const { dispatch } = useContacts();
  const { name, lastName, email, phone, id } = contact;

  const handleEdit = () => {
    dispatch({ type: "SET_EDIT_FORM", payload: contact });
  };

  const handleDelete = () => {
    dispatch({ type: "REMOVE_CONTACT", payload: id });
    showMsg(dispatch, "Contact deleted", "error"); 
  };

  return (
    <li className={styles.item}>
      <p>
        <span>
          <CgProfile />
        </span>
        {name} {lastName}
      </p>
      <p>
        <span>
          <HiOutlineMail />
        </span>
        {email}
      </p>
      <p>
        <span>
          <FiPhone />
        </span>
        {phone}
      </p>
      <div className={styles.itemActions}>
        <button onClick={handleEdit}>
          <span>
            <FaRegEdit />
          </span>
        </button>
        <button onClick={handleDelete}>
          <span>
            <FaRegTrashCan />
          </span>
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
