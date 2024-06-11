// src/components/ContactList.jsx
import React from "react";
import axios from "axios";
const ContactList = ({ contacts, fetchContacts, setCurrentContact }) => {
  // Manejar la eliminación de un contacto
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error("Error deleting contact", error);
    }
  };

  return (
    <div>
      <h2>Contact List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id ? contact.id : `temp-${contact.name}`}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => setCurrentContact(contact)}>Edit</button>
                <button onClick={() => handleDelete(contact._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ContactList;
