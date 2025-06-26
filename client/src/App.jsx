import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from '../src/pages/Home';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;