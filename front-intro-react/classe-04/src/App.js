import './App.css';

function customHeader() {
  return (
    <header>
      <div className="container-menu">
        <img src="/logo.svg" alt="logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Store</a></li>
        </ul>
      </div>
      <button>Login</button>
    </header>
  );
}

function customFooter() {
  return (
    <footer>
      Copyright © Cubos Academy
    </footer>
  );
}


function App() {
  return (
    <div className="App">
      <customHeader />
      <customFooter />
    </div>
  );
}

export default App;
