import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../src/components/Header/index.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
