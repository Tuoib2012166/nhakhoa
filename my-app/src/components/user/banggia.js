// App.js
import React from 'react';
import Header from './components/Header';
import PriceTable from './components/PriceTable';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <section id="price-list">
        <h1>Bảng Giá Dịch Vụ Dán Sứ Veneer</h1>
        <PriceTable
          data={[
            { brand: 'IPS Emax', origin: 'Đức', warranty: '10 năm', price: '6.000.000' },
            { brand: 'Lisi', origin: 'Mỹ', warranty: '10 năm', price: '7.000.000' },
            // Add other rows here...
          ]}
        />
        <p>Giá trên chưa bao gồm ưu đãi tốt nhất của tháng. Quý khách vui lòng liên hệ để nhận bảng giá ưu đãi chi tiết.</p>
      </section>

      <section id="price-list">
        <h1>Bảng giá dịch vụ Bọc Răng Sứ</h1>
        <PriceTable
          data={[
            { brand: 'Răng sứ Katana', origin: 'Đức', warranty: '3 năm', price: '2.500.000' },
            { brand: 'Răng sứ Venus', origin: 'Đức', warranty: '3 năm', price: '3.000.000' },
            // Add other rows here...
          ]}
        />
        <p>Giá trên chưa bao gồm ưu đãi tốt nhất của tháng. Quý khách vui lòng liên hệ để nhận bảng giá ưu đãi chi tiết.</p>
      </section>

      <section id="price-list">
        <h1>Bảng giá dịch vụ Niềng Răng – Chỉnh Nha</h1>
        <PriceTable
          data={[
            { service: 'Mắc cài kim loại tiêu chuẩn (buộc chun)', package: '', price: '30.000.000 - 40.000.000' },
            { service: 'Mắc cài kim loại Tự động', package: '', price: '35.000.000 - 45.000.000' },
            // Add other rows here...
          ]}
          columns={['Dịch Vụ', 'Gói Dịch Vụ', 'Giá Niêm Yết']}
        />
        <p>Giá trên chưa bao gồm ưu đãi tốt nhất của tháng. Quý khách vui lòng liên hệ <strong>0976 111 888</strong> để nhận bảng giá ưu đãi chi tiết.</p>
      </section>
      <Footer />
    </div>
  );
}

export default App;

