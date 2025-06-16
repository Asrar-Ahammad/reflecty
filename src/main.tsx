import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Signup from './pages/Signup.tsx'
import Login from './pages/Login.tsx'
import Page404 from './pages/Page404.tsx'
import Dashboard from './pages/Dashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<App />} />
          <Route path='sign-up' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
