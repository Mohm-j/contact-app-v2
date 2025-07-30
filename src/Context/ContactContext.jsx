import { createContext, useReducer, useEffect, useContext } from "react";
import { getContacts } from "../services/api";

const initialState = {
  contacts: [],
  form: { name: "", lastName: "", email: "", phone: "" },
  idEdit: null,
  search: "",
  showSearch: false,
  showModal: false,
  showEdit: false,
  msg: "",
  msgType: "",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_FORM":
      return {
        ...state,
        form: { ...state.form, [action.payload.name]: action.payload.value },
      };

    case "RESET_FORM":
      return {
        ...state,
        form: initialState.form,
        idEdit: null,
      };

    case "SET_MSG":
      return {
        ...state,
        msg: action.payload.msg,
        msgType: action.payload.type,
      };

    case "CLEAR_MSG":
      return { ...state, msg: "", msgType: "" };

    case "SET_SEARCH":
      return { ...state, search: action.payload };

    case "SET_SHOW_SEARCH":
      return { ...state, showSearch: action.payload };

    case "TOGGLE_MODAL":
      return { ...state, showModal: action.payload };

    case "SET_SHOW_EDIT":
      return { ...state, showEdit: action.payload };

    case "LOAD_CONTACTS":
      return { ...state, contacts: action.payload };

    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === state.idEdit ? action.payload : contact
        ),
        idEdit: null,
        showEdit: false,
      };

    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };

    case "REMOVE_ALL_CONTACTS":
      return { ...state, contacts: [] };

    case "SET_EDIT_FORM":
      return {
        ...state,
        form: { ...action.payload },
        idEdit: action.payload.id,
        showEdit: true,
      };

    default:
      return state;
  }
};

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contacts = await getContacts();
        dispatch({ type: "LOAD_CONTACTS", payload: contacts });
      } catch (error) {
        console.error("Failed to load contacts", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => {
  const contacts = useContext(ContactContext);
  return contacts;
};
