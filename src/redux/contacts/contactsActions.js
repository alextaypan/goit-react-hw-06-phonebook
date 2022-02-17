import { nanoid } from "nanoid";

export const addContact = ({ id, name, number }) => ({
  type: "contacts/add",
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

export const removeContact = (id) => ({
  type: "contacts/remove",
  payload: id,
});

export const filterContact = (value) => ({
  type: "contacts/filter",
  payload: value,
});
