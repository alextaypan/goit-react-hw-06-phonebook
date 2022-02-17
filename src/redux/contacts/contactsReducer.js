import { combineReducers } from "redux";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "contacts/add":
      return [...state, payload];
    case "contacts/remove":
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case "contacts/filter":
      return payload;
    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
