import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BlockItem, BtnDelete, SpanName } from './ContactListStyled';

class ContactList extends Component {
  contactsList = () => {
    const objProps = this.props.onContact;
    const arrListCont = objProps.contacts
      .filter(el => el.name.toLowerCase().includes(objProps.filter))
      .map(el => (
        <BlockItem key={el.id}>
          <li>
            <SpanName>{el.name}: </SpanName>
            <SpanName>{el.number}</SpanName>
          </li>
          <BtnDelete
            type="click"
            name={el.id}
            onClick={() => this.props.onClickBtn(el.id)}
          >
            Delete
          </BtnDelete>
        </BlockItem>
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
