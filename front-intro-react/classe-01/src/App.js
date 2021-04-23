import './App.css';

function App() {
  const isFrontend = true;
  return (
    <div className="App">

      {
        if (isFrontend) {
          <div>
            <h2>Team Frontend</h2>
            <img src="/frontend.svg" />
          </div>
        } else {
          <div>
            <h2>Team Backend</h2>
            <img src="/backend.svg" />
          </div>
        }
      }
    </div>
  );
}

export default App;
