import React, { Component } from "react";
class Marks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maths: this.props.maths,
            sinces: this.props.sinces,
            english: this.props.english,
            Total: '',
            average: 0.0
        }
    }
    CalculateResult = () => {
        this.state.Total = this.state.maths + this.state.sinces + this.state.english;
        this.state.average = (this.state.Total / 3).toFixed(2);
        this.setState({
            total: this.state.Total,
            average: this.state.average
        });
    }
    Updatemaths = (event) => {
        this.state.maths = parseInt(event.target.value);
        this.setState({
            maths: this.state.maths
        });
        this.CalculateResult();
    }
    Updatesinces = (event) => {
        this.state.sinces = parseInt(event.target.value);
        this.setState({
            sinces: this.state.sinces
        });
        this.CalculateResult();
    }
    Updateenglish = (event) => {
        this.state.english = parseInt(event.target.value);
        this.setState({
            english: this.state.english
        });
        this.CalculateResult();
    }


    render() {
        return (
            <tr>
                <td width='20%'>
                    <input value={this.state.maths} type='number' placeholder='Maths' onChange={this.Updatemaths} />
                </td>
                <td width='20%'>
                    <input value={this.state.sinces} type='number' placeholder="Sinces" onChange={this.Updatesinces} />
                </td>
                <td width='20%'>
                    <input value={this.state.english} type='number' placeholder="English" onChange={this.Updateenglish} />
                </td>
                <td width='20%' align='center'>{this.state.Total}</td>
                <td width='20%' align='center'>{this.state.average}</td>
            </tr>
        );
    }
}

export default Marks;