import React, { Component , Fragment } from 'react';
import InputArea from './components/InputArea';
import DisplayMsg from './components/DisplayMsg';
import ContactsList from './components/ContactsList'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {

  render() {
    
    return (
      <Fragment>
        <div className="column"  id="style-4">
          <ContactsList/>
        </div>
        <div className="column">
          <DisplayMsg />
        </div>
      </Fragment>

    )
  }
}
