import { useEffect, useState } from "react";
import type Card from "../types";
import Flashcard from "./Flashcard";
import InputCard from "./InputCard";

export default function FlashcardList(){
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
        const res = await fetch(`${import.meta.env.VITE_API_URL}/review_count/${cardId}`, { method: 'POST' });
        const updatedCard: Card = await res.json();
        setCards(prev => prev.map(c => c.id === updatedCard.id ? updatedCard : c));
    }

    async function addCard(front: string, back: string): Promise<void> {
        
        const res = await fetch(`${import.meta.env.VITE_API_URL}/add_card`, { method: 'POST', headers: {'Content-Type': 'application/json',}, body: JSON.stringify({"front": front, "back": back}) });
        const updatedCard: Card = await res.json();
        setCards(prev => prev.map(c => c.id === updatedCard.id ? updatedCard : c));
    }

    if (loading) return <p>loading...</p>;
    if (error) return <p>Error loading cards: {error}</p>;
    return (
        <section className="grid grid-cols-3 gap-4 mt-5">
            {cards.map((card) => <Flashcard key={card["id"]} card={card} onAddItem={updateCard}/>)}
            <InputCard onAddCard={addCard}/>
        </section>
    );
}