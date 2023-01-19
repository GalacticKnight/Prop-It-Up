import './App.css';
import Person from './components/Person';

const peopleArr = [
  {
    firstName: "Joe",
    lastName: "Smith",
    age: 28,
    hairColor: "blonde",
  },
  {
    firstName: "Matilda",
    lastName: "Jones",
    age: 33,
    hairColor: "brown",
  },
  {
    firstName: "Jane",
    lastName: "Johnson",
    age: 34,
    hairColor: "blonde",
  },
  {
    firstName: "Hal",
    lastName: "Moore",
    age: 90,
    hairColor: "grey",
  },
];


function App() {
  return (
    <div className="App">
      {peopleArr.map((personObj, index) => (
        <Person
          key={index}
          firstName={personObj.firstName}
          lastName={personObj.lastName}
          age={personObj.age}
          hairColor={personObj.hairColor}
        />
      ))}



      
      {/* 
      //Prop It Up
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
      /> */}
      
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