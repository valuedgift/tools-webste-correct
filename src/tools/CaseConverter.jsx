import { useState } from "react";
import { FiDownload, FiCopy } from "react-icons/fi";
import "./CaseConverter.css";

function Case() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const countWords = (txt) => txt.trim().split(/\s+/).filter(Boolean).length;

  const toggleCase = (txt) =>
    [...txt]
      .map((c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
      .join("");

  const sentenceCase = (txt) =>
    txt.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());

  const lowerCase = (txt) => txt.toLowerCase();

  const upperCase = (txt) => txt.toUpperCase();

  const capitalizeWords = (txt) =>
    txt
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const alternateCase = (txt) =>
    [...txt]
      .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
      .join("");

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

  return (
    <div className="app">
      <h1>Case Converter</h1>
      <div className="text-container">
        <p className="text">Change Text Case is a handy web application that enables you to change the text case of any given text. Simply copy and paste the text into the text area below and click the required text case.</p>
      </div>
      <div className="textarea-container">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
        ></textarea>
        <div className="icons">
          <div className="icon-wrapper">
            <FiCopy className="icon" onClick={handleCopy} />
            <div className="tooltip">{copied ? "Copied!" : "Copy"}</div>
          </div>
          <div className="icon-wrapper">
            <FiDownload className="icon" onClick={handleDownload} />
            <div className="tooltip">Download</div>
          </div>
        </div>
      </div>

      <div className="counters">
        <p>Characters: {text.length}</p>
        <p>Words: {countWords(text)}</p>
      </div>

      <div className="buttons">
        <button onClick={() => setText(toggleCase(text))}>tOGGLE cASE</button>
        <button onClick={() => setText(sentenceCase(text))}>Sentence Case</button>
        <button onClick={() => setText(lowerCase(text))}>lower case</button>
        <button onClick={() => setText(upperCase(text))}>UPPER CASE</button>
        <button onClick={() => setText(capitalizeWords(text))}>Capitalize Word</button>
        <button onClick={() => setText(alternateCase(text))}>aLtErNaTe cAsE</button>
        <button onClick={() => setText("")} className="clear">Clear</button>
      </div>

      <div className="text-section-container">
        <div className="text-section">
          <h3>An Easy Way To Change Uppercase to Lowercase And Title Capitalization</h3>
          <p className="text">Have you ever typed out a document, made a few capitalization mistakes and wished you won't have to waste much time editing? It happens a lot, and if you are using a typical word processing tool, you will have your mistakes autocorrected as you type, but those kinds of software only correct grammatical errors. If you have to capitalize on a whole portion, you will need to do it manually. And that takes time. However, with an online text transforming tool like ours, you can easily transform the case of your texts. All you have to do is copy and paste your text, then select the case you want to transform it to.</p>
        </div>
        <div className="text-section">
          <h3>Case Converter Tool To Easily Transform Any Text</h3>
          <p className="text">Finally, the Title Case Converter Tool is one of the useful tools you freely have access to on SmallSEOTools.com. The tool automatically changes the case, whether you want the lower case to upper case or upper case to lower case. It ensures you do not lose any content you've expended time and energy creating. If there is any kind of “case error” in the text created, correcting the error is as simple as copying the text into the input area of the tool and engaging the right tool.</p>

          <p className="text">The Change Small Text Converter Tool performs letter case conversions more seamlessly compared to traditional word editors; whose autocorrect function sometimes miss out on some errors in a text.</p>
        </div>
        <div className="text-section">
          <h3>Convert To Toggle Case</h3>
          <p className="text">The tOGGLE cASE text tool, also called Change Case tool that changes the text case of all the upper case and lowers case letters inputted into the text area. All upper case letters are converted to lower case and all lower case letters are converted to upper case.</p>
        </div>
        <div className="text-section">
          <h3>Change Text Case To Sentence Case</h3>
          <p className="text">The Sentence case text tool takes only the first letter of the first word of the sentence (or group of words), and proper nouns inputted into the text area and convert it to upper case.</p>

          <p className="text">Sentence case also referred to as “down style” or “reference style” is used by newspaper publishers in the United States and the United Kingdom for titles, headings, and news headlines. Particularly, all publications in the United Kingdom widely adopt sentence cases in several publications: lists, bibliographies, reference lists; etcetera.</p>
        </div>
        <div className="text-section">
          <h3>Case Converter Tool</h3>
          <p className="text">The lower case text tool takes every upper case letter inputted into the text area and converts all to lower case letters.</p>

          <p className="text">Lower case letters are generally used for every letter in every word except for the first letter in words that begin sentences and proper nouns. Note that there are exceptions to this rule, specifically in words in which there is unusual capitalization; for example, eBay, JetBlue, iMac; etcetera.</p>
        </div>
        <div className="text-section">
          <h3>Convert Lower Case To Upper Case Letters:</h3>
          <p className="text">The UPPER CASE text tool takes every lowercase letter inputted into the text area and converts all to uppercase letters.</p>

          <p className="text">Upper case letters or “ALL CAPS” find use in words or phrases a writer wants to emphasize, in titles on book covers, in advertisements, to highlight a message, in newspaper headlines, and on building plaques. They also indicate acronyms in texts.</p>
        </div>
        <div className="text-section">
          <h3>Text Converter: Capital Letters And Small Letters</h3>
          <p className="text">The Capitalize Word text tool will take every first lower case letters of every word in the sentence inputted and change all to upper case letters.</p>

          <p className="text">Capitalized words or “Title Cases” as they are known are widely used for titles in texts where every word in the sentence; except for articles, conjunctions and prepositions; begins with a capital letter.</p>

          <p className="text">It's common to see title cases used for titles of books, plays, and movies, but seldom for articles. This variation is mostly a question of style. When writing, decide the headline style you want to use. This is of course if you are not writing under strict guidelines where you are given a headline style.</p>
        </div>
        <div className="text-section">
          <h3>Convert To Alternate Case</h3>
          <p className="text">The alternate case tool will take all inputted letters and convert them into alternate upper case and lower case letters, the first letter being an upper case letter.</p>

          <p className="text">Alternate case letters are a specific style of writing on the Internet, also used to emphasize text or part (s) of written documents.</p>
        </div>
      </div>
    </div>
  );
}

export default Case;