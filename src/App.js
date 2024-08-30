import React, { useState, useEffect } from 'react';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Preloader from './Componets/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
