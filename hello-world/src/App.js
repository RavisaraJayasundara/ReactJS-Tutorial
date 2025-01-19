
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message/>
      {/*
      <Greet name="Udu" heroName='Batman'>
        <p> This is children props</p>
      </Greet>
      <Greet name="Sara" heroName='Wonder woman'>
        <button>Action</button>
      </Greet>
      <Greet name="Kesara" heroName='Superman'/>
      <Hello/> 
       <Welcome/>
      */}
    </div>
  );
}

export default App;
