import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/main';
import Custom from './pages/custom';
import Login from './pages/login';
import Calendarpage from './pages/Calendar';
import Mypage from './pages/My';
import Homepage from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      {/* 라우팅하는 예제 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/custom" element={<Custom/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/calendar" element={<Calendarpage/>}></Route>
          <Route path="/my" element={<Mypage/>}></Route>
          <Route path="/Home" element={<Homepage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;