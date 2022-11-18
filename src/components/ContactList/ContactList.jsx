import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
  contactsList = () => {
    const objProps = this.props.onContact;
    const arrListCont = objProps.contacts
      .filter(el => el.name.toLowerCase().includes(objProps.filter))
      .map(el => (
        <div key={el.id}>
          <li>
            <span>{el.name}: </span>
            <span>{el.number}</span>
          </li>
          <button
            type="click"
            name={el.id}
            onClick={() => this.props.onClickBtn(el.id)}
          >
            Delete
          </button>
        </div>
      ));
    return arrListCont;
  };

  render() {
    return (
      <>
        <ul>{this.contactsList()}</ul>
      </>
    );
  }
}

ContactList.propTypes = {
  onContact: PropTypes.object.isRequired,
  onClickBtn: PropTypes.func.isRequired,
};

export default ContactList;
