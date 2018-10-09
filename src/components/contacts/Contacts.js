import React, { Component } from "react";
import Contact from "./Contact";
// to connect react to redux (pass contacts from reducer to this component)
import { connect } from "react-redux";
/*// we'll use this action type inside the mapDispatchToProps method
import { GET_CONTACTS } from "../../actions/types";
*/
// or this, using the action creator instead of importing the action type directly
import { getContacts } from "../../actions/contactActions";
// we need proptypes because when we get anything from the redux state,
// it's called as a prop (actions, etc.).
import PropTypes from "prop-types";

class Contacts extends Component {
  // we'll get the contacts on the did mount lifecycle method
  componentDidMount() {
    // when we do this, the contacts array coming from redux will
    // get put into the props of this component
    this.props.getContacts();
  }

  render() {
    // const { contacts } = this.state; this doesn't work anymore because the contacts array is no longer hardcoded in the component
    // pull the contacts from the props
    // (at this point, the contacts array from redux state
    // should have been mapped to the component props)
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

// state.contact : access to the reducer; but the contacts array is within it
// contacts is our local component property
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

/*
// to fire off an action
// but actually, this is more commonly defined in a separate file
// "contactActions.js" for actions involving the contacts resource
const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch({ type: GET_CONTACTS })
});

// to use connect, we don't export the component directly...
// the params:
//  -anything we need to map from the redux state to props in the component
//  -anything we want to dispatch
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
*/

// USING THE ACTION CREATOR FILE:
export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
