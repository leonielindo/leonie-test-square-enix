import React, { Component } from 'react';
import '../styles/css/index.css';
import HighContrastButton from '../components/highContrastButton';
import ContactList from '../components/contactList';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="header" role="banner">
          <div className="row">
            <div className="col-9">
              <h1 role="heading">Square Enix Front End Test</h1>
            </div>
            <div className="col-3 go-right">
              <HighContrastButton />
            </div>
          </div>
        </header>

        <main role="main" className="container">
          <section role="reigon">
            <div className="row">
              <div className="col-9">
                <h2 role="heading">Contact list</h2>
                <ContactList />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
