// src/components/admin/AdminPage.js

import React from 'react';
import AdminHeader from './header';
import Sidebar from './sidebar';
import AdminFooter from './footer';

const AdminPage = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <AdminHeader />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3" style={{ backgroundColor: '#f0f2f5' }}>
          <h2>Welcome to Admin Dashboard</h2>
          {/* Nội dung chính của trang */}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
