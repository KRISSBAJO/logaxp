import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer';
import PageNotFound from './Component/Home/PageNotFound';

function App() {
  const [showJoinModal, setShowJoinModal] = useState(false);

  const toggleJoinModal = () => {
    setShowJoinModal(!showJoinModal);
  };

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header onJoinClick={toggleJoinModal} />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home showJoinModal={showJoinModal} toggleJoinModal={toggleJoinModal} />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
