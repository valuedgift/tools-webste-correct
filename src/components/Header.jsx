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

          {/* Simple Tooltip */}
          {/* <div className="logo-tooltip">
            Made with love by Interns at Aptiw
          </div> */}
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




// import { Link, useLocation } from 'react-router-dom';
// import { AiOutlineArrowLeft } from 'react-icons/ai';

// const Header = () => {
//   const location = useLocation();
//   const isNotHome = location.pathname !== '/';

//   return (
//     <header className="header">
//       <div className="container header-content">

//         <div className="logo-container">
//           <Link to="/" className="logo-link">
//             <img src="/logo.png" alt="Logo" className="logo" />
//             <span className="logo-side-text">Quicky.tools</span>
//           </Link>

//           {/* Tooltip */}
//           <div className="logo-tooltip">
//             <div className="tooltip-header">
//               <img src="/gift-photo.jpg" alt="Gift Amadi" className="tooltip-image" />
//               <div>
//                 <strong>Gift Amadi</strong>
//                 <p>Software Developer</p>
//               </div>
//             </div>
//             <hr />
//             <small>
//               I build intuitive web apps, productivity tools, and seamless user experiences for the modern web.
//             </small>
//           </div>

//         </div>

//         {isNotHome && (
//           <Link to="/" className="back-arrow" title="Back to Tools">
//             <AiOutlineArrowLeft size={24} color="white" />
//           </Link>
//         )}

//       </div>
//     </header>
//   );
// };

// export default Header;




// import { Link, useLocation } from 'react-router-dom';
// import { AiOutlineArrowLeft } from 'react-icons/ai';  // Import back arrow from react-icons

// const Header = () => {
//   const location = useLocation();
//   const isNotHome = location.pathname !== '/';

//   return (
//     <header className="header">
//       <div className="container header-content">

//         <Link to="/" className="logo-container">
//           <img src="/logo.png" alt="Logo" className="logo" />
//           <span className="logo-side-text">Aptiw SEO Tools</span>
//         </Link>

//         {isNotHome && (
//           <Link to="/" className="back-arrow" title="Back to Tools">
//             <AiOutlineArrowLeft size={24} color="white" />
//           </Link>
//         )}

//       </div>
//     </header>
//   );
// };

// export default Header;




// import { Link } from 'react-router-dom';

// const Header = () => (
//   <header className="header">
//     <div className="container header-content">
//       <Link to="/" className="logo-container">
//         <img src="/logo.png" alt="Logo" className="logo" />
//         <span className="logo-side-text">Aptiw SEO Tools</span>
//       </Link>
//       <Link to="/" className="home-text">HOME</Link>
//     </div>
//   </header>
// );

// export default Header;