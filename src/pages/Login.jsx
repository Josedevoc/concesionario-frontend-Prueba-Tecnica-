import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../services/api';
import '../styles/Login.css';
import logoImg from '../assets/Vector.svg';
import frameImg from '../assets/Frame.png';

function Login() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async () => {
    if (!form.username || !form.password) {
      setError('Por favor completa todos los campos');
      return;
    }
    setLoading(true);
    try {
      if (isRegister) {
        await register(form);
        setSuccess('Usuario creado! Ahora inicia sesión');
        setIsRegister(false);
        setForm({ username: '', password: '' });
      } else {
        const res = await login(form);
        localStorage.setItem('token', res.data.access_token);
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'Ocurrió un error');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logoImg} alt="logo" width="48" height="48" />
      </div>

      {/* Botón regresar */}
      <div className="login__back" onClick={() => navigate('/')}>
        ← Regresar
      </div>

      <div className="login__card">
        <h2 className="login__title">
          {isRegister ? 'Crear cuenta' : 'Bienvenido'}
        </h2>
        <p className="login__subtitle">
          {isRegister ? 'Regístrate para continuar' : 'Inicia sesión para continuar'}
        </p>

        <div className="login__field">
          <input
            type="text"
            name="username"
            placeholder="Usuario"
            value={form.username}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="login__field">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        {error && <p className="login__error">{error}</p>}
        {success && <p className="login__success">{success}</p>}

        <button className="login__btn" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Cargando...' : isRegister ? 'Registrarse' : 'Ingresar'}
        </button>

        <p className="login__toggle">
          {isRegister ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
          <span onClick={() => { setIsRegister(!isRegister); setError(''); setSuccess(''); }}>
            {isRegister ? ' Inicia sesión' : ' Regístrate'}
          </span>
        </p>
      </div>

      <div className="login__footer">
        <img src={frameImg} alt="motion" />
      </div>
    </div>
  );
}

export default Login;