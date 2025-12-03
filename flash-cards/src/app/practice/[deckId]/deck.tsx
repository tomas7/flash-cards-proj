"use client";

import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight, BookAIcon } from "lucide-react";
import Card from "./card";
import styles from "./deck.module.scss";
import { ICard } from "@/src/Interfaces/interfaces";

export default function Deck({ cards, flashMode }: { cards: ICard[]; flashMode: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(100);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % cards.length);
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    console.log("next");
  };
   useEffect(() => {
    if (!flashMode) return;
    const duration = 5000;
    const steps = 100; 
    const stepDuration = duration / steps;

    setProgress(100);

    const progressId = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 100 / steps : 0));
    }, stepDuration);

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
      setProgress(100);
    }, duration);

    return () => {
      clearInterval(intervalId);
      clearInterval(progressId);
    };
  }, [flashMode, cards.length, currentIndex]);
  
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.deckWrapper}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: index === currentIndex ? 10 : 1,
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            <Card {...card} />
          </div>
        ))}
          {flashMode && (
          <div className={styles.progressBarWrapper}>
            <div
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
      {!flashMode ? <div className={styles.navigation}>
        <ArrowBigLeft onClick={handlePrevious} />
        <BookAIcon />
        <ArrowBigRight onClick={handleNext} />
      </div> : <></> }
     
    </div>
  );
}
