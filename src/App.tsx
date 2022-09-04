import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Categories from './components/categories/Categories';
import Main from './pages/main/Main';
import Cards from './components/cards/Cards';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Categories />} />
        <Route path="cards/:categoryId" element={<Cards />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
