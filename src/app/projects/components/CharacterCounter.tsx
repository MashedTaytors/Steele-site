"use client";
import React, { useState, useRef } from "react";



const CharacterCounter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  
  return (
    <div className="flex flex-col min-h-72 w-full justify-between rounded-lg bg-transparent border border-solid border-gray-500 border-opacity-40 lg:flex-row">
      <div className="flex flex-col gap-2 p-6 w-full">
        <label className="font-sourceCodePro text-foreground text-sm"> Enter Text:</label>
        <textarea
          className="p-2 w-full rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro focus:outline-none focus:border-opacity-100"
          rows={6}
          placeholder="Enter URL"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

       
      </div>
      
      {/* Output box */}
      <div className="flex flex-col w-full gap-2 border-l border-gray-500 border-opacity-40 p-6 md:w-1/2">
            
        <div>
        Character Count: <br />
        <span className="text-2xl text-primaryText">{inputValue.length}</span>
        </div>
        
      </div>
    </div>
  );
};


export default CharacterCounter;
