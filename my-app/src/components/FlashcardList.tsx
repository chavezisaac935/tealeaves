import type Card from "../types";
import Flashcard from "./Flashcard";

interface FlashcardListProps {
  cards: Card[];
  loading: boolean;
  error: string | null;
  onAddItem: (cardId: number) => Promise<void>;
}

export default function FlashcardList({ cards, loading, error, onAddItem }: FlashcardListProps){
        if (loading) return <p>loading...</p>;
        if (error) return <p>Error loading cards: {error}</p>;
        return (
            <section className="grid grid-cols-3 gap-4 mt-5">
                {cards.map((card) => <Flashcard key={card["id"]} card={card} onAddItem={onAddItem}/>)}
            </section>
        );
}