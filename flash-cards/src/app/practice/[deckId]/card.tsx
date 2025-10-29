"use client";

import { Heart, Pencil } from "lucide-react";
import styles from "./card.module.scss";
import { ICard } from "@/Interfaces/interfaces";

export default function Card({
  mainLanguage,
  otherLanguage,
  pronanciation,
  isFavourite,
}: ICard) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
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
        <div>
          <h2>{mainLanguage}</h2>
          <h3>{otherLanguage}</h3>
          <p>{pronanciation}</p>
        </div>
      </div>
    </div>
  );
}
