import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Editor} from"@craftjs/core";
import DragButton from './DragComponents/DragButton.jsx'
import { Container } from './Components/Container.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Editor resolver={{DragButton,Container}}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Editor>
    
  </StrictMode>,
)
