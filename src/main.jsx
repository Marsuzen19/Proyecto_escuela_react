import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importes de Bootstrap (Primero CSS, luego el JS para los componentes interactivos)
import 'bootstrap/dist/css/bootstrap.min.css'
//para que funcione el despliegue
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)