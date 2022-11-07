import React, { Component } from 'react'
class Sharemarket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            percentage: 0,
            current_price: 3500,
            status: 0
        };
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
        function randomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }
        var randpercentage = randomNumber(1, 10);
        var plusminus = randomNumber(1, 10);
        var status = 0;
        console.log(randpercentage);
        var change_amount = this.state.current_price * randpercentage / 100;
        if (plusminus >= 5) {
            //plus
            this.setState({
                percentage: parseFloat(randpercentage).toFixed(2),
                current_price: parseInt(this.state.current_price + change_amount),
                status: 0
            });
        }
        else {
            //minus
            this.setState({
                percentage: parseFloat(randpercentage).toFixed(2),
                current_price: parseInt(this.state.current_price - change_amount),
                status: 1
            });
        }
        //this is for display 

        function Minus() {
            if (this.state.status == 1) {
                return (
                    <div>
                        <div className='col-3'>{this.state.percentage}</div>
                        <div className='col-1'><i className="fa fa-arrow-down"></i></div>
                    </div>
                );
            }
            else {
                return (
                    <div>
                        <div className='col-3'>{this.state.percentage}</div>
                        <div className='col-1'><i className="fa fa-arrow-down"></i></div>
                    </div>
                );

            }

        }
    }
    render() {

        return (
            <div className='col-4'>
                <div className='card'>
                    <div className='card-header'>Name of share</div>
                    <div className='card-body'>
                        <h2>
                            Name : SBI
                        </h2>
                        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                        <div className='row'>
                            <div className='col-6'>Current price :</div>
                            <div className='col-6'>{this.state.current_price}</div>
                            <div className='col-6'>percentage</div>
                            <div className='col-3'>{this.state.percentage}</div>
                            <Minus />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Sharemarket;