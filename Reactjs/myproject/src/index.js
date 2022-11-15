import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Category from './Category';
import MyCommonPart from './MyCommonPart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRoutes() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyCommonPart />} >
        <Route path='/category' element={<Category/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<MyRoutes />);


