import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Home.css';
import phoneImg from '../assets/phone.png';
import logoImg from '../assets/Vector.svg';

function Home() {
  const navigate = useNavigate();
  const [ripple, setRipple] = useState(null);

  const handleLogin = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y });
    setTimeout(() => navigate('/login'), 800);
  };

  return (
    <div className="home">
      <div className="home__logo">
        <img src={logoImg} alt="logo" width="48" height="48" />
      </div>

      {/* Botón iniciar sesión con ripple */}
      <div className="home__login-btn" onClick={handleLogin}>
        Iniciar sesión
        {ripple && (
          <span
            className="home__ripple"
            style={{ left: ripple.x, top: ripple.y }}
          />
        )}
      </div>

      <div className="home__sides">
        <div className="home__side--right"></div>
      </div>

      <div className="home__image">
        <img src={phoneImg} alt="" />
      </div>

      <div className="home__content">
        <div className="home__texts">
          <div className="home__text--back">
            <h1>BIENVENIDO A</h1>
          </div>
          <div className="home__text--front" onClick={handleLogin}>
            <h2>MONITORING INNOVATION</h2>
          </div>
        </div>
      </div>

      <div className="home__links">
        <a href="https://monitoringinnovation.com/" target="_blank" rel="noreferrer">MONITORINGINNOVATION</a>
        <a href="https://gpscontrol.co/" target="_blank" rel="noreferrer">GPS CONTROL</a>
        <a href="https://github.com/Josedevoc/concesionario-frontend-Prueba-Tecnica-" target="_blank" rel="noreferrer">Link repo front</a>
        <a href="https://github.com/Josedevoc/concesionario-backend" target="_blank" rel="noreferrer">Link repo back</a>
      </div>
    </div>
  );
}

export default Home;