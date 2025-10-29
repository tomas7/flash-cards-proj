// app/actions/getCards.ts
"use server";

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function getDecks(email: string) {
  return await sql`
      SELECT * FROM "fc_decks"
      WHERE "email" = ${email} 
    `;
}
