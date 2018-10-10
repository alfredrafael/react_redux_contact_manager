import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from "../actions/types";

// each reducer has its own initial state
// to access the contacts within this state,
// with redux we need to define action types
const initialState = {
  contacts: [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      phone: "555-555-5555"
    },
    {
      id: 2,
      name: "Karen Williams",
      email: "karen@gmail.com",
      phone: "444-444-4444"
    },
    {
      id: 3,
      name: "Henry Johnson",
      email: "henry@gmail.com",
      phone: "333-333-333"
    }
  ]
};

// just like inthe context API,evaluate actions by their type
export default function(state = initialState, action) {
  switch (action.type) {
    // with hardcoded data:
    case GET_CONTACTS:
      // how do we get this into our contacts component?
      // with connect from react-redux
      return {
        ...state
      };
    case ADD_CONTACT:
      // action.payload contains whole new contact
      const newContact = action.payload;
      return {
        ...state,
        contacts: [newContact, ...state.contacts]
      };
    case DELETE_CONTACT:
      // action.payload contains id, filter it out from the contacts array
      const contactIdToDelete = action.payload;
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== contactIdToDelete
        )
      };
    default:
      return state;
  }
}
