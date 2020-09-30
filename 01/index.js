import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const enlaces = [`Home`,`Contacto`,`Redes`];

const Navegacion = () => (
  enlaces.map ((navegando, i) => <li key={i}><strong>{navegando}</strong></li>)
) 

const Titulo = (props) => (
<h1>El título: {props.titulo1}</h1>
) 

const Header = () => (
  <header>
  <Titulo titulo1="Aprendiendo React"/>
  </header>
  )

const Nav = () => (
<ul>
  <Navegacion />
</ul>
)
const Titulo2 = (props) => (
<h2>Titulo del Main: {props.titulo2}</h2>
)
const Imagen = (props) => (
  <img src={props.imagen} alt={props.titulo2}></img>
)
const Parrafo = (props) => (
  <strong>{props.parrafo}</strong>
)

const Main = () => (
  <main>
  <Titulo2 titulo2="Entendiendo un poco mas los Props"/>
  <div id="imagen"><Imagen imagen="https://via.placeholder.com/300x300/0000FF/000000/?text=La%20Imagen%20de%20React"/></div>          
  <p><span>Con este Parrafo probe que si o si se necesita poner una etiqueta en la propiedad(puse strong):</span> <Parrafo parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio alias sed amet assumenda unde ut commodi. Accusantium mollitia, veniam fugiat libero similique dolor minus, porro sapiente illo officiis excepturi!"/></p>
  </main>
)

const Foot = (props) => (<small>{props.footer}</small>)

const Footer = () => (
  <footer>
    <p><Foot footer="Aqui van las redes sociales"/></p>
  </footer>
)
const App = () =>(
 <>
 <Header />
 <nav><Nav /></nav>
 <Main />
 <Footer />
 </>
) 


ReactDOM.render(<App />,document.getElementById('root'));

