"use client";
import { useState } from "react";

export default function TextToSpeech() {
  const [text, setText] = useState("Hello! This is a demo of text-to-speech.");

  const speak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US"; // you can change language
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };

  return (
    <div className="p-4 max-w-xl">
      <textarea
        className="w-full p-2 border rounded"
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={speak}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        🔊 Read Aloud
      </button>
    </div>
  );
}
