import React, { Component } from 'react';
class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : 'KGF',
            year : 2021,
            photos : 'https://picsum.photos/1080/300'
         };
    }
    changeEvent = () =>
    {
        this.setState({
            photos: 'https://picsum.photos/1000/300',
            year : 2022
        });
    }
    render() { 
        return ( 
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5>{this.state.name}</h5>
                            </div>
                            <div className='card-body'>
                                <img src={this.state.photos}/>
                            </div>
                            <div className='card-footer'>
                                <h5>{this.state.year}</h5>
                            </div>
                            <button type='button' className='btn btn-primary' onClick={this.changeEvent}>Submited</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Movie;