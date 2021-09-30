import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { createWorker } from "tesseract.js";
import "react-dropzone-uploader/dist/styles.css";

export const App = () => {
  const [text, setText] = useState(null);

  const [imageUrl] = useState(null);

  useEffect(() => {
    if (imageUrl != null) {
      ExtractTextFromImage();
    }
  });

  const worker = createWorker({
    logger: (m) => console.log(m),
  });

  const ExtractTextFromImage = async (imageUrl) => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(imageUrl);
    setText(text);
    await worker.terminate();
  };

  const getUploadParams = () => {
    return {
      url: "https://httpbin.org/post",
    };
  };

  const handleChangeStatus = ({ meta }, status) => {
    if (status === "headers_received") {
      //alert("Uploaded");
      setText("Scanning...");
      ExtractTextFromImage(meta.previewUrl);
    } else if (status === "aborted") {
      alert("Hmm... something's gone wrong");
    }
  };

  return (
    <React.Fragment>
      <div>
        <Dropzone
        style={{width: "80%", overflow: "hidden"}}
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          maxFiles={1}
          multiple={false}
          canCancel={false}
          accept="image/jpeg, image/png, image/jpg"
          inputContent={(files, extra) =>
            extra.reject
              ? "Only PNG and JPG Image files are allowed"
              : "Drag your receipt here or click to browse"
          }
          styles={{
            dropzoneActive: {
              borderColor: "green",
            },
            dropzoneReject: { borderColor: "red", backgroundColor: "#DAA" },
            inputLabel: (files, extra) =>
              extra.reject ? { color: "red" } : {},
          }}
        />
      </div>

      <div style={{ color: "white" }}>
        {text && (
          <h1>
            Here's what ya got: <br />
            <br />
            {text}
          </h1>
        )}{" "}
      </div>
    </React.Fragment>
  );
};
