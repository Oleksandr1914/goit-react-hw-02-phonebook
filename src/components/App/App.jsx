import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container } from './AppStyled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onInputFilter = data => {
    this.setState({
      filter: data.filter,
    });
  };

  onSubmit = data => {
    this.setState({
      contacts: data,
    });
  };

  onClickDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(el => id !== el.id),
    });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.onSubmit}
          phoneContacts={this.state.contacts}
        />
        <Filter onFilter={this.onInputFilter} />
        <h2>Contacts</h2>
        <ContactList onContact={this.state} onClickBtn={this.onClickDelete} />
      </Container>
    );
  }
}

export default App;
