# Concesionario Frontend

Aplicación web desarrollada con React + Vite para la gestión de vehículos de un concesionario.

##  Demo

[https://josedevoc.github.io/concesionario-frontend-Prueba-Tecnica-/](https://josedevoc.github.io/concesionario-frontend-Prueba-Tecnica-/)

> ⚠️ El backend está en Render (plan gratuito) y puede tardar ~30 segundos en despertar. Actívalo antes de usar la app:
> [https://concesionario-backend-fastapi.onrender.com/](https://concesionario-backend-fastapi.onrender.com/)

## Tecnologías

- React 19
- Vite
- React Router DOM (HashRouter para GitHub Pages)
- Framer Motion
- Axios
- JWT (autenticación)

##  Funcionalidades

- **Home** con animaciones, media luna y navegación al login
- **Login / Registro** con autenticación JWT
- **Dashboard protegido** con CRUD completo de vehículos
- **Animaciones** typewriter al editar/eliminar y partículas al crear
- **Iconos rosados** al activar el formulario con el botón `+`
- **Diseño responsive** basado en Figma con fuente Montserrat y colores corporativos

## Instalación
```bash
git clone https://github.com/Josedevoc/concesionario-frontend-Prueba-Tecnica-
cd concesionario-frontend-Prueba-Tecnica-
npm install
npm run dev
```

##  Variables de entorno

Crea un archivo `.env` en la raíz:
```
VITE_API_URL=https://concesionario-backend-fastapi.onrender.com
```

##  Despliegue en GitHub Pages
```bash
npm run deploy
```

##  Estructura
```
src/
├── assets/
│   ├── Frame.png           # Logo motion footer
│   ├── Persona.png
│   ├── Persona_rosada.png
│   ├── Ubicacion.png
│   ├── Ubicacion_rosado.png
│   ├── Vector.svg          # Logo principal
│   ├── Vehiculo.png
│   ├── Vehiculo_rosado.png
│   ├── editar.png
│   ├── eliminar.png
│   └── phone.png
├── components/
│   ├── CurvedLine.jsx
│   ├── VehicleForm.jsx     # Formulario CRUD con animaciones
│   └── VehicleTable.jsx    # Tabla con animaciones Framer Motion
├── pages/
│   ├── Home.jsx            # Página de inicio con animaciones
│   ├── Login.jsx           # Login y registro con JWT
│   └── Dashboard.jsx       # Dashboard protegido
├── services/
│   └── api.js              # Axios + interceptor JWT
├── styles/
│   ├── Dashboard.css
│   ├── Home.css
│   ├── Login.css
│   └── variables.css
├── App.jsx                 # Rutas con PrivateRoute
├── main.jsx
└── index.css
```

##  Diseño

Colores corporativos:
- Blue1: `#00249C`
- Blue2: `#40CEE4`
- Grey1: `#C5C5C5`
- Red1: `#C6007E`

Fuente: **Montserrat**