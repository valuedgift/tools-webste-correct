import './Contributors.css';
import { Link } from 'react-router-dom';


const Contributors = () => {
  return (
    <div className="contributors-page">
      <h1>Contributors & Credits</h1>

      <h2>Contributors</h2>
      <ul>
        <li><strong>Gift Amadi</strong> - Frontend Software Developer Intern Aptiw</li>
      </ul>

      <p>
        As part of the team that developed the <strong>Quicky Tools Website</strong>, I was responsible for designing and implementing user-friendly interfaces that deliver a smooth and responsive experience across devices.
      </p>

      <p>
        My contributions included developing and optimizing key features such as the{' '}
        <Link to="/spell-checker">Spell Checker</Link>,{' '}
        <Link to="/case-converter">Case Converter</Link>,{' '}
        <Link to="/word-counter">Word Counter</Link> and{' '}
        <Link to="/page-size-checker">Website Page Size Checker</Link> tools.
      </p>

      <p>I focused on building efficient React components, applying modern UI/UX best practices, and ensuring intuitive navigation throughout the platform.</p>

      <p>This project significantly strengthened my skills in <strong>React</strong>, <strong>Vite</strong>, and responsive web design, while giving me the opportunity to collaborate within a dynamic development team at Aptiw's internship program.</p>

      <h3>Want to Join Us?</h3>
      <p>
        Interested in collaborating with Aptiw? Click here: <a href="https://aptiw.com/internship" target="_blank" rel="noopener noreferrer">Internship Program</a> to learn more!
      </p>
    </div>
  );
};

export default Contributors;
