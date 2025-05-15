import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';
import UsersList from './components/UsersList';  // ← import your component


const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/users" element={<MainContent dataUrl="http://54.236.88.92:3001/api/users" />} />
            <Route path="/data2" element={<MainContent dataUrl="http://example.com/api/data2" />} />
            <Route path="/data3" element={<MainContent dataUrl="http://example.com/api/data3" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

