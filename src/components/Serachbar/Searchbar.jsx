import css from './Searchbar.module.css'

const Searchbar = () => {

    return (<header className={css.searchbar}>
    <form className={css.searchbar_form}>
      <button type="submit" className={css.searchbar_form_button}>
        <span className={css.searchbar_form_button_label}>Search</span>
      </button>
  
      <input
        className={css.searchbar_form_input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>)
}

export default Searchbar