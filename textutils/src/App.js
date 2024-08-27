import logo from './logo.svg';
import './App.css';


let name = "Nishant";
//any external javascript is comming from outside in the app function it will sanitize it means removes it.
//Example :
let name1 = "<b>Shreya</b>";
//Reason Babel compiles JSX down to React.createElement() calls.

function App() {
  return ( // entire code in the block is called JSX its 95% HTML : //JS is written in Curly brackets
    //It should always return only one element like in this case div className = app
    //But if there is a senario where you have to send to elements like <h1>Headings</h1>.
    //Then start the code with the empty JSX fragment which is like an empty tag <></> and wrapp all the elements with it.
    //For Example : 
    <>
    {/* <h1>Headings</h1>
    <div className="App">
      <header className="App-header">
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
      </header>
    </div> */}
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contacts</li>
    </nav>
    <div className="container">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio possimus non modi delectus eaque ratione explicabo illo, voluptatem vel impedit maiores ipsa fugit quas magnam rem odit tenetur autem dolorem veritatis aliquam voluptate.</p>
      {/* This is how you can add images (source of logo is present at the top) */}
      <img src={logo} className="App-logo" alt="logo" /> 

      {/* This is how you can add Variables (source of logo is present at the top) */}
      <h1>Hello {name}</h1>
      <h2>Heyy {name1}</h2>
    </div>
    </>
  );
}

export default App;
