import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const scriptId = 'fchat-script';
    
    // Kiểm tra xem script đã tồn tại chưa
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.fchat.vn/assets/embed/webchat.js?id=66f6418bb8486d35ca68dfc2';
      script.async = true;

      // Xử lý lỗi khi script không tải được
      script.onerror = () => {
        console.error('Error loading chatbot script');
      };

      // Thêm script vào body
      document.body.appendChild(script);
    }

    // Clean up script khi component unmount
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null; // Không cần render gì trong component này
};

export default Chatbot;
