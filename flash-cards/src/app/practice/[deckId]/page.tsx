import DeckClient from "./deck";
import { getCards } from "@/app/actions/getCards";

export default async function Page({ params, searchParams }: { params: { deckId: number}; searchParams:  { flashMode?: string } }) {
  const cards = (await getCards(params.deckId, undefined)) as any[]; // server-side DB fetch

  return <DeckClient cards={cards} flashMode={searchParams.flashMode === 'true' ? true : false} />;
}
