import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const enlaces = [`Posiciones`,`Fixture`,`Otras Ligas`, `Contacto`, `Acerca de`];

const equipos = [`Sportivo Glorias de Barracas`,`Deportivo Merlo Unido`,`Asociación Buenos Aires`, `Club Sociedad de Fomento`];

const img = ["https://via.placeholder.com/150x150/0000FF/808080/?text=La Gran Imagen", "https://via.placeholder.com/150x150/FF0000/?text=Imagen 2", "https://via.placeholder.com/150x150/7c69a9/808080/?text=Imagen 3", "https://via.placeholder.com/150x150/008000/?text=Imagen 4", "https://via.placeholder.com/150x150/eb0066/808080/?text=Imagen 5"];

const i = Math.floor(Math.random() * (img.length))

const Navegacion = () => (
  enlaces.map ((navegando, i) => <li key={i}><strong>{navegando}</strong></li>)
) 

const Titulo = (props) => (
<h1>{props.titulo1}</h1>
) 

const Imagen = () => (
  <img src={img[i]} alt="imagen"></img>  
)

const Header = () => (
  <header>
  <Titulo titulo1="Aprendiendo React"/>
  <Imagen />
  </header>
  )

const Nav = () => (
<ul>
  <Navegacion />
</ul>
)

const Tabla = () => (
equipos.map((equipo, i) => (
<tr key={i}>
<td>{i+1}</td>
<td>{equipo}</td>
<td><input type="button" value="Ingresar" id="btn" className="btn btn-info"/></td>
</tr>  
))
)

const Main = () => (
  <main>
  <table className="table">
    <thead className="thead-dark">
      <tr>
        <th>Puesto</th>
        <th>Equipo</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
    <Tabla />
    </tbody>
  </table>
  </main>
)

const App = () =>(
 <>
 <Header />
 <div id="contenedor">
 <nav><Nav /></nav>
 <Main />
 </div>
 </>
) 


ReactDOM.render(<App />,document.getElementById('root'));

