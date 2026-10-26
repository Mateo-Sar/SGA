import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import tema from "../src/tema.js"
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={tema} defaultMode = "system">
        <CssBaseline/>
        <App />
    </ThemeProvider>
   </BrowserRouter>
  </StrictMode>,
)
