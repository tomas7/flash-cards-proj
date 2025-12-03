// app/actions/getCards.ts
"use server";

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function getCountsInDecks(email: string) {
  return await sql`
    CALL getFirstDeckWithSpace(${email}, total_film := NULL);`;
}
