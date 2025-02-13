import React from 'react';
import { Navbar, Footer, UserProfile }  from './components';
import { Home, About, Services, WebDev, Contact, Login, SignUp, PrivateRoute, Dashboard, Projects, Invoices } from './pages';

import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/webdev' element={<WebDev />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>

        
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>} 
        />

        <Route path='/profile' element={
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>} 
        />
        
        <Route path='/projects' element={
          <PrivateRoute>
            <Projects />
          </PrivateRoute>} 
        />

        <Route path='/invoices' element={
          <PrivateRoute>
            <Invoices />
          </PrivateRoute>} 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
