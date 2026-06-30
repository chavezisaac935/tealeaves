# Tealeaves: Talk to your flashcards
An application that allows you to create and store flashcards using Markdown and then review using a minimal interface with keyboard shortcuts. The flashcards can be read aloud using text-to-audio. In adition, the user can dialogue with the flash cards using dictation in natrual language and receive audio responses with no halucinations using RAG.

## Architectural Preferences
- Azure Cloud Provider
- Python 
- React front end
- LangChain and LangDB
- OpenAI API

## Stretch Goal
I would like to be able to spin up an internet radio station that is on 24 hrs a day and broadcasts from a pool of audio content on a rotation.

## User stories
- As a user I would like to:
    - Create flashcards using a WYSIWYG with Markdown Previews
    - Group flash cards into seperate decks and name them
    - Retreive a deck in a grid like view or a list
    - Edit the content of the flash cards
    - Edit or remove the decks from an interface
    - Hear the content of the question and answer with the click of a button
    - Enter into a dialogue mode where I approve microphone access on my device and make inquiries that are responded to with the output of a RAG search on my flashcards
    - Review the flash cards using a proven spaced repetition algorithm
    
