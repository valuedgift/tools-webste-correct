// File: src/components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="container header-content">
      <Link to="/" className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="logo-side-text">Aptiw SEO Tools</span>  {/* Your custom text */}
      </Link>
      <Link to="/" className="home-text">HOME</Link>
    </div>
  </header>
);

export default Header;