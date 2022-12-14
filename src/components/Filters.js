import '../styles/components/Filters.scss';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';
import PropTypes from 'prop-types';
function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleReset = (ev) => {
    ev.preventDefault();
    props.handleReset();
  };

  return (
    <form className="form" htmlFor="search" onSubmit={handleSubmit}>
      <FilterByName
        handleSearch={props.handleSearch}
        searchByName={props.searchByName}
      />
      <FilterBySpecies
        handleFilterSpecies={props.handleFilterSpecies}
        filterBySpecies={props.filterBySpecies}
      />
      <FilterByStatus
        filterByStatus={props.filterByStatus}
        handleFilterStatus={props.handleFilterStatus}
      />
      <button className="reset-btn" onClick={handleReset}>
        squanch to reset
      </button>
    </form>
  );
}
Filters.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchByName: PropTypes.string.isRequired,
  handleFilterSpecies: PropTypes.func.isRequired,
  filterBySpecies: PropTypes.array.isRequired,
  handleFilterStatus: PropTypes.func.isRequired,
  filterByStatus: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Filters;
