import '../styles/components/Filters.scss';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';
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

export default Filters;
