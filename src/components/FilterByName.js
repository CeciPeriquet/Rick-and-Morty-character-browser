import '../styles/components/FilterByName.scss';
import PropTypes from 'prop-types';
function FilterByName(props) {
  const handleSearch = (ev) => {
    props.handleSearch(ev.target.value);
  };
  return (
    <fieldset className="search-field">
      <label htmlFor="search">Search for your fav character by name</label>
      <input
        className="search-input"
        type="text"
        id="search"
        name="search"
        onInput={handleSearch}
        value={props.searchByName}
      />
    </fieldset>
  );
}

FilterByName.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchByName: PropTypes.string.isRequired,
};

export default FilterByName;
