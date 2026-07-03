import './App.css'
import FlashcardContainer from './components/FlashcardContainer'
import FlashcardList from './components/FlashcardList'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <FlashcardContainer>
        <FlashcardList/>
      </FlashcardContainer>
    </>
  )
}

export default App
