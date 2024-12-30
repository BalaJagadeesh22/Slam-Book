import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Form from './Form.jSX'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form/>
  </StrictMode>,
)