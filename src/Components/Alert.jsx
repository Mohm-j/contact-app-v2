import { useContacts } from "../context/ContactContext";

import styles from "./Alert.module.css";

const Alert = () => {
  const { state } = useContacts();
  const { msg, msgType } = state;

  if (!msg) return null;

  const typeClass =
    msgType === "success" ? styles.alertSuccess : styles.alertError;

  return <div className={`${styles.alert} ${typeClass}`}>{msg}</div>;
};

export default Alert;
