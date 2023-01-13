import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <h1> I am here</h1>
      
      
      <Person
        first={"Doe"}
        last={"Jane"}
        age={"45"}
        haircolor={"black"}
      />
      <Person
        first={"smith"}
        last={"john"}
        age={"88"}
        haircolor={"brown"}
      />
      <Person
        first={"Doe"}
        last={"Jane"}
        age={"45"}
        haircolor={"black"}
      />
      <Person
        first={"Doe"}
        last={"Jane"}
        age={"45"}
        haircolor={"black"}
      />

      
      
      
      
      
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}