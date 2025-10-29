// app/actions/getCards.ts
"use server";

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function getCards(deckId: number, group: string | undefined) {
  const result = await sql`
      SELECT * FROM "fc_cards"
      WHERE "deck_id" = ${deckId} 
    `;
  const cards = result.map((row) => ({
    id: row.id,
    mainLanguage: row.main_language,
    otherLanguage: row.other_language,
    pronanciation: row.pronanciation,
    isFavourite: row.is_favourite,
    deckId: row.deck_id,
  }));

  return cards;
}
