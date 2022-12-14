import error from '../images/rick_and_morty_error.png';
import '../styles/components/NotFound.scss';
import PropTypes from 'prop-types';
function NotFound(props) {
  return (
    <>
      <div className="error">
        <img src={error} alt="Not Found" className="error-img" />
        <h3 className="error-text-span">Wubba Lubba Dub Dub!</h3>
        <p className="error-text">{props.errorMessage}</p>
      </div>
    </>
  );
}

NotFound.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
export default NotFound;
