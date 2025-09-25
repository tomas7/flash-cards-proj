"use client";
import { Heart, Pencil } from "lucide-react";
import { ICard } from "../../../Interfaces/interfaces";
import styles from "./card.module.scss";
import { useState } from "react";
export default function Card({
  mainLanguage,
  otherLanguage,
  pronanciation,
  isFavourite,
}: ICard) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.card} onClick={() => setFlipped(!flipped)}>
        <div className={styles.favoriteIconWrapper}>
          <div className={styles.icon}>
            {isFavourite ? (
              <Heart color="red" fill="red" size={20} />
            ) : (
              <Heart color="gray" size={20} />
            )}
          </div>

          <div className={styles.icon}>
            <Pencil size={20} color="gray" />
          </div>
        </div>
        {flipped ? (
          <div>
            <h2>{mainLanguage}</h2>
          </div>
        ) : (
          <div>
            <h2>{otherLanguage}</h2>
            <p>{pronanciation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
