import React, { Component } from 'react'
class ControlledAccessForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volume :'',
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onFromeSubmit = this.onChangeInput.bind(this);
    }
    onChangeInput(event)
    {
        console.log(event.traget.name + " " + event.traget.value);
        this.setState({
            [event.traget.name] : event.traget.value
        })
    }
    onFromeSubmit(event){
        event.preventDefault();
        console.log(this.state);
        console.log("from submited");
        var height = parseInt(this.state.height);
        var width = parseInt(this.state.width);
        var length = parseInt(this.state.length);
        this.setState(
            {
                volume : height * width * length
            }
        )
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Controlled Access Form (Approach)</h3>
                        <div className='card'>
                            <div className='card-header'>
                                <h5>Volume Calulater</h5>
                            </div>
                            <div className='card-body'>
                                <form>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" name='height' placeholder="Enter Height"
                                            onChange={this.onChangeInput} value={this.state.height} required/>
                                        <label htmlfor="height">Height</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" name='width' placeholder="Width"required
                                        onChange={this.onChangeInput} value={this.state.width} />
                                        <label htmlfor="width">Width</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" name='length' placeholder="Length"
                                        onChange={this.onChangeInput} value={this.state.length} required />
                                        <label htmlfor="length">Length</label>
                                    </div>
                                    <button onClick={this.onFormSubmit} type="submit" className="btn btn-success">Calulate Volume</button>
                                    <div className='mt-5'><h4>{this.state.volume}</h4></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ControlledAccessForm;