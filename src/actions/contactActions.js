// action creator for the contacts resource
// implementations themselves are contained in the resource's reducer

import {
  GET_CONTACTS,
  GET_CONTACT,
  DELETE_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT
} from "./types";
import axios from "axios";

// make the get request to json placeholder api
// redux thunk allows us to do this
export const getContacts = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  // make the request, get a response and put it as payload for getContacts()
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const getContact = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  // make the request, get a response and put it as payload for getContact()
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (e) {
    // still delete from the DOM even though the API returns a 404
    // because IDs beyond 10 don't exist in the server side ..
    // (json placeholder's internal details)
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  }
};

export const addContact = contact => async dispatch => {
  await axios.post("https://jsonplaceholder.typicode.com/users/", contact);
  dispatch({
    type: ADD_CONTACT,
    payload: contact
  });
};
