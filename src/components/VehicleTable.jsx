import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import editarImg from '../assets/editar.png';
import eliminarImg from '../assets/eliminar.png';

function VehicleTable({ vehicles, onEdit, onDelete }) {
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = (id) => {
    setDeletingId(id);
    setTimeout(() => {
      onDelete(id);
      setDeletingId(null);
    }, 400);
  };

  return (
    <div className="vehicle-table">
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Sucursal</th>
            <th>Aspirante</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {vehicles.map((v) => (
              <motion.tr
                key={v.id}
                initial={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.4 }}
              >
                <td>{v.marca}</td>
                <td>{v.localidad}</td>
                <td>{v.aspirante}</td>
                <td className="vehicle-table__actions">
                  <button className="vehicle-table__edit" onClick={() => onEdit(v)}>
                    <img src={editarImg} alt="editar" />
                  </button>
                  <button className="vehicle-table__delete" onClick={() => handleDelete(v.id)}>
                    <img src={eliminarImg} alt="eliminar" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
}

export default VehicleTable;