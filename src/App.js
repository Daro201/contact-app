import React, { Component } from 'react';
import ContactsList from './components/ContactsList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
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

  render() {
    return (
      <div>
        <h1>Contact App</h1>
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
