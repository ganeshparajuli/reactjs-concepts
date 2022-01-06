import './App.css';
import ToDo from './interview/ToDo'
import Counter from './interview/Counter'
import SplitComponentPattern from './pattern/SplitCoponentPattern'
import ObjectSpreed from './interview/ObjectSpread'
function App() {
  return (
    <div className="App">
       <ToDo />
       <Counter />
       <SplitComponentPattern />
       <ObjectSpreed />
    </div>
  );
}

export default App;
