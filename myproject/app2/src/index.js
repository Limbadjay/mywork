import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Page() {
  return (
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-between bg-black fixed-top'>
              <h3 className='text-white mt-1'>GOOD VIBES</h3>
              <nav className="nav mt-1">
                <a class="nav-link" aria-current="page" href="">HOME</a>
                <a class="nav-link" href="">ABOUT</a>
                <a class="nav-link" href="">EVENTS</a>
                <a class="nav-link" href="">GALLERY</a>
                <a class="nav-link" href="">CONTECT</a>
              </nav>
            </div>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12'>
                  <img src='https://picsum.photos/1500/500' className='img-fluid'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
}
      root.render(<Page />);
