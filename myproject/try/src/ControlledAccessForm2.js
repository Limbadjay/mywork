import React, { ReactDOM } from "react";
import ControlledAccessForm2 from 'React';
function loginFrom(){
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
}
return(
    <div className="cotainer">
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h3>this is a from</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div>
                              <label htmlFor="email">Email</label>
                              <input type='email' name='email'/>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type='password' name='password'/>
                            </div>
                            <div>
                                <button type='submit'>LogIn</button>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default ControlledAccessForm2;