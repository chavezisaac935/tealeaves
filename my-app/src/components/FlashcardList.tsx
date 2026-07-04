import type Card from "../types";

interface FlashcardListProps {
  cards: Card[];
  loading: boolean;
  error: string | null;
  onAddItem: (cardId: number) => Promise<void>;
}

export default function FlashcardList({ cards, loading, error, onAddItem }: FlashcardListProps){

    if (loading) return <p>loading...</p>;
    if (error) return <p>Error loading cards: {error}</p>;
    return cards.map((card, i) => 
        <div onClick={() => onAddItem(card["id"])} className={"border-1 rounded-2xl p-3"} key={i}>
            <div>{card.front}</div>
            <div>{card.back}</div>
            <div className="flex justify-self-end">{card.reviewCount}</div>
        </div>
    );
}