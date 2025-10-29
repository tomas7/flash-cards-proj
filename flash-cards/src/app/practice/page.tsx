import ChooseDeck from "./chooseDeck";
import { getDecks } from "../actions/getDecks";
import { IDeck } from "@/Interfaces/interfaces";

export default async function Page() {
  const decks = (await getDecks("haverlatom7@gmail.com")) as IDeck[];

  return <ChooseDeck decks={decks} />;
}
