import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './header';
import Banner from './banner';
import MainContent from './mainContent';
import Footer from './footer';
import QuickActions from './quickActions';
import useUserStore from '../../store/userStore';

function Homepage() {
  const setUser = useUserStore((state) => state.setUser);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/me', { withCredentials: true });
        console.log('User data:', response.data);
        setUser(response.data);
        // toast.success('User data fetched successfully', { autoClose: 3000 });
      } catch (error) {
        console.error('Error fetching user data:', error);
        // toast.error('Error fetching user data', { autoClose: 3000 });
      }
    };

    if (isFirstRender.current) {
      fetchUserData();
      isFirstRender.current = false;
    }
  }, []); // Remove user from the dependency array

  return (
    <div className="App">
      <Header />
      <Banner />
      <MainContent />
      <QuickActions />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Homepage;
