// src/components/admin/AdminPage.js

import { React, useEffect } from 'react';
import axios from 'axios';
import useUserStore from '../../store/userStore';
import DoctorHeader from './header';
import Sidebar from './sidebar';
import DoctorFooter from './footer';

const AdminPage = () => {
  const { setUser } = useUserStore();

  useEffect(() => {
    axios.get('http://localhost:8080/me', { withCredentials: true })
      .then(response => {
        console.log('User data:', response.data);
        setUser(response.data)
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <DoctorHeader />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3" style={{ backgroundColor: '#f0f2f5' }}>
          <h2>Welcome to Doctor Dashboard</h2>
          {/* Nội dung chính của trang */}
        </div>
      </div>
      <DoctorFooter />
    </div>
  );
};

export default AdminPage;
