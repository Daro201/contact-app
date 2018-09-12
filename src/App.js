import React, { Component } from 'react';
import ContactsList from './components/ContactsList';
import ContactDetails from './components/ContactDetails';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      selectedContact: {},
    };
  }

  componentDidMount() {
    // get data from server
    fetch('http://localhost:3000/contacts')
      .then(data => data.json())
      .then(contacts => {
        this.setState({ contacts });
      });
  }

  handleClickContact(selectedContact) {
    this.setState({ selectedContact });
  }

  render() {
    return (
      <div>
        <h1>Contact App</h1>
        <ContactsList contacts={this.state.contacts} clickContactHandler={this.handleClickContact.bind(this)} />
        <ContactDetails contact={this.state.selectedContact} />
      </div>
    );
  }
}

export default App;
