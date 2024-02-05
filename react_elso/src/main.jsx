import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import { Content } from './Content.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Content darabszam={2} />
  </React.StrictMode>,
)
