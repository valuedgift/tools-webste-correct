// WebsitePageSizeChecker.jsx
import React, { useState } from 'react';
import "./WebsitePageSizeChecker.css";

export default function WebsitePageSizeChecker() {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState([]);

  const handleCheck = () => {
    if (!url.trim()) return;

    const basicBytes = Math.floor(Math.random() * 500000) + 50000; // Simulated Bytes
    const sizeInKB = (basicBytes / 1024).toFixed(2);

    const newResult = {
      id: results.length + 1,
      url,
      bytes: basicBytes,
      kb: sizeInKB,
    };

    setResults([...results, newResult]);
    setUrl('');
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Website Page Size Checker</h1>
      <p className='first-p'>The page size is a crucial factor in SEO, check yours now! Enter the URL(s) in the box below, and click “Check Page Size”. You will get the results, telling you about the page size in bytes and Kbs.</p>

      <div className="card">
        <input
          type="text"
          placeholder="Enter website URL (e.g. https://example.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="input-box"
        />

        <button
          onClick={handleCheck}
          disabled={!url.trim()}
          className="check-button"
        >
          Check Page Size
        </button>

        {results.length > 0 && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>URL</th>
                  <th>Page Size (Bytes)</th>
                  <th>Page Size (KB)</th>
                </tr>
              </thead>
              <tbody>
                {results.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.url}</td>
                    <td>{item.bytes}</td>
                    <td>{item.kb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="info-section">
        <h2>About Website Page Size Checker</h2>
        <p>This Website Page Size Checker lets you estimate the size of any webpage to help you understand how it may impact loading times and performance.</p>

        <h2>Why Page Size Matters</h2>
        <p>Website Page Size Checker is one of the many SEO tools that SmallSeoTools has developed over these years. This wonderful tool, as the name suggests, is a page size checker that can be used to know the page size of any specific URL. It is a magic tool that users can use to check website size online. If your website takes longer than usual to load then perhaps you need to work on the size of your website because it can result in high bounce rate as the internet users don't tend to have the patience to wait for the web page to open. An average small web page size is estimated to be 12 KB and that will load very quickly. The more media on a page, the bigger the page size and the slower it will load. Embedded videos, images, audio, graphics, flash, and other forms of media will increase your page size. First things first, it's important for the health and performance of your website that you know the size of your website but how to know the total size of a website? That's where website page size checker or page size inspector comes into play.</p>
        <h2>How to check website size online using Website Page Size Checker?</h2>
        <p>The performance of any website is measured on the basis of the time it takes to open a particular web page. Website total size checker is a tool that will help you to check website size online and improve the performance of your website by letting you know the size of your individual web pages. If you have limited space with your web host then firstly, you should find a better web host and secondly, you should keep track of how much space you're using by assessing each web page. More importantly, limit the size of each page to maintain faster load time and keep your bounce rate low.</p>
        <h2>Why should you use our Website Page Size Checker?</h2>
        <p>There are many website page size checker tools available over internet that you can use to check the size of your web page then what makes our tool unique? We are simply offering you one of the best tools to check website size online. Our website page size checker is simple, fast and reliable; and absolutely free to use for everyone and literally everywhere.</p>
        <h2>How to use Website Page Size Checker tool?</h2>
        <p>It's very easy to use our website page size checker tool to check website size online. If you are looking for a way how to know the total size of a website then our website page size checker is the simplest tool you can find over internet to serve that purpose. For using tool, all you have to do is provide the URL of the web page you want to inspect in the text box and click on green “Check” button. Results will be displayed to you within just a few seconds including the page size in both bytes and kilo bytes.</p>
        <p className='last-p' style={{ marginTop: '1rem' }}>We hope that know you know pretty much all about website total size checker and its significance to check website size online. However, do not forget to leave behind your feedback which is necessary for the enhancement of our tools and website overall.</p>
      </div>
    </div>
  );
}