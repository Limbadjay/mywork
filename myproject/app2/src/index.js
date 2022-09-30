import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Subject from './Subject';
// import Movie from './Movie';
//import Movie1 from './Movie1';
// import Marks from './Marks';
import MyLifecycle from './MyLifeCycle ';
const root = ReactDOM.createRoot(document.getElementById('root'));

// class Plyer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {   
//       pname: this.props.pname,
//       runs: this.props.runs,
//       matches: this.props.matches,
//       photos: this.props.photos
//     }
//   }
//   render() {
//     return (
//         <div className='col-4 mb-3 '>
//           <div className='card shadow'>
//             <div className='card-header'>
//               <h5>{this.state.pname}</h5>
//             </div>
//             <div className='card-body'>
//               <img src={this.state.photos} className='img-fluid img-thumbnail' />
//             </div>
//             <div className='card-footer'>
//               <h3>{this.state.runs}</h3>
//               <h3>{this.state.matches}</h3>
//             </div>
//           </div>
//         </div>
//     );
//   }
// }
// function Player() {
//   return (
//     <div>
//       <div className='container-fluid'>
//         <div className='row'>
//           <div className='col-12'>
//             <h1>this is player information</h1><hr />
//           </div>
//         </div>
//       </div>
//       <div className='container'>
//         <div className='row'>
//             <Plyer pname='sachin' runs='80' matches='111' photos='https://picsum.photos/300' />
//             <Plyer pname='sachin' runs='80' matches='111' photos='https://picsum.photos/300' />
//             <Plyer pname='sachin' runs='80' matches='111' photos='https://picsum.photos/300' />
//             <Plyer pname='sachin' runs='80' matches='111' photos='https://picsum.photos/300' />
//             <Plyer pname='sachin' runs='80' matches='111' photos='https://picsum.photos/300' />
//             <Plyer pname='sachin' runs='80' matches='111' photos='https://picsum.photos/300' />
//             <Plyer pname='sachin' runs='80' matches='111' photos='https://picsum.photos/300' />
//             <Plyer pname='sachin' runs='80' matches='111' photos='https://picsum.photos/300' />
//             <Plyer pname='dhoni' runs='50' matches='101' photos='https://picsum.photos/300' />
//             <Plyer pname='yuvraj' runs='43' matches='100' photos='https://picsum.photos/300' />
//             <Plyer pname='raina' runs='33' matches='98' photos='https://picsum.photos/300' />
//             <Plyer pname='rohit' runs='55' matches='78' photos='https://picsum.photos/300' />
//             <Plyer pname='virat' runs='80' matches='80' photos='https://picsum.photos/300' />
//             <Plyer pname='kl' runs='60' matches='50' photos='https://picsum.photos/300' />
//             <Plyer pname='panth' runs='65' matches='65' photos='https://picsum.photos/300' />
//             <Plyer pname='hardik' runs='75' matches='75' photos='https://picsum.photos/300' />
//             <Plyer pname='chal' runs='25' matches='30' photos='https://picsum.photos/300' />
//             <Plyer pname='bhuvneshvar' runs='100' matches='10' photos='https://picsum.photos/300' />
//             <Plyer pname='siraj' runs='3' matches='45' photos='https://picsum.photos/300' />
//         </div>
//       </div>
//     </div>
//   );
// }
//create class component
// class Page extends React.Component
// {
//     render(){
//       return (
//         <div className='container'>
//             <div className='row'>
//               <div className='col-12'>
//                   <h3 className='text-danger bg-light p-3'>Example of class component</h3>
//                   <hr/>
//                   <p>this is first example of class component which is advanced version of functional component</p>
//               </div>
//             </div>
//         </div>
//       )
//     }
// }
// class Page extends React.Component
// {
//   constructor(props)
//   {
//       super(props);
//       this.state = {
//         name: 'The EasyLearn Academy',
//         contact: '9662512857',
//         year : 2008
//       }
//       this.state = {
//         name2 : 'hello jay',
//         contact2 : '9157660440',
//         year2 : '2021'
//       }
//   }
//   render(){
//     return(
//       <div className='container'>
//           <div className='row'>
//               <div className='col-12'>
//                  <div className='card'>
//                     <div className='card-header'>
//                         <h3>Class Name  {this.state.name2}</h3>
//                     </div>
//                     <div className='card-body'>
//                         <b>contact no :- {this.state.contact2}</b> <br/>
//                         <b>Year :- {this.state.year2}</b> <br/>
//                     </div>
//                  </div>
//               </div>
//           </div>
//       </div>
//     );
//   }
// }
// function MoviePage()
// {
//     return(
//         <div className='container'>
//             <div className='row mt-3'>
//                 <Movie name = 'vikramvedha' year='2021' photo = 'https://picsum.photos/300?random=1'/>
//                 <Movie name = 'KGF' year = '2020' photo = 'https://picsum.photos/300?random=2'/>
//                 <Movie name='Pushpa' year='2021' photo='https://picsum.photos/300?random=3' />&nbsp;
//                 <Movie name='RRR' year='2022' photo='https://picsum.photos/300?random=4' />
//             </div>
//         </div>
//     );
// }
// function Movie1Page()
// {
//     return(
//         <div className='container'>
//             <div className='row'>
//                 <Movie1 name= 'jay limbad' rollno= '1' year='2021' photo='https://picsum.photos/300?random=1'/>
//             </div>
//         </div>
//     )
// }
// function Marksheet()
// {
//     return(
//         <div className='container'>
//             <div className='row'>
//                 <div>
//                     <h4>This is a student Marksheet</h4>
//                 </div>
//                 <table border='2' className='table table-borderd 'width='100%'>
//                     <thead>
//                         <tr>
//                         <th width='20%'>maths</th>
//                         <th width='20%'>sinces</th>
//                         <th width='20%'>english</th>
//                         <th align='center'width='20%'>Total</th>
//                         <th align='center'width='20%'>average</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                     <Marks maths='' scinces='' english=''/>
//                     <Marks maths='' scinces='' english=''/>
//                     <Marks maths='' scinces='' english=''/>
//                     </tbody>
                  
//                 </table>
//             </div>
//         </div>
//     );
// }

root.render(<MyLifecycle/>); 
