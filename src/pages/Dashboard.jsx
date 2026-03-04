import { useState, useEffect } from 'react';
import VehicleForm from '../components/VehicleForm';
import VehicleTable from '../components/VehicleTable';
import { getVehicles, createVehicle, updateVehicle, deleteVehicle } from '../services/api';
import '../styles/Dashboard.css';
import frameImg from '../assets/Frame.png';

function Dashboard() {
  const [vehicles, setVehicles] = useState([]);
  const [editingVehicle, setEditingVehicle] = useState(null);

  const fetchVehicles = async () => {
    try {
      const res = await getVehicles();
      setVehicles(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    let ignore = false;
    const load = async () => {
      try {
        const res = await getVehicles();
        if (!ignore) setVehicles(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    load();
    return () => { ignore = true; };
  }, []);

  const handleCreate = async (data) => {
    try {
      await createVehicle(data);
      fetchVehicles();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (data) => {
    try {
      await updateVehicle(editingVehicle.id, data);
      setEditingVehicle(null);
      fetchVehicles();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteVehicle(id);
      setVehicles(prev => prev.filter(v => v.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (vehicle) => {
    setEditingVehicle(vehicle);
  };

  const handleCancel = () => {
    setEditingVehicle(null);
  };

  return (
    <div className="dashboard">
      <div className="dashboard__main">
        <div className="dashboard__left">
          <VehicleForm
            onSubmit={editingVehicle ? handleUpdate : handleCreate}
            onCancel={handleCancel}
            editingVehicle={editingVehicle}
          />
        </div>
        <div className="dashboard__right">
          <VehicleTable
            vehicles={vehicles}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
      <div className="dashboard__footer">
        <img src={frameImg} alt="motion" />
      </div>
    </div>
  );
}

export default Dashboard;