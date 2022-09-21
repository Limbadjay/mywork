import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

// let reg = (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-12'>
//                 <div className='card shadow mt-5'>
//                     <div className='card-header text-bg-primary '>
//                         <h2>Registration from user</h2>
//                     </div>
//                     <div className='card-body'>
//                         <form>
//                             <div>
//                             <label for="formControlInput" class="form-label">Email Address</label>
//                             <input type="email" class="form-control" id="formControlInput" placeholder="Enter your Email-id"/>
//                             </div>
//                             <div className='mt-3'>
//                             <label for="formControlInput" class="form-label">Password</label>
//                             <input type="password" class="form-control" id="formControlInput" placeholder="Enter your Password"/>
//                             </div>
//                             <div className='mt-3'>
//                             <label for="formControlInput" class="form-label">Mobile Number</label>
//                             <input type="number" class="form-control" id="formControlInput" placeholder="Enter your MobileNo"/>                            </div>
//                             <div className='mt-3'>
//                             <label for="formControlInput" class="form-label">Date of Birth</label>
//                             <input type="date" class="form-control" id="formControlInput" placeholder="Enter your DOB"/>
//                             </div>
//                             <div className='mt-3'>
//                                 <button className='btn btn-primary'>Submit</button>&nbsp;&nbsp;
//                                 <button className='btn btn-primary'>cancle</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// )

// let gallery = (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-12'>
//                 <div className='text text-center mt-5'>
//                     <h3>Gallery</h3><hr/>
//                 </div>
//                 <div class="card-group mt-5 ">
//                     <div class="card m-2" className='col-lg-3'>
//                         <img src="https://picsum.photos/100" class="card-img-top" alt="card-group-image"/>
//                     </div>
//                     <div class="card m-2" className='col-lg-3'>
//                         <img src="https://picsum.photos/101" class="card-img-top" alt="card-group-image"/>
//                     </div>
//                     <div class="card m-2" className='col-lg-3'>
//                         <img src="https://picsum.photos/102" class="card-img-top" alt="card-group-image"/>
//                     </div>
//                     <div class="card m-2" className='col-lg-3'>
//                         <img src="https://picsum.photos/103" class="card-img-top" alt="card-group-image"/>
//                     </div>
//                     <div class="card m-2" className='col-lg-3'>
//                         <img src="https://picsum.photos/104" class="card-img-top" alt="card-group-image"/>
//                     </div>
//                     <div class="card m-2" className='col-lg-3'>
//                         <img src="https://picsum.photos/105" class="card-img-top" alt="card-group-image"/>
//                     </div>
//                     <div class="card m-2" className='col-lg-3'>
//                         <img src="https://picsum.photos/106" class="card-img-top" alt="card-group-image"/>
//                     </div>
//                     <div class="card m-2" className='col-lg-3'>
//                         <img src="https://picsum.photos/107" class="card-img-top" alt="card-group-image"/>
//                     </div>
                    
//                 </div>
//             </div>
//         </div>
//     </div>
// )

// let resum = (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-12'>
//                 <div>
//                     <h3>Jay Limbad</h3>
//                     <p>Email-id : jaysinhlimbad1122000@gmail.com<br/>Phone : 9157660440</p><hr/>
//                 </div>
//                 <div>
//                     <h6>Career Objeactive</h6>
//                     <p>I am looking for the challenging job where I can utilize my talent and 
//                     knowledge. I want to learn from the organization and growth with the organization.</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// )
// function Header(props)
// {
//     return(
//         <div className='container-fluid'>
//         <div className='row'>
//             <div className='col-12 d-flex justify-content-between '>
//                     <h5 className='mt-2'>BHAVANAI ENTERPRICE</h5>
//                     <nav className="nav">
//                         <a className="nav-link active" aria-current="page" href="#">HOME</a>
//                         <a className="nav-link" href="#">ABOUT US</a>
//                         <a className="nav-link" href="#">FEED BACK</a>
//                         <a className="nav-link" href="#">TESTYMONALIST</a>
//                     </nav>
//             </div>
//         </div>
//     </div>
//     );
// }
// function Body(props)
//     {
//         return(
//             <div className='container'>
//             <div className='row'>
//                 <div className='col-3 mt-5'>
//                 <img src="https://www.picsum.photos/300" class="img-fluid"/>
//                 </div>
//                 <div className='col-3 mt-5'>
//                 <img src="https://www.picsum.photos/301" class="img-fluid"/>
//                 </div>
//                 <div className='col-3 mt-5'>
//                 <img src="https://www.picsum.photos/302" class="img-fluid"/>
//                 </div>
//                 <div className='col-3 mt-5'>
//                 <img src="https://www.picsum.photos/303" class="img-fluid"/>
//                 </div>
//                 <div className='col-3 mt-5'>
//                 <img src="https://www.picsum.photos/304" class="img-fluid"/>
//                 </div>
//                 <div className='col-3 mt-5'>
//                 <img src="https://www.picsum.photos/305" class="img-fluid"/>
//                 </div>
//                 <div className='col-3 mt-5'>
//                 <img src="https://www.picsum.photos/306" class="img-fluid"/>
//                 </div>
//                 <div className='col-3 mt-5'>
//                 <img src="https://www.picsum.photos/307" class="img-fluid"/>
//                 </div>  
//             </div>
//         </div>
//         );
//     }

//  function Footer(props)
//  {
//     return( 
//     <div className='container-fluid justify-content-bitwin mt-3'>
//     <div className='row'>   
//             <div className='col-4 text-center'>
//             <h2><i class="fa-brands fa-instagram"></i></h2>
//             </div>
//             <div className='col-4 text-center'>
//             <h2><i class="fa-brands fa-telegram"></i></h2>
//             </div>
//             <div className='col-4 text-center'>
//             <h2><i class="fa-brands fa-twitter"></i></h2>
//             </div>
//     </div>
//     </div>

//     );
//  }   
// function Page ()
// {
//     return(
//     <div>
//        <Header/>
//        <Body/>
//        <Footer/>    
//     </div>
//     );
// }
/* CLASS COMPONENT*/
class Page extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name :'the EasyLearn Academy',
            contact : '9157660440',
            year : '2000'
        }
    }
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h3>Class Name {this.state.name}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
root.render(<Page/>);