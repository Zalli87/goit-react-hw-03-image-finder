import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';
import SearchForm from './components/SearchForm/SearchForm'
import SearchInfo from './components/SearchInfo/SearchInfo'

class App extends Component {
  state = {
   imageQuery: '',
  }

  handlFormSubmit = imageQuery => {
    this.setState({ imageQuery });
  }

  
  render() {
  return (
    <div>
      <SearchForm onSubmit={this.handlFormSubmit} />
      <SearchInfo imageQuery={this.state.imageQuery} />
    <ToastContainer />
    </div>
    );
  }
}

export default App;
