import logo from './logo.svg';
import './App.css';
import './component/Greet'
import Greet from './component/Greet';
import welcome from './component/welcome'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Greet />
        <welcome />
      </div>
    );
  }
}

export default App;
