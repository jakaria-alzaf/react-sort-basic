import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ArticlesData } from './data/data.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App articles={ArticlesData} />
  </React.StrictMode>,
)
