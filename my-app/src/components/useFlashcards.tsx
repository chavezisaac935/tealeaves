import { useEffect, useState } from "react";

type Card = {
    front: string;
    back: string;
    reviewCount: number;
};

export function useFlashcards() {
    const [cards, setCards] = useState<Card[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://tea-backend-hpdsh9fzhccjewbh.centralus-01.azurewebsites.net/cards')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data: Card[]) => { setCards(data); setLoading(false); })
            .catch(err => { setError(err.message); setLoading(false); });
    }, []);

    return { cards, loading, error };
}