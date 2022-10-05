import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainCategories from './components/main-page/categories/Categories';
import Main from './pages/main/Main';
import MainCards from './components/main-page/cards/Cards';
import Admin from './pages/admin/Admin';
import ProtectedRoute from './hocs/ProtectedRoute';
import AdminCategories from './components/admin-page/categories/Categories';
import AdminCards from './components/admin-page/cards/Cards';

import './styles/normalize.css';
import './styles/vars.css';
import './styles/base.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<MainCategories />} />
        <Route path="cards/:categoryId" element={<MainCards />} />
      </Route>
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminCategories />} />
        <Route path="cards/:categoryId" element={<AdminCards />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
