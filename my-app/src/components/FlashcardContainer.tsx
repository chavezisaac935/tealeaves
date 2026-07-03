import React from "react";

interface Flashcards {
    children: React.ReactNode;
}

export default function FlashcardContainer({children}: Flashcards) {
    return (
        <section className="grid grid-cols-3 gap-4 mt-5">
            {children}
        </section>
    )
}