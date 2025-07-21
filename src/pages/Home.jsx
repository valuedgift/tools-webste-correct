// File: src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { LiaSpellCheckSolid } from "react-icons/lia";
import { MdFormatTextdirectionLToR } from "react-icons/md";
import { BsFileWord } from "react-icons/bs";
import { RiParkingLine } from "react-icons/ri";

import './Home.css';

const tools = [
  {
    name: 'Spell Checker',
    path: '/spell-checker',
    description: 'Check & correct spelling errors.',
    icon: <LiaSpellCheckSolid />
  },
  {
    name: 'Case Converter',
    path: '/case-converter',
    description: 'Converts your textcase',
    icon: <MdFormatTextdirectionLToR />
  },
  {
    name: 'Word Counter',
    path: '/word-counter',
    description: 'Counts the words in the textarea',
    icon: <BsFileWord />
  },
  {
    name: 'Website Page Size Checker',
    path: '/page-size-checker',
    description: 'Checks the accurate size of your page',
    icon: <RiParkingLine  />
  },
  // More tools with their unique icons will be added here.
];

const Home = () => (
  <section className="tools-dashboard">
    <h1 className="dashboard-title">Quicky Tools For Your Use</h1>
    <p>A Set of quick tools to help you complete your task</p>
    <div className="tools-grid">
      {tools.map(tool => (
        <Link key={tool.path} to={tool.path} className="tool-card">
          <div className='tool-icon-container'>
            <div className="tool-icon">{tool.icon}</div>
          </div>
          <h2>{tool.name}</h2>
          <p>{tool.description}</p>
        </Link>
      ))}
    </div>
  </section>
);

export default Home;