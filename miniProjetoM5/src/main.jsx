import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../src/components/Header/index.jsx'
import './index.css'
import Home from '../src/pages/Home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>,
)
