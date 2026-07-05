
import { useEffect, useState } from "react";
import FlashcardList from "./FlashcardList";
import type Card from "../types";

export default function Flashcards() {
    const [cards, setCards] = useState<Card[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/cards`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data: Card[]) => { setCards(data); setLoading(false); })
            .catch(err => { setError(err.message); setLoading(false); });
    }, []);

    async function updateCard(cardId: number): Promise<void> {
        console.log("Here:"+cardId);
        await fetch(`${import.meta.env.VITE_API_URL}/review_count/${cardId}`, { method: 'POST' });
        const response = await fetch(`${import.meta.env.VITE_API_URL}/cards`);
        const updatedCards = await response.json();
        setCards(updatedCards);
    }

    return (
        <FlashcardList cards={cards} loading={loading} error={error} onAddItem={updateCard}/>
    );
}