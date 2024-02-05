import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import { Content } from './Content.jsx';
import { Footer } from './Footer.jsx';
import './index.css';


const sajatNev = 'Tari Attila';
const link = "https://github.com/finyo3549/tariattila_react-elso.git";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Header />
    <Content darabszam={50} />
    <Footer name={sajatNev} link={link} />
  </React.StrictMode>,
)
