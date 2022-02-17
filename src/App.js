import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./Components/ContactForm/ContactForm";
import { Section } from "./Components/Section/Section";
import { ContactList } from "./Components/ContactList/ContactList";
import { Filter } from "./Components/Filter/Filter";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) ?? initialContacts
  );
  const [filter, setFilter] = useState("");

  const addContact = ({ name, number }) => {
    const findName = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }
    setContacts((contacts) => [...contacts, { id: nanoid(), name, number }]);
  };

  const getContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={handleFilter} />
        <ContactList contacts={getContacts()} onRemoveContact={removeContact} />
      </Section>
    </>
  );
};

export default App;
