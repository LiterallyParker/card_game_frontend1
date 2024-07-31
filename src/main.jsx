import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/Authorization.jsx'
import { CardsProvider } from './context/Cards.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CardsProvider>
        <App />
      </CardsProvider>
    </AuthProvider>
  </React.StrictMode>,
)
