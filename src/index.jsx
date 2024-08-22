import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import Survey from './pages/Survey/index.jsx';
import Header from './components/Header/index.jsx';
import ClientForm from './components/ClientForm/index.jsx';
import FreelanceForm from './components/FreelanceForm/index.jsx';

const rootElement = document.getElementById('root'); // Sélectionne l'élément DOM où tu veux rendre ton app
const root = ReactDOM.createRoot(rootElement);
 
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />}>
        { /* Nous imbriquons nos composants dans survey */}
        <Route path="client" element={<ClientForm />} />
        <Route path="freelance" element={<FreelanceForm />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)




