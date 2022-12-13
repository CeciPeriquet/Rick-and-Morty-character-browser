function FilterByStatus(props) {
  const handleChange = (ev) => {
    props.handleFilterStatus(ev.target.value);
  };
  return (
    <fieldset className="status">
      <label className="status-label " htmlFor="status">
        Status
      </label>
      <select
        className="status-select"
        name="status"
        id="status"
        onChange={handleChange}
        value={props.filterByStatus}
      >
        <option value="All" disabled>
          Choose an option
        </option>
        <option value="Dead">Dead </option>
        <option value="Alive">Alive </option>
        <option value="Unknown">Unknown</option>
      </select>
    </fieldset>
  );
}

export default FilterByStatus;
