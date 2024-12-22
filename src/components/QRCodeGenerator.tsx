"use client"
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
    <div className="flex flex-row rounded-lg border border-solid border-foreground bg-transparent p-12">
        <div className="flex flex-col">
            <input type="text" className="p-3 rounded-md border border-opacity-40 border-foreground bg-transparent focus:outline-none"
                placeholder="Enter URL"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{
                width: "300px",
                marginBottom: "20px",
                fontSize: "16px",
                }}
            />
            <br />
            <button
                onClick={handleGenerateQRCode}
                style={{
                padding: "10px 20px",
                fontSize: "16px",
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
        <div className="flex flex-col">
            <div style={{ marginTop: "30px" }} ref={qrCodeRef}>
                {qrCodeValue && (
                <QRCodeCanvas
                    value={qrCodeValue}
                    size={256}
                    style={{ margin: "20px" }}
                />
                )}
            </div>
            <button
                onClick={handleDownloadQRCode}
                disabled={!qrCodeValue}
                style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: qrCodeValue ? "pointer" : "not-allowed",
                backgroundColor: qrCodeValue ? "#0070f3" : "#ccc",
                color: "white",
                border: "none",
                borderRadius: "5px",
                }}
            >
                Download QR Code
            </button>
        </div>

    </div>
  );
};

export default QRCodeGenerator;
