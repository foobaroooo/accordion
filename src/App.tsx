import Accordion from './components/Accordion'
import AccordionItem from './components/AccordionItem';
import './App.css';

function App() {
  return (
    <main>
      <h1 className="title">Accordion</h1>
      <Accordion>
        <AccordionItem />
      </Accordion>      
    </main>
  )
}

export default App
