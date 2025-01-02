"use client";
import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";


// TODO: get cookie theme and conditionally style the QR generator if light

const QRCodeGenerator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [qrCodeValue, setQrCodeValue] = useState<string>("");
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleGenerateQRCode = (): void => {
    try {
      new URL(inputValue);
      setQrCodeValue(inputValue);
      setErrorMessage(""); // Clear any previous error
    } catch {
      setErrorMessage("Invalid URL. Please try again.");
    }
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
    <div className="flex flex-col min-h-72 w-full justify-between rounded-lg bg-transparent border border-solid border-gray-500 border-opacity-40 lg:flex-row">
      <div className="flex flex-col gap-2 p-8">
        <label className="font-sourceCodePro text-sm"> Enter QR destination:</label>
        <input
          className="p-2 w-full rounded-md border border-white border-opacity-40 bg-transparent font-sourceCodePro focus:outline-none focus:border-opacity-100 lg:w-72"
          type="url"
          placeholder="Enter URL"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <button
          className="px-4 py-2 font-sourceCodePro cursor-pointer bg-buttonBg text-buttonText rounded-md"
          onClick={handleGenerateQRCode}
        >
          Generate QR Code
        </button>
        {errorMessage && (
        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
      )}
      </div>
      <div className="flex flex-col w-full items-center gap-2 border-l border-gray-500 border-opacity-40 p-8 md:w-1/2">
        <h3 className="font-sourceCodePro"> </h3>
        <div ref={qrCodeRef}>
          {qrCodeValue && (
            <QRCodeCanvas
              value={qrCodeValue}
              size={160}
            />
          )}
        </div>
        <button
          onClick={handleDownloadQRCode}
          disabled={!qrCodeValue}
          className={`font-sourceCodePro ${
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


export default QRCodeGenerator;
