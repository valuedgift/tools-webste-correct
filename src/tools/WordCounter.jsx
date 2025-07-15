import React, { useState } from "react";
// import mammoth from "mammoth";
import "./WordCounter.css";

const WordCounterApp = () => {
  const [text, setText] = useState("");
  const [showStats, setShowStats] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
    setShowStats(false);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith(".docx")) {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      setText(result.value);
      setShowStats(false);
    } else if (file && file.name.endsWith(".txt")) {
      const reader = new FileReader();
      reader.onload = () => {
        setText(reader.result);
        setShowStats(false);
      };
      reader.readAsText(file);
    }
  };

  const handleCount = () => {
    if (text.trim() !== "") setShowStats(true);
  };

  const handleClear = () => {
    setText("");
    setShowStats(false);
  };

  // Text metrics
  const getWordCount = () => (text.trim() === "" ? 0 : text.trim().split(/\s+/).length);
  const getCharCount = () => text.replace(/\s/g, "").length;
  const getSyllableCount = () =>
    text
      .toLowerCase()
      .split(/\s+/)
      .reduce((acc, word) => acc + countSyllables(word), 0);

  const getSentenceCount = () => {
    const matches = text.match(/[^.!?]+[.!?]+/g);
    return matches ? matches.length : text.trim() ? 1 : 0;
  };

  const getParagraphCount = () => (text.trim() === "" ? 0 : text.trim().split(/\n+/).length);
  const getReadTime = () => Math.ceil(getWordCount() / 200);
  const getAverageWordLength = () => {
    const words = text.trim().split(/\s+/);
    const totalChars = words.reduce((sum, word) => sum + word.length, 0);
    return words.length ? (totalChars / words.length).toFixed(2) : 0;
  };

  const countSyllables = (word) => {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "");
    const matches = word.match(/[aeiouy]{1,2}/g);
    return matches ? matches.length : 1;
  };

  return (
    <div className="word-counter-container">
      <h1>Word Counter App</h1>
      <p className="description">
        This tool helps you count the number of <strong>words</strong>, <strong>characters</strong>,
        <strong> syllables</strong>, <strong>sentences</strong>, and more in your text. You can type, paste, or upload
        a <code>.docx</code> or <code>.txt</code> file, and see instant insights.
      </p>

      <input type="file" accept=".docx, .txt" onChange={handleFileUpload} />

      <textarea
        placeholder="Type or paste your text here..."
        value={text}
        onChange={handleTextChange}
      />

      <div className="button-group">
        <button className="count-button" onClick={handleCount}>Count Words</button>
        <button className="clear-button" onClick={handleClear}>Clear Text</button>
      </div>

      {showStats && (
        <div className="stat-boxes">
          <div className="box"><h4>Words</h4><p>{getWordCount()}</p></div>
          <div className="box"><h4>Characters</h4><p>{getCharCount()}</p></div>
          <div className="box"><h4>Syllables</h4><p>{getSyllableCount()}</p></div>
          <div className="box"><h4>Sentences</h4><p>{getSentenceCount()}</p></div>
          <div className="box"><h4>Paragraphs</h4><p>{getParagraphCount()}</p></div>
          <div className="box"><h4>Read Time (min)</h4><p>{getReadTime()}</p></div>
          <div className="box"><h4>Avg Word Length</h4><p>{getAverageWordLength()}</p></div>
        </div>
      )}

      {/* Informational Section */}
      <div className="word-info">
        <h2>THE ERA OF ONLINE WORD COUNTER TOOLS IS UPON US!</h2>
        <p>
          Whether you are an established writer or just another Internet rambler, we live in the era of word counts.
          From social media character limits to lengthy document requirements in corporate settings, if you've been
          writing words, then you've been operating with word counts, whether you are aware of it or not.
        </p>
        <p>
          Twitter used to limit us to 140 characters but later pushed it to 280. Facebook wouldn't let you post anything
          longer than 63,206 characters or even let you comment using more than 8,000 characters. Instagram's 2,200 character
          limit and 30 hashtag cap are other examples. Even blog posts need to meet a certain length (1800+ words) for SEO!
        </p>
        <p>
          That's why it's essential to stay on point — and an online word counter helps ensure your text fits the requirements
          of modern platforms, saving you time and effort.
        </p>

        <h2>ABOUT WORD COUNTER ONLINE TOOL</h2>
        <p>
          This online character counter helps you find and calculate the characters of your written content.
          It's not just about the number of words or characters — it's a smart content analyzer.
        </p>

        <h2>HOW THIS ONLINE WORD COUNT CHECKER WORKS</h2>
        <p>
          Paste or upload your text, and the tool will instantly count and display the metrics. You can also upload files
          from your device, Google Drive, or Dropbox.
        </p>

        <h2>HOW ONLINE WORD COUNT CHECKER BY SMALL SEO TOOLS IS DIFFERENT</h2>
        <div>
          <p>Unlike most tools, this one offers:</p>
          <ul>
            <li>Basic stats: total words, characters (with/without spaces)</li>
            <li>Top word density (1, 2, 3-word combos)</li>
            <li>Extra stats: unique words, avg word/sentence length, paragraphs, etc.</li>
            <li>Length stats: short/long word counts, longest sentences, and more</li>
          </ul>
          <p>All 100% FREE.</p>
        </div>
      </div>
    </div>
  );
};

export default WordCounterApp;
