"use server";
import { neon } from "@neondatabase/serverless";
import { getCountsInDecks } from "./getDecks copy";
import { getErrorMessage } from "@/src/lib/error";
const sql = neon(process.env.DATABASE_URL!);

export default async function createNewCard(email: string, formData: FormData) {
  // correct field names
  try {
  const mainLanguage = formData.get("mainLanguage")?.toString();
  const otherLanguage = formData.get("otherLanguage")?.toString();
  const pronanciation = formData.get("pronanciation")?.toString();
  if (mainLanguage && otherLanguage && pronanciation) {
    const lastDeckId = await getCountsInDecks(email);
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
  } catch (err: unknown) {
    return { success: false, message: getErrorMessage(err)};
  }

}