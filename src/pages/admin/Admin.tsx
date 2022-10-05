import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/admin-page/header/Header';
import styles from './admin.module.css';

function Admin() {
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
