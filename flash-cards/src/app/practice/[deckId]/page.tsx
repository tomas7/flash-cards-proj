import { getCards } from "../../actions/getCards";
import DeckClient from "./deck";

export default async function Page({ params, searchParams }: { params: Promise<{ deckId: number}>; searchParams:  { flashMode?: string } }) {
  const {deckId} = await params;
  const cards = (await getCards(deckId)); 

  return <DeckClient cards={cards} flashMode={searchParams.flashMode === 'true' ? true : false} />;
}
