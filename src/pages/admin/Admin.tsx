import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getCategories } from '../../api/categories';
import Header from '../../components/admin-page/header/Header';
import { setCategories } from '../../store/slices/common';
import styles from './admin.module.css';

function Admin() {
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories().then((categories) => dispatch(setCategories(categories)));
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Admin;
