import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import { GlobalProvider } from './context/GlobalState';  // Import the GlobalProvider

function App() {
  return (
    <GlobalProvider>  {/* Wrapping the application with GlobalProvider */}
      <Router>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
