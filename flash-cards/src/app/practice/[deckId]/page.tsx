import { auth } from "@/auth";
import { getCards } from "../../actions/getCards";
import DeckClient from "./deck";
import { NotAuthorized } from "../../components/Not-authorized";

export default async function Page({ params, searchParams }: { params: Promise<{ deckId: number}>; searchParams:  { flashMode?: string } }) {
  const session = await auth();      
  if (!session?.user) return <NotAuthorized/>;   
  const {deckId} = await params;
  const cards = (await getCards(deckId)); 

  return <DeckClient cards={cards} flashMode={searchParams.flashMode === 'true' ? true : false} />;
}
