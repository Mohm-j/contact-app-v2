import axios from "axios";

const API_URL = "http://localhost:3001/contacts";

export const getContacts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addContact = async (contact) => {
  const res = await axios.post(API_URL, contact);
  return res.data;
};

export const updateContact = async (id, updatedData) => {
  const res = await axios.put(`${API_URL}/${id}`, updatedData);
  return res.data;
};

export const deleteContact = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const deleteAllContacts = async () => {
  const contacts = await getContacts();
  await Promise.all(contacts.map((contact) => deleteContact(contact.id)));
};
