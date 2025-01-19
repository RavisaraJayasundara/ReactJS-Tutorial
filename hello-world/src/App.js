
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';

function App() {
  return (
    <div className="App">
      
      {/*<Message/>
      <Counter/>*/}
       <FunctionClick/>
       
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
