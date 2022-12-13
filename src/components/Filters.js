import '../styles/components/Filters.scss';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
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
    </form>
  );
}

export default Filters;
