import morty from '../images/morty_footer.png';
import rick from '../images/rick_footer.png';
import '../styles/components/Footer.scss';

function Footer(props) {
  return (
    <footer className="footer">
      <img className="footer-img" src={morty} alt="Morty" />
      <div className="footer-text">
        <p className="footer-text-p">Rick and Morty character browser. </p>
        <p className="footer-text-p">By Cecilia Periquet.</p>
        <p className="footer-text-p">&copy;2022 Adalab.</p>
      </div>
      <img className="footer-img" src={rick} alt="Pickle-Rick" />
    </footer>
  );
}

export default Footer;
