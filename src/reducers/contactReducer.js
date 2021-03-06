import {
  GET_CONTACTS,
  GET_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT
} from "../actions/types";

// each reducer has its own initial state
// to access the contacts within this state,
// with redux we need to define action types
const initialState = {
  contacts: [
    //we'llbe getting the data from json placeholder api
  ],
  // this partof the current state will represent the current contact being "viewed",
  // useful for a "details" page or in this case, the edit page
  contact: {}
};

// just like inthe context API,evaluate actions by their type
export default function(state = initialState, action) {
  switch (action.type) {
    // with real API call from json placeholder:
    case GET_CONTACTS:
      // action.payload contains the contacts array resulting from
      // the get request done with axios to the json placeholder api
      return {
        ...state,
        contacts: action.payload
      };
    case GET_CONTACT:
      // action.payload contains the contacts array resulting from
      // the get request done with axios to the json placeholder api
      return {
        ...state,
        contact: action.payload
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
