import logo from './logo.svg';
import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/header';
import Main from './Components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotificationHtml from './Components/UI/Notification';
function App() {
   const notification = useSelector(state => state.notification.notification);

  return (
   <BrowserRouter>
      <div className='all-main'>
         {notification && <NotificationHtml status={notification.status} title={notification.title} message={notification.message} />}
         <Header/>
         <Main/>
         <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
