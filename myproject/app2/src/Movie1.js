import React,{ Component } from "react";
class Movie1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : this.props.name,
            photo : this.props.photo,
            rollno : this.props.rollno,
            year : this.props.year,
            UpdateLike : 0,
            DisLikecount :0

         }
    }
    UpdateLike =()=>{
        this.setState({
            UpdateLike: this.state.UpdateLike + 1
        });
    }
    UpdateDislike = ()=>{
        this.setState({
            DisLikecount: this.state.UpdateLike + 1
        });
    }
    
    render() { 
        return ( 
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h1>Name:{this.state.name}</h1>
                        <h3>Roll No:{this.state.rollno}</h3>
                    </div>  
                    <div className="card-body">
                        <img src={this.state.photo} className='img-fluid'/>
                    </div>
                    <div className="card-footer">
                        <h5>Year:{this.state.year}</h5>
                        <button onClick={this.UpdateLike} className='btn btn-primary'>Like{this.UpdateDislike}</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Movie1;