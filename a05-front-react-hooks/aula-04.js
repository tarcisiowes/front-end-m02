
// return retorna apenas um "item"
// para retornar varios use ( ) pra multiplas linhas e coloque todo conteudo dentro de uma div
// //======================================================
// componentes precisao ser com a primeira letra maiuscula para nao conflitar com tags html
// //=======================================================
// *Sintaxe import/export - Assíncrono - ESModules

// //util.js
// export const soma  = (x, y) => x + y;

// //index.js
// import { soma } from './util.js';
// console.log(soma(2, 4));

// //util.js
// export default (x, y) => x + y;

// //index.js
// import qlqrNome from './util.js';
// console.log(soma(2, 4));
//=============================================================


//================= Desestruturacao de Array

// const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

// const janeiro = meses[0] 
// const fevereiro = meses[1]
// const marco = meses[2]
// const abril = meses[3]
//forma inicial mais longa

// const [janeiro, , , abril] = meses
//desta forma posso ignorar a posicao escolhida e encurta o code e da um skip

// console.log(meses)
// console.log(janeiro)
// // console.log(fevereiro)
// // console.log(marco)
// console.log(abril)

//============================================ REST se aplica aos elementos restante da array que nao foram selecionados

// const [janeiro, , , abril, ...mesesRestante] = meses

// console.log(mesesRestante)

//============================================ Concatenando arrays e outros itens
// const primeiroSemestre = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']

// const segundoSemestre = ['Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

// const mesesDoAnos = ['Start', ...primeiroSemestre, ...segundoSemestre, 'End']

// console.log(mesesDoAnos)

//======================================== exercicio 01

// const professoresBackend = ['Guido', 'Guilherme', 'Juninho', 'Leo']
// const professoresFrontend = ['Daniel', 'Dina', 'Vitinho']

// //01a
// const professoresCubos = [...professoresBackend, ...professoresFrontend]

// console.log('Professores da Cubos: ', professoresCubos)

// //01b
// const [, ,terceiro] = professoresBackend
// console.log('Terceiro de back: ', terceiro)

// //01c
// const [primeiro, ... outrosProfessores] = professoresCubos
// console.log('Primeiro de Back: ' , primeiro, outrosProfessores)
// console.log('Outros professores: ' , outrosProfessores)

// //01d
// const [primeiroFront, ... outrosProfessoresFront] = professoresFrontend
// const frontOrdenado = [... outrosProfessoresFront, primeiroFront]
// console.log('Professores de Front reordenados: ',frontOrdenado)

//================================================ Eventos no React

// import './App.css'

// function alerta(e) {
//     alert('Olá!')
//     console.log(e)
// }

// function App() {

//     return (
//         <div className="app">
//             <button onClick={(e) => alerta(e)}>Clique aqui</button>
//         </div>
//     )
// }

// export default app;

//============================================ Contador no React

// import { useState } from 'react'
// import './App.css'


// function App() {

//     const [contador, setContador] = useState(0)

//     return (
//         <div >
//             {contador}
//             <button onClick={() => {setContador(contador + 1)}}>Contador</button>
//         </div>
//     )
// }

// export default App;

//============================================== Exercicio 02

//contador -/+
// import { useState } from 'react'
// import './App.css'


// function App() {

//     const [contador, setContador] = useState(0)

//     function contando(soma) {

//         const novoContador = contador + soma;
//         if (novoContador < 0 || novoContador > 100) return

//         setContador(novoContador)
//     }

//     return (
//         <div className="app">
            
//             <button onClick={() => contando( -10 )}>- 10</button>
//             <button onClick={() => contando( -1 )}>- 1</button>
//             {contador}
//             <button onClick={() => contando( +1 )}>+ 1</button>
//             <button onClick={() => contando( +10 )}>+ 10</button>
//         </div>
//     )
// }

// export default App;

// //======================================== Prevent Default 


// import { useState } from 'react'
// import './App.css'

// function handlerSubmit(e) {

//     e.preventDefault()
//     console.log(e)
// }

// function App() {

//     const [contador, setContador] = useState(0)

//     return (
//         <div >
//             {contador}
//             <button onClick={() => {setContador(contador + 1)}}>Contador</button>
//             <form action="GET">
//                 <button type="submit" onClick={(e) => handlerSubmit(e)}>Enviar Formulario</button>
//             </form>
//         </div>
//     )
// }

// export default App;

//========================================== useEffect()

import { useEffect, useState } from 'react'
import './App.css'


function App() {

    const [contador, setContador] = useState(0)
    const [segContador, setSegContador] = useState(0)

    function contando(contador) {

        alert(`Olá! essa é sua ${contador} visualização`)

    }

    useEffect(() => {
        boas vindas(contador)
    },[contador,segContador]) //entre colchetes passamos o elemento em que desejamos que o evento ocorra ao atualizar seu estado, se for passado vazio [] sera apenas quando a pagina for carregada 

    return (
        <div className="app">
            
            <button onClick={() => setContador(contador - 1)}>- 1</button>
            {contador}
            <button onClick={() => setContador(contador + 1)}>+ 1</button>
            
            <button onClick={() => setSegContador(segContador - 1)}>- 1</button>
            {segContador}
            <button onClick={() => setSegContador(segContador + 1)}>+ 1</button>
        </div>
    )
}

export default App;