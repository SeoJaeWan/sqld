import React, { forwardRef } from "react";
import SunEditor from "suneditor-react";
import EditorContainer from "./editor.style";
import "suneditor/dist/css/suneditor.min.css";

const Editor = forwardRef((props, ref) => {
  const handleEditorChange = (contents) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(contents, "text/html");
    const imageContainers = doc.querySelectorAll(".se-image-container");

    let isModified = false;

    imageContainers.forEach((container) => {
      // Check and insert <p> tags before and after se-image-container
      if (container.previousElementSibling?.tagName !== "P") {
        const pBefore = doc.createElement("p");
        // pBefore.innerHTML = "123";
        container.before(pBefore);
        isModified = true;
      }
      if (container.nextElementSibling?.tagName !== "P") {
        const pAfter = doc.createElement("p");
        pAfter.innerHTML = "ㅤ";
        container.after(pAfter);
        isModified = true;
      }
    });

    if (isModified) {
      ref.current.setContents(doc.body.innerHTML);
    }
  };

  const getSunEditorInstance = (sunEditor) => {
    ref.current = sunEditor;
  };

  return (
    <EditorContainer>
      <SunEditor
        lang="ko"
        height={"470px"}
        getSunEditorInstance={getSunEditorInstance}
        onChange={handleEditorChange}
        setOptions={{
          height: 470,
          buttonList: [
            ["font", "fontSize", "formatBlock"],
            ["paragraphStyle", "blockquote"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["fontColor", "hiliteColor", "textStyle"],
            // ["removeFormat"],
            "/", // Line break
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "lineHeight"],
            [
              "table",
              "link",
              "image",
              "video",
              // "audio"
            ],
            ["undo", "redo"],
            // ["fullScreen", "showBlocks", "codeView"],
            // ["preview", "print"],
            // ["save", "template"],
          ],
          // imageUploadUrl: ""
        }}
      />
    </EditorContainer>
  );
});

export default React.memo(Editor);
