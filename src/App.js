import React, { useState, useEffect } from 'react';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Preloader from './Componets/Preloader';
import Contact from './Pages/Contact';
import Admin from './Pages/Admin';
import Upload from './Pages/Upload';
import EditCategory from './Pages/EditCategory';


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
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/product' element={<Admin></Admin>}></Route>
            <Route path='/upload' element={<Upload></Upload>}></Route>
            <Route path="/edit/:id" element={<EditCategory />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
