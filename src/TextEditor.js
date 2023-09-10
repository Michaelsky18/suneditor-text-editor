// src/TextEditor.js
import React, { useRef, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import TextPreview from './TextPreview'; // Import the TextPreview component

function TextEditor() {
  const editorRef = useRef();
  const [editorContent, setEditorContent] = useState("");

  const handleChange = (content) => {
    setEditorContent(content);
  };

  return (
    <div>
      <SunEditor
        ref={editorRef}
        onChange={handleChange}
        setOptions={{
          height: 300, // Adjust the height as needed
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            ["bold", "underline", "italic"],
            ["fontColor", "hiliteColor", "textStyle"],
            ["removeFormat"],
            "/", // Line break
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "lineHeight"],
            ["table", "link", "image", "video", "audio" /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
            /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
            ["fullScreen", "showBlocks", "codeView"],
            ["preview", "print"],
        
          ],
          defaultStyle: 'text-align: left', // Set the default text alignment to left
        }}
      />
            <TextPreview content={editorContent} /> {/* Pass the content to TextPreview */}

      {/*<div>
        <h2>Preview</h2>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
    </div>*/}
    </div>
  );
}

export default TextEditor;
