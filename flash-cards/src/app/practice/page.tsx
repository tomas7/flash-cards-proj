import ChooseDeck from "./chooseDeck";
import { getDecks } from "../actions/getDecks";
import { IDeck } from "@/src/Interfaces/interfaces";
import { auth } from "@/auth" // or from "next-auth" if you're using that
import { NotAuthorized } from "../components/Not-authorized";

export default async function Page() {
  const session = await auth();
  const decks = (await getDecks("haverlatom7@gmail.com")) as IDeck[];
  if (session) {
    return <ChooseDeck decks={decks} />;
  }
   return (
    <NotAuthorized/>
   )
}
