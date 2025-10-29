"use client";

import React, { useState } from "react";
import styles from "./chooseDeck.module.scss";
import { IDeck } from "@/Interfaces/interfaces";
import { useRouter } from "next/navigation";
import Toggle from "../components/Toggle";

interface ChooseDeckProps {
  decks: IDeck[];
}

export default function ChooseDeck({ decks }: ChooseDeckProps) {
  const [flashMode, setFlashMode] = useState(false)
  const router = useRouter();
  const onSelect = (id: number) => {
    router.push(`/practice/${id}?flashMode=${flashMode}`);
  };

  const shortsMode = () => {
    setFlashMode(!flashMode)
  }
  return (
    <div className={styles.container}>
      <label htmlFor="deck-select" className={styles.label}>
        Choose the deck
      </label>
      <select
        id="deck-select"
        className={styles.select}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="">-- Select a deck --</option>
        {decks.map((deck) => (
          <option key={deck.id} value={deck.id}>
            {deck.name}
          </option>
        ))}
      </select>
      <Toggle setShortsMode={shortsMode} shortsMode={flashMode}/>
    </div>
  );
}
