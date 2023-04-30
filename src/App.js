import './App.css';
import React, {useState} from 'react';


const Notify = ({texto}) => {
  if ( !texto ) {
    return null
  }
  return (
    <div style={{color: 'red'}}>
      {texto}
    </div>
  )
}


function App() {
  
  const [mensaje, setMensaje] = useState(null)
  const [texto, setTexto] = useState('')

  const notify = (message) => {
    setMensaje(message)
    setTimeout(() => {
      setMensaje(null)
    }, 10000)
  }

  const submit = async (event) => {
    event.preventDefault()

    const texto2 = texto.toLowerCase()
    if (texto2.includes('poxo') && (texto2.includes('demenx') || texto2.includes('memo'))){
      notify('La unica verdad es que Demenx es Dios and Poxo SUCKS')
    } else if (texto2.includes('demenx') || texto2.includes('memo')){
      notify('Demenx es el carrito Supremo')
    } else if (texto2.includes('poxo')){
      notify('Poxo es un noob')
    } else {
      notify('IDK pregunta sobre demenx o Poxo')
    }
    setTexto('')
  }

  return (
    <div className="App">
      <Notify texto={mensaje} />
      <form onSubmit={submit}>
        <div>
          Escribe alguna wea
          <div>
          <input 
            value={texto}
            onChange={({ target }) => setTexto(target.value)} />
            </div>
        </div>
      </form>
    </div>
  );
}

export default App;
