import { useEffect, useState } from "react";
import { FiDownload, FiCopy, FiFileText, FiX } from "react-icons/fi";
import "./SpellChecker.css";

function Spell() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [pasted, setPasted] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [done, setDone] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [language, setLanguage] = useState("English");
  const [mode, setMode] = useState("Word Changer");
  const [spellingMistakes, setSpellingMistakes] = useState(null);
  const [mistakes, setMistakes] = useState([]);
  const [readingTime, setReadingTime] = useState(null);
  const [grammarResult, setGrammarResult] = useState(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setText(text);
      setPasted(true);
      setTimeout(() => setProcessed(true), 500);
      setTimeout(() => setDone(true), 1000);
    } catch (err) {
      alert("Failed to paste text from clipboard");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setText(event.target.result);
      reader.readAsText(file);
    }
  };

  const handleClear = () => {
    setText("");
    setSpellingMistakes(null);
    setMistakes([]);
    setReadingTime(null);
    setGrammarResult(null);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element);
    element.click();
  };

  const checkSpelling = async () => {
    setProcessing(true);
    const words = text.trim().split(/\s+/);
    const foundMistakes = [];

    for (const word of words) {
      try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
        if (!res.ok) foundMistakes.push(word);
      } catch {
        foundMistakes.push(word);
      }
    }

    setSpellingMistakes(foundMistakes.length);
    setMistakes(foundMistakes);
    setReadingTime((words.length / 200).toFixed(2));
    setProcessing(false);
  };

  const checkGrammar = async () => {
    try {
      const response = await fetch("https://api.languagetoolplus.com/v2/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          text,
          language: language.toLowerCase(),
        }),
      });

      const result = await response.json();
      setGrammarResult(result.matches);
    } catch (err) {
      console.error("Grammar check failed", err);
    }
  };

  const spinnerColor = {
    English: "#3498db",
    French: "#e74c3c",
    Spanish: "#f1c40f",
    German: "#2ecc71",
    Italian: "#9b59b6",
  }[language] || "#3498db";

  return (
    <div className="app-wrapper">
      <div className="app">
        <h1>Spell Checker</h1>
        <div className="icon-row">
          <FiFileText className={`icon ${pasted ? "green" : ""}`} onClick={handlePaste} />
          <hr />
          <span className={`processing-dot ${processed ? "green" : ""}`}>●</span>
          <hr />
          <span className={`done-check ${done ? "green" : ""}`}>✓</span>
        </div>

        <div className="textarea-container">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
          ></textarea>

          <div className="left-icons">
            <label htmlFor="file-upload" className="icon" title="Upload from computer">
              <FiFileText />
            </label>
            <input
              type="file"
              id="file-upload"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </div>

          <div className="right-icons">
            <FiX className="icon" onClick={handleClear} title="Clear" />
            <FiCopy className="icon" onClick={handleCopy} title="Copy" />
            <FiDownload className="icon" onClick={handleDownload} title="Download" />
          </div>
        </div>

        <div className="options">
          <div>
            <label>Language:</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Italian</option>
            </select>
          </div>
          <div>
            <label>Mode:</label>
            <select value={mode} onChange={(e) => setMode(e.target.value)}>
              <option>Word Changer</option>
              <option>Smart Spin</option>
            </select>
          </div>
        </div>

        <div className="limits">
          <p>Limit: 200 words</p>
          <p>Words: {text.trim().split(/\s+/).filter(Boolean).length}</p>
        </div>

        <div className="check-buttons">
          {/* <button onClick={checkSpelling}>Check Spelling</button> */}
          <button onClick={checkSpelling} disabled={processing}>
            {processing ? (
              <div className="btn-spinner" />
            ) : (
              "Check Spelling"
            )}
          </button>

          <button onClick={checkGrammar}>Check Grammar</button>
        </div>

        {/* {processing && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
            <div className="spinner" style={{ borderTopColor: spinnerColor }}></div>
            <span>Processing...</span>
          </div>
        )} */}

        {spellingMistakes !== null && !processing && (
          <div className="results">
            <p>Spelling Mistakes: {spellingMistakes}</p>
            <p>Reading Time: {readingTime} mins</p>
            {mistakes.length > 0 && <ul>{mistakes.map((m, i) => <li key={i}>{m}</li>)}</ul>}
          </div>
        )}

        {grammarResult && grammarResult.length > 0 && (
          <div className="results">
            <p>Grammar Issues Found: {grammarResult.length}</p>
            <ul>
              {grammarResult.map((issue, idx) => (
                <li key={idx}>{issue.message}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Spell;
