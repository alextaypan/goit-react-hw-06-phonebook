export const addContact = (contact) => ({
  type: "contacts/add",
  payload: contact,
});

export const removeContact = (id) => ({
  type: "contacts/remove",
  payload: id,
});

export const filterContact = (value) => ({
  type: "contacts/filter",
  payload: value,
});
