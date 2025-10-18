import React from "react";
import "./CodeSnippet.css"; // we’ll add CSS next

const CodeSnippet = ({ code, language = "python" }) => {
  return (
    <pre className={`code-snippet language-${language}`}>
      <code>
        {code}
      </code>
    </pre>
  );
};

export default CodeSnippet;
