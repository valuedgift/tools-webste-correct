// File: src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">

      <div className="logo-container">
        <div className="logo-text-container">
          <img src="/logo.png" alt="Logo" className="logo" />
          <span className="logo-side-text">Quicky.tools</span>
        </div>

        <p className="footer-madeby">
          Made with love by{' '}
          <a href="https://aptiw.com/internship" target="_blank" rel="noopener noreferrer">Interns</a>{' '}
          at{' '}
          <a href="https://aptiw.com" target="_blank" rel="noopener noreferrer">Aptiw</a>.{' '}
          <Link to="/contributors">Contributors</Link>
          {/* <a href="/contributors" target="_blank" rel="noopener noreferrer">Contributors</a> */}
        </p>
      </div>

      <p>&copy; {new Date().getFullYear()} Quicky.tools. All rights reserved.</p>

    </div>
  </footer>
);

export default Footer;