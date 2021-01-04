import PropTypes from 'prop-types';
import s from './SearchForm.module.css';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

class SearchForm extends Component {
    state = {
        imageQuery: '',
    }

    handlQueryChange = event => {
        this.setState({ imageQuery: event.currentTarget.value.toLowerCase() });
    };

    handlSubmit = event => {
        event.preventDefault(); 
        if (this.state.imageQuery.trim() === '') {
            toast.error('enter query');
            return;
        }

        this.props.onSubmit(this.state.imageQuery);
        this.setState({imageQuery: ''});
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
      value={this.state.imageQuery}
      className={s.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
  }
  
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;