import { useFlashcards } from "./useFlashcards"

export default function FlashcardList(){
    const { cards, loading, error } = useFlashcards();

    if (loading) return <p>loading...</p>;
    if (error) return <p>Error loading cards: {error}</p>;
    return cards.map((card, i) => <div key={i}>{card.front}</div>);
}