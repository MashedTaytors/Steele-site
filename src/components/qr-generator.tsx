"use client";
import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import ErrorIcon from '@mui/icons-material/Error';


// TODO: get cookie theme and conditionally style the QR generator if light
//TODO: Dont' allow bg/fg colors with low contrast


// Utility to calculate relative luminance
const calculateLuminance = (color: string): number => {
  const rgb = color
    .replace("#", "")
    .match(/.{2}/g)
    ?.map((hex) => parseInt(hex, 16) / 255) ?? [0, 0, 0];
  const [r, g, b] = rgb.map((val) =>
    val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// Utility to calculate contrast ratio
const calculateContrast = (fg: string, bg: string): number => {
  const fgLuminance = calculateLuminance(fg) + 0.05;
  const bgLuminance = calculateLuminance(bg) + 0.05;
  return fgLuminance > bgLuminance
    ? fgLuminance / bgLuminance
    : bgLuminance / fgLuminance;
};


const QRCodeGenerator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [qrCodeValue, setQrCodeValue] = useState<string>("");
  const [fgColor, setFgColor] = useState<string>("#000000"); // Default foreground color: black
  const [bgColor, setBgColor] = useState<string>("#ffffff"); // Default background color: white
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  
  const contrastRatio = calculateContrast(fgColor, bgColor);
  const isContrastGood = contrastRatio >= 4.5; // Define a flag for contrast check

  const handleGenerateQRCode = (): void => {
    try {
      new URL(inputValue);
      setQrCodeValue(inputValue);
      setErrorMessage(""); // Clear any previous error
    } catch {
      setErrorMessage("Invalid URL");
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
      <div className="flex flex-col gap-2 p-6 w-full">
        <label className="font-sourceCodePro text-foreground text-sm"> Enter QR destination:</label>
        <input
          className="p-2 w-full rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro focus:outline-none focus:border-opacity-100"
          type="url"
          placeholder="Enter URL"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleGenerateQRCode()}
        />

          {/* Color input group */}
          <div className="flex flex-col gap-4 my-3">

            <div className="flex flex-col gap-8 lg:flex-row md:flex-row" >
              {/* Fg color ingput */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-foreground">Foreground:</label>
                  <div className="flex flex-row gap-4">
                    <input
                      type="color"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="cursor-pointer"
                    />
                      <input
                        type="text"
                        value={fgColor}
                        onChange={(e) => setFgColor(e.target.value)}
                        placeholder="#000000"
                        className="p-1.5 border rounded-md text-sm w-24 bg-transparent border-solid border-gray-500 border-opacity-40 focus:outline-none focus:border-opacity-100"
                      />
                  </div>
              </div>

              {/* Bg color ingput */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-foreground">Background:</label>
                <div className="flex flex-row gap-4">
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="cursor-pointer "
                  />
                    <input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      placeholder="#ffffff"
                      className="p-1.5 border rounded-md text-sm w-24 bg-transparent border-solid border-gray-500 border-opacity-40 focus:outline-none focus:border-opacity-100 "
                    />
                </div>
              </div>

            </div>

          </div>
      
        <br />
        <button
         className={`px-4 py-2 font-sourceCodePro rounded-md ${
          isContrastGood ? "bg-buttonBg text-buttonText cursor-pointer" : "bg-gray-400 text-gray-600 cursor-not-allowed"
        }`}
          onClick={handleGenerateQRCode}
          disabled={!isContrastGood}
        >
          Generate QR Code
        </button>
      </div>
      
      {/* Output box */}
      <div className="flex flex-col w-full gap-2 border-l border-gray-500 border-opacity-40 p-6 md:w-1/2">
              {/* Contrast Warning */}

              <div className="flex flex-col gap-6">
                <div className={`flex flex-col text-base font-semibold  ${  isContrastGood ? "hidden" : "text-fail"}`}>
                  <div className="flex flex-row gap-1 items-center">
                    <ErrorIcon style={{ fontSize: "16px" }}/>
                    <p>Low Contrast</p> 
                  </div>
                  
                    <p className="text-xs">
                    Current: {contrastRatio.toFixed(2)}{" (Must be more than 4.5)"}
                    </p>
                </div>
                {errorMessage && (
                  <div className="flex flex-row gap-1 items-center text-fail font-semibold text-base w-full">  <ErrorIcon style={{ fontSize: "16px" }}/> {errorMessage}</div>
                )}
              </div>
            
        <div ref={qrCodeRef}>
          {qrCodeValue && (
            <QRCodeCanvas
              value={qrCodeValue}
              size={160}
              fgColor={fgColor} // Apply foreground color
              bgColor={bgColor} // Apply background color
              style={{ margin: "20px" }}
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
