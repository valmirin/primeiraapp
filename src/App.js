import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import Header from './components/header/header';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Detalhes from './pages/detalhes/detalhes';


function App() {
  //const lista = ['Valmir', 'Gabriela', 'Celia']
  // const numero = 30
  // function retornaNome(){
  //   if(numero > 30) return 'Valmir'
  //   if(numero < 30) return 'Gabriela'
  //   return 'Não tem nome algum'
  // }

  // const alunos = [
  //   {nome: 'Valmir', aluno: true},
  //   {nome: 'Gabriela', aluno: true},
  //   {nome: 'Celia', aluno: false},
  //   {nome: 'Joao', aluno: false},
  //   {nome: 'Pedro', aluno: true},
  // ]

  // function evento() {
  //   alert('O evento foi disparado')
  // }

  // Adicionando um evento dentro do JS

  // window.addEventListener('scroll', () => console.log('Evento aconteceu'))

  // Criando nosso primeiro Hook
  // const [carregando, setCarregando] = useState(true)
  // const [contador, setContador] = useState(0)

  // Criando nosso useEffect
  // useEffect(() => {
  //   console.log('Carregou pela primeira vez');

  // }, [])

  // useEffect(() => {
  //   console.log('Carregou pelo Contador');

  // }, [contador])

  // useEffect(() => {
  //   console.log('Carregou pelo Carregando');

  // }, [carregando])

  // useEffect(() => {
  //   console.log('Carregou pelo Contador');

  //   return () => {

  //   }
  // }, [contador])

  // Criando nosso useRef utilizando useEffect
  // const video = useRef();
  // useEffect(() => {
  //   console.log(video.current)
  // }, [])

  // Criando useRef utilizando função callback
  // Para executá-lo basta chamar essa função em algum evento dentro do return da App
  // function callback() {
  //   console.log(video.current)
  // }

  // Criando o useMemo
  // const valorMemorizado = useMemo(() => {
  //   return ("USE MEMO")
  // }, [])
  // console.log(valorMemorizado)

  // Criando o useCallBack
  // const callback = useCallback(() => {
  //   console.log('USE CALLBACK')
  // }, [])

  // Estudando sobre useContext
  const [login, setLogin] = useState(false);



  return (
    <div className="App">
      <header className="App-header">

        {/* <div>{lista}</div> */}
        {/* <div>{retornaNome()}</div> */}

        {/* <div>
          {alunos.map((aluno) => (
            <>
              <div>{aluno.nome}</div>
              <div>Aluno: 
                <spam style = {aluno.aluno ? {color: 'green'} : {color:'red'}}> {aluno.aluno ? 'Sim' : 'Não'}
                </spam>
              </div>
            </>
            ))}
        </div> */}

        {/* <>
          <Button name='Botão 1' active={true}/>
          <Button name='Botão 2' active={false}/>
          <Button name='Botão 3' active={false}/>
          <Button name='Botão 4' active/>
          <Button name='Botão 5' />
        </>  */}

        {/* <Header/> */}

         {/* chamando o evento criado */}
        {/* <div style={{height: '200vh'}}> 
          <spam onClick={() => evento()}>Evento</spam>
          <Button onClick={() => evento()} name='Botão 1' active />
        </div> */}

        {/* <div>
          {carregando ? <spam>Carregando...</spam> : <Button name='Botão 1' active />}
          <button onClick={() => {
            setCarregando(false)
          }}>Carregar Site</button>
        </div> */}

        {/* <div>
          {carregando ? <spam>Carregando...</spam> : <Button name='Botão 1' active />}
          <button onClick={() => setCarregando(!carregando)}>{carregando ? 'Carregar Site' : 'Voltar para carregamento'}
          </button>
        </div> */}

        {/* <div>
          {carregando ? 
          <spam>Carregando...</spam> 
          : 
          <div>
            <button onClick={() => setContador(contador + 1)}>Adicionar</button>
            <spam>{contador}</spam>
          </div>
          }
          <button onClick={() => setCarregando(!carregando)}>{carregando ? 'Carregar Site' : 'Voltar para carregamento'}
          </button>
          <Button name='Alterar valor' active onClick={setContador} />

          <video ref={video}></video>
        </div>  */}

        <BrowserRouter>
          {/* <Header /> */}
          {/* <Home /> */}
          <Routes>
            <Route path='/' element={<Home />}/> 
            <Route path='/contato' element={<Contato />}/> 
            <Route path='/fotos' element={<Fotos />}/> 
            {/* criando a rota de detalhes, esperando receber o id, parâmetro dinâmico */}
            <Route path='/detalhes/:id' element={<Detalhes />}/> 
          </Routes>
        </BrowserRouter>
        

        {/* ----------------------------------------------------- */}
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}

        
        {/* <div className='teste'>Teste</div> */}
      </header>
    </div>
  );
}

export default App;
