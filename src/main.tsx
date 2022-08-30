import React from 'react'
import ReactDOM from 'react-dom/client' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { Search } from './components/Search'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
   </BrowserRouter>
   <Footer />
  </React.StrictMode>
)
