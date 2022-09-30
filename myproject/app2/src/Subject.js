import React,{Component}from "react";
class Subject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            duration: this.props.duration
        }
    }

    render() {
        return (
            <div className="col-lg-3 mt-3 p-3">
                <div className="card">
                    <div className="card-header">
                        <h4>Subject{this.state.name}</h4>
                    </div>
                    <div className="card-body">
                        <h3>duration{this.state.duration}</h3>
                    </div>
                </div>
            </div>
        );
    }
}
export default Subject;