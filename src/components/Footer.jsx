// File: src/components/Footer.jsx

const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="logo-side-text">Aptiw SEO Tools</span>
      </div>
      <p>&copy; {new Date().getFullYear()} SEO Tools Dashboard. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;