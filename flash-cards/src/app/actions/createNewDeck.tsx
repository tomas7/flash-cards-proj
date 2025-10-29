"use server";

import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL!);

export default async function createNewdeck(deck_name = null) {
    try {
        await sql`INSERT INTO "fc_decks"(NAME)
            VALUES (${deck_name})`;
        return {success: true, message: "deck created"}
    } catch (err: any) {
        return { success: false, message: err.message || "Failed to create card." };

    }
       
}