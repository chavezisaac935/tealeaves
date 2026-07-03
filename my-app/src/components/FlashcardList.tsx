import { useFlashcards } from "./useFlashcards"

export default function FlashcardList(){
    const { cards, loading, error } = useFlashcards();

    function handleClick() {
        console.log("Hello World");
    }

    if (loading) return <p>loading...</p>;
    if (error) return <p>Error loading cards: {error}</p>;
    return cards.map((card, i) => 
        <div onClick={handleClick} className={"border-1 rounded-2xl p-3"} key={i}>
            <div>{card.front}</div>
            <div>{card.back}</div>
            <div className="flex justify-self-end">{card.reviewCount}</div>
        </div>
    );
}