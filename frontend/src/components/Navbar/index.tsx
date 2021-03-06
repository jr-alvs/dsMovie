import {ReactComponent as GithubIcon} from 'assets/img/githubIcon.svg';
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>MovieScore</h1>
          <a href="https://github.com/jr-alvs" target={'_blank'} rel="noreferrer">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/jr-alvs</p>
            </div>
          </a>
        </div>        
      </nav>
    </header>
  );
}

export default Navbar;