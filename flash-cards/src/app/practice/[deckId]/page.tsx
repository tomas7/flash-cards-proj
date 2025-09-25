import { ICard } from "@/Interfaces/interfaces";
import Card from "./card";

export default async function Page({ params }: any) {
  const { deckId } = await params;
  const mockCard: ICard = {
    mainLanguage: "car",
    otherLanguage: "bil",
    pronanciation: "[bil]",
    isFavourite: false,
  };
  const mockCard1: ICard = {
    mainLanguage: "car1",
    otherLanguage: "bil1",
    pronanciation: "[bil]",
    isFavourite: false,
  };
  const cards: ICard[] = [
     mockCard1,mockCard
  ]
  return (
    <div>
      deck number: {deckId}
      {cards.map(card => <Card {...card}/>)}
    </div>
  );
}
