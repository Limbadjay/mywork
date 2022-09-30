import React, { Component } from 'react';
class MyLifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentTime: new Date().toLocaleTimeString()
        }
    }
    componentWillMount()
    {
        console.log('Will Mount method called');
    }
    componentDidMount()
    {
        console.log('Did Mount method called');
    }
    shouldComponentUpdate()
    {
        console.log('ShouldUpdate method called');
        return true;
    }
    componentWillUpdate()
    {
        console.log('Will update method called');
    }
    componentDidUpdate()
    {
        console.log('Did Upate mwthod called');
    }
    componentWillUnmount()
    {
        console.log('Will Unmount method called');
    }
    UpdateCurrentTime = () => {
        this.setState({
            CurrentTime: new Date().toLocaleTimeString()
        });
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='row-12'>
                        <h3>LifeCycle Demo</h3><hr />
                        <button className='btn btn-danger' onClick={this.UpdateCurrentTime}>Update Time</button>
                        <h5>{this.state.CurrentTime}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyLifecycle;
