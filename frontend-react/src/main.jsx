import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import tema from "../src/tema.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={tema} defaultMode = "system"/>
    <CssBaseline/>
    <App />
  </StrictMode>,
)
