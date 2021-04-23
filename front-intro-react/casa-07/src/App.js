import './App.css';

function App() {
  const tamanhoFonte = 16;
  return (
    <div class="App">
      <form>
        <input type="text" name="name" placeholder="Nome" maxlength="15" />
        <input type="text" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha">
        <input type="submit" value="Login"
          style="border-radius: 7px; background-color: green; color: #fff; padding: 10px; margin-top: 20px" />
      </form>
    </div>
  );
}

export default App;