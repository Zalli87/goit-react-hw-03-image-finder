import { Component } from 'react';
import PropTypes from "prop-types";
import css from './Searchbar.module.css';
import { AiOutlineSearch } from "react-icons/ai";

export class Searchbar extends Component {
   
    state = {
        search: '',
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { onSubmit } = this.props;
        onSubmit({ ...this.state });
        this.reset();
    }

    reset() {
        this.setState({
            search: '',
        })
    }

    render() {
        const { search } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <>
                 <header className={css.searchbar}>
  <form  className={css.searchForm} onSubmit={handleSubmit}>
    <button type="submit" className={css.searchFormButton}>
      <AiOutlineSearch/>
      <span className={css.searchFormButtonLabel}></span>
    </button>

    <input
    onChange={handleChange}
      className={css.searchFormInput}
      name="search"
      value={search}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
            </>
        )
    }
} 

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}