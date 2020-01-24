import React, {useEffect, useState} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';



function App() {
  const [github_username, setGitHubUsername] = useState('');
  const [techs, setTechs] = useState('');
  
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  
  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
          const { latitude, longitude } = position.coords;

          setLatitude(latitude);
          setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    )
  }, []);

  async function handlerAddDev(e){
    e.preventDefault();
    
    const response = await api.post('/devs',{
      github_username,
      techs,
      latitude,
      longitude
    })
  }

  return (
    <div id="app" >
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handlerAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuario GitHub</label>
            <input name="github_username" id="github_username" required value={github_username} onChange={e => setGitHubUsername(e.target.value)}></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)}></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">latitude</label>
              <input  name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}></input>
              <div className="input-block">
                <label htmlFor="longitude">longitude</label>
                <input  name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}></input>
              </div>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/45801765?s=460&v=4" alt="artur"></img>
              <div className="user-info">
                <strong>Artur Conrado</strong>
                <span>React, react react</span>
              </div>
            </header>
            <p>BIOGRAFIA DO CARA QUE VC TA PUXANDO DO GITHUB</p>
            <a href="https://www.github.com/arturconrado">PERFIL DO GITHUB DO CAMARADA</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/45801765?s=460&v=4" alt="artur"></img>
              <div className="user-info">
                <strong>Artur Conrado</strong>
                <span>React, react react</span>
              </div>
            </header>
            <p>BIOGRAFIA DO CARA QUE VC TA PUXANDO DO GITHUB</p>
            <a href="https://www.github.com/arturconrado">PERFIL DO GITHUB DO CAMARADA</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/45801765?s=460&v=4" alt="artur"></img>
              <div className="user-info">
                <strong>Artur Conrado</strong>
                <span>React, react react</span>
              </div>
            </header>
            <p>BIOGRAFIA DO CARA QUE VC TA PUXANDO DO GITHUB</p>
            <a href="https://www.github.com/arturconrado">PERFIL DO GITHUB DO CAMARADA</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/45801765?s=460&v=4" alt="artur"></img>
              <div className="user-info">
                <strong>Artur Conrado</strong>
                <span>React, react react</span>
              </div>
            </header>
            <p>BIOGRAFIA DO CARA QUE VC TA PUXANDO DO GITHUB</p>
            <a href="https://www.github.com/arturconrado">PERFIL DO GITHUB DO CAMARADA</a>
          </li>
          
        </ul>
      </main>
    </div>
  );

  function newFunction(latitude) {
    setLatitude(latitude);
  }
}

export default App;
