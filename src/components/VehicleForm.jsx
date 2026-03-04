import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import personaImg from '../assets/Persona.png';
import ubicacionImg from '../assets/Ubicacion.png';
import vehiculoImg from '../assets/Vehiculo.png';
import personaRosadoImg from '../assets/Persona_rosada.png';
import ubicacionRosadoImg from '../assets/Ubicacion_rosado.png';
import vehiculoRosadoImg from '../assets/Vehiculo_rosado.png';

function useTypewriter(target, active) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (!active || !target) {
      setDisplayed(target || '');
      return;
    }
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(target.slice(0, i + 1));
      i++;
      if (i >= target.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [target, active]);

  return displayed;
}

function VehicleForm({ onSubmit, onCancel, editingVehicle }) {
  const [isActive, setIsActive] = useState(false);
  const [form, setForm] = useState({ marca: '', localidad: '', aspirante: '' });
  const [flyingText, setFlyingText] = useState(null);
  const [typing, setTyping] = useState(false);

  const marcaTyped = useTypewriter(form.marca, typing);
  const localidadTyped = useTypewriter(form.localidad, typing);
  const aspiranteTyped = useTypewriter(form.aspirante, typing);

  useEffect(() => {
    if (editingVehicle) {
      Promise.resolve().then(() => {
        setTyping(false);
        setForm({
          marca: editingVehicle.marca,
          localidad: editingVehicle.localidad,
          aspirante: editingVehicle.aspirante,
        });
        setIsActive(true);
        setTimeout(() => setTyping(true), 50);
      });
    } else {
      Promise.resolve().then(() => {
        setTyping(false);
        setForm({ marca: '', localidad: '', aspirante: '' });
        setIsActive(false);
      });
    }
  }, [editingVehicle]);

  const handleChange = (e) => {
    setTyping(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.marca || !form.localidad || !form.aspirante) return;
    setFlyingText({ ...form });
    setTimeout(() => {
      onSubmit(form);
      setForm({ marca: '', localidad: '', aspirante: '' });
      setIsActive(false);
      setFlyingText(null);
      setTyping(false);
    }, 600);
  };

  const handleCancel = () => {
    setForm({ marca: '', localidad: '', aspirante: '' });
    setIsActive(false);
    setTyping(false);
    onCancel();
  };

  return (
    <div className="vehicle-form">
      <div className="vehicle-form__card vehicle-form__card--open">

        {/* + dentro del card esquina superior izquierda */}
        <button className="vehicle-form__toggle" onClick={() => setIsActive(!isActive)}>
          <span className={`vehicle-form__plus ${isActive ? 'open' : ''}`}>+</span>
        </button>

        <div className="vehicle-form__field">
          <img src={isActive ? vehiculoRosadoImg : vehiculoImg} alt="vehiculo" className="vehicle-form__icon" />
          <input
            type="text"
            name="marca"
            placeholder="Marca"
            value={typing ? marcaTyped : form.marca}
            onChange={handleChange}
          />
        </div>
        <div className="vehicle-form__field">
          <img src={isActive ? ubicacionRosadoImg : ubicacionImg} alt="ubicacion" className="vehicle-form__icon" />
          <input
            type="text"
            name="localidad"
            placeholder="Localidad"
            value={typing ? localidadTyped : form.localidad}
            onChange={handleChange}
          />
        </div>
        <div className="vehicle-form__field">
          <img src={isActive ? personaRosadoImg : personaImg} alt="persona" className="vehicle-form__icon" />
          <input
            type="text"
            name="aspirante"
            placeholder="Aspirante"
            value={typing ? aspiranteTyped : form.aspirante}
            onChange={handleChange}
          />
        </div>

        <div className={`vehicle-form__actions ${isActive ? 'vehicle-form__actions--visible' : ''}`}>
          {editingVehicle ? (
            <>
              <button className="vehicle-form__btn--cancel-icon" onClick={handleCancel}>✕</button>
              <button className="vehicle-form__btn--confirm-icon" onClick={handleSubmit}>✓</button>
            </>
          ) : (
            <>
              <button className="vehicle-form__btn--cancel" onClick={handleCancel}>Cancelar</button>
              <button className="vehicle-form__btn--create" onClick={handleSubmit}>Crear</button>
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {flyingText && (
          <motion.div
            className="vehicle-form__flying"
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x: '60vw', y: '-10vh', opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {flyingText.marca} — {flyingText.localidad} — {flyingText.aspirante}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default VehicleForm;