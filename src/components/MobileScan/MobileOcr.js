import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { createWorker } from "tesseract.js";
import "react-dropzone-uploader/dist/styles.css";
import logo from "../logo.png";

export const App = ({ setMessage }) => {
  const [orderText, setOrderText] = useState("");

  const [text, setText] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const [imageUrl] = useState(null);

  useEffect(() => {
    if (imageUrl != null) {
      ExtractTextFromImage();
    }
  });

  useEffect(() => {
    setText(" ");

    setText(text);
    setMessage(text);
    console.log("text", text);
  }, [text]);

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
    setSuccessMsg(
      "Your image has been scanned. You can close this window now."
    );
  };

  const getUploadParams = () => {
    return {
      url: "https://httpbin.org/post",
    };
  };

  const handleChangeStatus = ({ meta }, status) => {
    if (status === "headers_received") {
      //alert("Uploaded");
      setText("Still scanning...");
      ExtractTextFromImage(meta.previewUrl);
    } else if (status === "aborted") {
      alert("Hmm... something's gone wrong");
    }
  };

  return (
    <>
      <div
        style={{
          marginTop: "85px",
          height: "60vh",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "80%", maxWidth: "500px" }}>
          <Dropzone
            style={{ overflow: "hidden" }}
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
      </div>

      <center>
        <h4 style={{ color: "white" }}>{successMsg && successMsg}</h4>
        <img src={logo} style={{ height: "80px", display: "block" }} />
      </center>

      {/*
      <div style={{ color: "white" }}>
        {text && (
          <h1>
            Here's what ya got: <br />
            <br />
            {text}
          </h1>
        )}{" "}
      </div>
*/}
    </>
  );
};
