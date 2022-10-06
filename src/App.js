import Jokes from './Components/Jokes/Jokes';
import './style.css';
import { jokes } from './jokes';

function App() {
  return (
    <div className="flex">
      <Jokes jokes={jokes}/>
    </div>
  );
}

export default App;
