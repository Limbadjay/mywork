import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Player from './inlineStyleSheet';
// import Movie from './exsaple';
// import Home from './Home';
// import Contact from './Contact';
// import About from './About';
// import NoFileFound from './NoFileFound';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Calculator from './Calculator';
function CalculatorDemo()
{
    return(
        // <BrowserRouter>
        // <Routes>
        //     <Route path='/' element=<Home/>/>            
        //     <Route path='/Contact' element=<Contact/>/>            
        //     <Route path='/About' element=<About/>/>            
        //     <Route path='/*' element=<NoFileFound/>/>            
        // </Routes>
        // </BrowserRouter>
        <Calculator/>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalculatorDemo/>); 