import { useState } from "react";
import type Card from "../types";
import UIButton from "./UIButton";

interface Flashcard {
  card: Card
  onAddItem: (cardId: number) => Promise<void>;
}

export default function Flashcard({card, onAddItem}: Flashcard) {

    const [revealed, setRevealed] = useState<Boolean>(false);

    return (
        <div onClick={() => {setRevealed(!revealed);}} className={"border-1 rounded-2xl p-3"}>
            <div>{card.front}</div>
            {revealed && 
            <>
                <hr/>
                <div>{card.back}</div>
                <UIButton id={card.id} onAddItem={onAddItem}>Easy</UIButton>
            </>}
            <div className="flex justify-self-end">{card.reviewCount}</div>
        </div>
    )
}