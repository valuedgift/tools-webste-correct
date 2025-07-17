// File: src/components/Footer.jsx
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
          <a href="/contributors" target="_blank" rel="noopener noreferrer">Contributors</a>
        </p>
      </div>

      <p>&copy; {new Date().getFullYear()} SEO Tools Dashboard. All rights reserved.</p>

    </div>
  </footer>
);

export default Footer;




// const Footer = () => (
//   <footer className="footer">
//     <div className="container footer-content">

//       <div className="logo-container">
//         <img src="/logo.png" alt="Logo" className="logo" />
//         <span className="logo-side-text">Quicky.tools</span>

//         {/* Tooltip */}
//         <div className="logo-tooltip">
//           <div className="tooltip-header">
//             <img src="/gift-photo.jpg" alt="Gift Amadi" className="tooltip-image" />
//             <div>
//               <strong>Gift Amadi</strong>
//               <p>Software Developer</p>
//             </div>
//           </div>
//           <hr />
//           <small>
//             I build intuitive web apps, productivity tools, and seamless user experiences for the modern web.
//           </small>
//         </div>
//       </div>

//       <p>&copy; {new Date().getFullYear()} SEO Tools Dashboard. All rights reserved.</p>

//     </div>
//   </footer>
// );

// export default Footer;




// const Footer = () => (
//   <footer className="footer">
//     <div className="container footer-content">
//       <div className="logo-container">
//         <img src="/logo.png" alt="Logo" className="logo" />
//         <span className="logo-side-text">Aptiw SEO Tools</span>
//       </div>
//       <p>&copy; {new Date().getFullYear()} SEO Tools Dashboard. All rights reserved.</p>
//     </div>
//   </footer>
// );

// export default Footer;