"use client";
import createNewCard from "@/app/actions/createNewCard";
import styles from "./page.module.scss";
import { usePopup } from "@/app/context/PopupContext";

enum PopUpType {
    success = "success", 
    error = "error",
    info = "info"
}

export default function CardForm() {
 const { showPopup } = usePopup();
    async function handleSubmit(formData: FormData) {

      const result = await createNewCard(formData);
      console.log(result)
      if (result?.success) {
        showPopup(result.message, PopUpType.success );
      } else {
        showPopup(result?.message || "Something went wrong", PopUpType.error );
      }
  }

  return (<form action={handleSubmit} className={styles.container}>
        <label htmlFor="deck-select">Main Language</label>
        <input name="mainLanguage" type="text"></input>

        <label htmlFor="deck-select">Other Language</label>
        <input name="otherLanguage" type="text"></input>

        <label htmlFor="deck-select">pronanciation</label>
        <input name="pronanciation" type="text"></input>

        <button type="submit">Create Card</button>
    </form>)
}