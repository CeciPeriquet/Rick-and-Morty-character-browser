import '../styles/components/Filters.scss';
function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="form" htmlFor="search" onSubmit={handleSubmit}>
      <input className="input" type="text" id="search" name="search" />
    </form>
  );
}

export default Filters;
