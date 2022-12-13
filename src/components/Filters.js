import '../styles/components/Filters.scss';
function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleSearch = (ev) => {
    props.handleSearch(ev.target.value);
  };

  return (
    <form className="form" htmlFor="search" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        id="search"
        name="search"
        onInput={handleSearch}
        value={props.searchByName}
      />
    </form>
  );
}

export default Filters;
