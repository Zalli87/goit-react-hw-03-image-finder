import s from './Searchbar.module.css';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

class SearchForm extends Component {
    state = {
        query: '',
    }

    handlQueryChange = event => {
        this.setState({ query: event.currentTarget.value.toLowerCase() });
    };

    handlSubmit = event => {
        event.preventDefault(); 
        if (this.state.query.trim() === '') {
            toast.error('enter query');
            return;
        }

        this.props.onSubmit(this.state.query);
        this.setState({query: ''});
    }

    render() {
        return (
<header className={s.Searchbar}>
  <form onSubmit={this.handlSubmit} className={s.SearchForm}>
    <button type="submit" className={s.SearchFormButton}>
      <span className={s.SearchFormButtonLabel}>Search</span>
    </button>
    <input
      onChange={this.handlQueryChange}
      value={this.state.query}
      className={s.SearchFormInput}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}

export default SearchForm;