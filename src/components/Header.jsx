// File: src/components/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Header = () => {
  const location = useLocation();
  const isNotHome = location.pathname !== '/';

  return (
    <header className="header">
      <div className="container header-content">

        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src="/logo.png" alt="Logo" className="logo" />
            <span className="logo-side-text">Quicky.tools</span>
          </Link>
        </div>

        {isNotHome && (
          <Link to="/" className="back-arrow" title="Back to Tools">
            <AiOutlineArrowLeft size={24} color="white" />
          </Link>
        )}

      </div>
    </header>
  );
};

export default Header;
