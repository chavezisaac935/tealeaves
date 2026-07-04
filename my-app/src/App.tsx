import './App.css'
import FlashcardContainer from './components/FlashcardContainer'
import FlashcardList from './components/FlashcardList'
import { useFlashcards } from './components/useFlashcards'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <FlashcardContainer>
      {useFlashcards()}
      </FlashcardContainer>
    </>
  )
}

export default App
