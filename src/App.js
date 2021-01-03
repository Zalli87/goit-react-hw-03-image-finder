import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar'

class App extends Component {
  state = {
   query: '',
  }

  handlFormSubmit = query => {
    this.setState({ query });
  }

  
  render() {
  return (
    <div>
      <Searchbar onSubmit={this.handlFormSubmit} />
    <ToastContainer />
    </div>
    );
  }
}

export default App;
