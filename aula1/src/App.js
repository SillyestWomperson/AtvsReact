import "./App.css";
import Frase from "./Frase";
import Imagem from "./Imagem";

function App() {
    const nome = "Tanese";
    const novoNome = nome.toUpperCase();

    const idade = 17;

    function soma(a, b) {
        return a + b;
    }

    return (
        <div className="App">
            <h1>Hello World</h1>
            <h3>Meu nome é {novoNome}</h3>
            <h4>Minha idade é {idade}</h4>
            <p>Soma: {soma(7, 4)} </p>
            <Frase />
            <Imagem />
        </div>
    );
}

export default App;
