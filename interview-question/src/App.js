import './App.css';
import ToDo from './interview/ToDo'
import Counter from './interview/Counter'
import SplitComponentPattern from './pattern/SplitCoponentPattern'
import ObjectSpreed from './interview/ObjectSpread'
import GetRequest from './Axios/GetRequest'
import PostRequest from './Axios/PostRequest'
import AsyncWaitSyntax from './Axios/AsyncWaitSyntax'
import UseAxiosClient from './Axios/UseAxiosClient'
import Fetch from './Axios/Fetch'
function App() {
  return (
    <div className="App">
       <ToDo />
       <Counter />
       <SplitComponentPattern />
       <ObjectSpreed />
       <PostRequest />
       <GetRequest />
       <AsyncWaitSyntax />
       <UseAxiosClient />
       <Fetch />

    </div>
  );
}

export default App;
