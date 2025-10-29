"use server";
import { neon } from "@neondatabase/serverless";
import { getCountsInDecks } from "./getDecks copy";
const sql = neon(process.env.DATABASE_URL!);

export default async function createNewCard(formData: FormData) {
  // correct field names
  try {
  const mainLanguage = formData.get("mainLanguage")?.toString();
  const otherLanguage = formData.get("otherLanguage")?.toString();
  const pronanciation = formData.get("pronanciation")?.toString();
  if (mainLanguage && otherLanguage && pronanciation) {
    const lastDeckId = await getCountsInDecks("haverlatom7@gmail.com");
    const deckId = lastDeckId?.[0]?.total_film;
  
    if (deckId) {
      await sql`
        INSERT INTO "fc_cards" (
          "main_language",
          "other_language",
          "pronanciation",
          "is_favourite",
          "deck_id"
        )
        VALUES (${mainLanguage}, ${otherLanguage}, ${pronanciation}, false, ${deckId});
      `;
    }
    return { success: true, message: "Card created successfully!" };
  }

    throw new Error("Failed to create card. Incomplete form")     
  } catch (err: any) {
    return { success: false, message: err.message || "Failed to create card." };
  }

}