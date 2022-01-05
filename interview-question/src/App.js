import './App.css';
import ToDo from './interview/ToDo'
import Counter from './interview/Counter'
import SplitComponentPattern from './pattern/SplitCoponentPattern'
function App() {
  return (
    <div className="App">
       <ToDo />
       <Counter />
       <SplitComponentPattern />
    </div>
  );
}

export default App;
