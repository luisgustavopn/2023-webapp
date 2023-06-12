import { useState } from 'react'
import './App.css'

const Entrada = (props: any) => {

  return (
  <div>
    <label>
      nova tarefa
      <input type='text' value={props.valor} />
      <button>adicionar</button>
    </label>
  </div>
  )
}

const Tarefas = (props: any) => {
  return (
    <div className = 'card'>
      <ul>
        {props.valor.map( (item : string, index : number) => <li key={index}>{item}
        </li> )}
      </ul>
    </div>
  )
}


const Botao = (props: any) => {

  const [contador , setContador] = useState(0);

  const handleMudar = () => {
    setContador(contador + 1);
    console.log('Olá boa noite Zé da Manga')
  }

  return(
    <div>
      <button onClick={handleMudar}>
        O contador está em {contador}
      </button>
    </div>
  )
}

const MeuBotao =  (props:any) => {

  return(
    <div>
      <button onClick={props.funcao}>
        {props.titulo}
      </button>
    </div>
  )
}

function App() {
  const [tarefa, setTarefa] = useState('digite nova tarefa')
  const [tarefas, setTarefas] = useState(['tarefa um','tarefa 2'])
  const [count, setCount] = useState(0)
  const DarBomDia = () => {
    console.log("Olá bom dia")
  }
  const DarBoaTarde = () => {
    console.log("Olá boa tarde")
  }
  const DarBoaNoite = () => {
    console.log("Olá boa noite")
  }

  return (
    
    <>
      <Entrada valor={tarefa}/>
      <Tarefas valor={tarefas}/>
      <MeuBotao 
        titulo = {'Zé da Manga'}
        funcao = {DarBomDia}
      >
      </MeuBotao>

      <MeuBotao 
        titulo = {'Zé da Manga'}
        funcao = {DarBoaTarde}
      >
      </MeuBotao>

      <MeuBotao 
        titulo = {'Zé da Manga'}
        funcao = {DarBoaNoite}
      >
      </MeuBotao>
      
      <Botao/>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default App
