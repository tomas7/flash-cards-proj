"use server";

import { getErrorMessage } from "@/src/lib/error";
import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL!);

export default async function createNewdeck(deck_name = null) {
    try {
        await sql`INSERT INTO "fc_decks"(NAME)
            VALUES (${deck_name})`;
        return {success: true, message: "deck created"}
    } catch (err: unknown) {
        return { success: false, message: getErrorMessage(err)};
    }
       
}