import React, { Component } from 'react'
class EventHandlingTechnique2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLike: 0,
            label: 'Like'
        }
    }

    ChangeLabel = () => {
        this.setState(previousState => (
            {
                isLike: !previousState.isLike
            }
        ));
        if (this.state.isLike == 0) {
            this.setState({
                label: 'Liked'
            });
        }
        else {
            this.setState({
                label: 'Like'
            });
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>FaceBook</h4>
                            </div>
                            <div className='card-body'>
                                <img src='https://picsum.photos/300' className='img-fluid' />
                            </div>
                            <div className='card-footer'>
                                <button type='button' className='btn btn-primary' onClick={this.ChangeLabel}>{this.state.label}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventHandlingTechnique2;