function FilterBySpecies(props) {
  const handleInput = (ev) => {
    props.handleFilterSpecies(ev.target.value);
  };
  return (
    <fieldset className="species">
      <label htmlFor="human" className="check_label">
        <input
          type="checkbox"
          name="human"
          value="Human"
          className="check_input"
          onChange={handleInput}
          checked={props.filterBySpecies.includes('Human')}
        />
        Human
      </label>
      <label htmlFor="alien" className="check_label">
        <input
          type="checkbox"
          name="alien"
          value="Alien"
          className="check_input"
          onChange={handleInput}
          checked={props.filterBySpecies.includes('Alien')}
        />
        Alien
      </label>
    </fieldset>
  );
}

export default FilterBySpecies;
