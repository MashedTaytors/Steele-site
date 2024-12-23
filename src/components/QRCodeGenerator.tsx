"use client";
import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

// TODO: annotate
const QRCodeGenerator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [qrCodeValue, setQrCodeValue] = useState<string>("");
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const handleGenerateQRCode = (): void => {
    setQrCodeValue(inputValue);
  };

  const handleDownloadQRCode = (): void => {
    if (qrCodeRef.current) {
      const canvas = qrCodeRef.current.querySelector("canvas");
      if (canvas) {
        const link = document.createElement("a");
        link.download = "qr-code.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      }
    }
  };

  return (
    <div className="flex flex-row h-96 justify-between rounded-lg bg-transparent p-12 border border-solid border-gray-500 border-opacity-40">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="p-3 w-72 rounded-md border border-gray-500 border-opacity-40 bg-transparent focus:outline-none"
          placeholder="Enter URL"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <button
          className=""
          onClick={handleGenerateQRCode}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Generate QR Code
        </button>
      </div>
      <div className="flex flex-col h-96 items-center gap-2">
        <div ref={qrCodeRef}>
          {qrCodeValue && (
            <QRCodeCanvas
              value={qrCodeValue}
              size={160}
              style={{ margin: "20px" }}
            />
          )}
        </div>
        <button
          onClick={handleDownloadQRCode}
          disabled={!qrCodeValue}
          className={`${
            qrCodeValue ? "block" : "hidden"
          } px-4 py-2 text-buttonText rounded-md ${
            qrCodeValue ? "bg-buttonBg cursor-pointer" : "bg-gray-400"
          }`}
        >
          Download QR Code
        </button>
      </div>
    </div>
  );
};

// TODO: Don't let users add non-URLs (maybe validate URLs)

export default QRCodeGenerator;
