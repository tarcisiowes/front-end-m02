import './App.css';

function App() {
  const periodoPreferido = 'tarde';
  const nascidoNoBrasil = true;
  const idade = 28;

  return (
    <div className="App">
      {/* if, else-if , else */}
      <div>
        <h1>Que seu período preferido do dia?</h1>
        {if(periodoPreferido === 'manha'){
          <div>
            <h2>Manhã</h2>
            <img src="/manha.jpg" alt="manhã" />
          </div>
        }else if (periodoPreferido === 'tarde') {
          <div>
            <h2>Tarde</h2>
            <img src="/tarde.jpg" alt="tarde" />
          </div>
        }else {
          <div>
            <h2>Noite</h2>
            <img src="/noite.jpg" alt="noite" />
          </div>
        }}
      </div>

      <hr />
      {/* if, else */}
      {if(nascidoNoBrasil) {
        <strong>Brasileiro</strong>
      } else {
        <strong>Estrangeiro</strong>
      }}

      <br />

      {/* if */}
      if(idade >= 18) {
        <strong>Maior de idade!</strong>
      }
    </div>
  );
}

export default App;
