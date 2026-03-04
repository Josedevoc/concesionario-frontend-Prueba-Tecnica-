import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import phoneImg from '../assets/phone.png';
import logoImg from '../assets/Vector.svg';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Logo */}
      <div className="home__logo">
        <img src={logoImg} alt="logo" width="48" height="48" />
      </div>

      {/* Animacion de la media esfera */}
      <div className="home__sides">
        <div className="home__side--right"></div>
      </div>

      {/* Phone image - absolute para superponerse al texto */}
      <div className="home__image">
        <img src={phoneImg} alt="" />
      </div>

      {/* Contenido principal */}
      <div className="home__content">
        <div className="home__texts">
          <div className="home__text--back">
            <h1>BIENVENIDO A</h1>
          </div>
          <div className="home__text--front" onClick={() => navigate('/login')}>
            <h2>MONITORING INNOVATION</h2>
          </div>
        </div>
      </div>

      {/* Bottom links */}
      <div className="home__links">
        <a href="https://monitoringinnovation.com/" target="_blank" rel="noreferrer">
          MONITORINGINNOVATION
        </a>
        <a href="https://gpscontrol.co/" target="_blank" rel="noreferrer">
          GPS CONTROL
        </a>
        <a href="https://github.com/Josedevoc/concesionario-frontend-Prueba-Tecnica-" target="_blank" rel="noreferrer">
          Link repo front
        </a>
        <a href="https://github.com/Josedevoc/concesionario-backend" target="_blank" rel="noreferrer">
          Link repo back
        </a>
      </div>
    </div>
  );
}

export default Home;