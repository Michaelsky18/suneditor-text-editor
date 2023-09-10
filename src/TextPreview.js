// src/TextPreview.js
import React from 'react';

function TextPreview({ content }) {
  return (
    <div className="text-preview">
      <h2>Preview</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default TextPreview;
