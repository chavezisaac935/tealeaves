import { useState } from "react";

interface InputCard {
  onAddCard: (front: string, back: string) => Promise<void>;
}

export default function InputCard({onAddCard}: InputCard) {
    const [frontInput, setFrontInput] = useState("");
    const [backInput, setBackInput] = useState("");

    const handleChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFrontInput(event.target.value);
    }

    const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBackInput(event.target.value);
    }

    return (
        <div className={"border-1 rounded-2xl p-3"}>
            <input onChange={handleChangeA}/>
            <hr/>
            <input onChange={handleChangeB}/>
            <button onClick={() => onAddCard(frontInput, backInput)}>Submit</button>
        </div>
    )
}