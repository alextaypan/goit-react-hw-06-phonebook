export const addContact = (contact) => ({
  type: "contacts/add",
  payload: contact,
});

export const removeContact = (id) => ({
  type: "contacts/remove",
  payload: id,
});

export const filterContact = (name) => ({
  type: "contacts/filter",
  payload: name,
});
