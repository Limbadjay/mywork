import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Home from './Home';
import PageNotFound from './PageNotFund';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function RectDome()
{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element=<Home/>/>
      <Route path='/About' element=<About/>/>
      <Route path='/Contact' element=<Contact/>/>
      <Route path='/Blog' element=<Blog/>/>
      <Route path='*' element=<PageNotFound/>/>
    </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RectDome/>);

