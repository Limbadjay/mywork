import React, { Component } from 'react'
function Calculator()
{
    return(
        <div className='containar'>
            <div className='row'>
                <div className='col-6 offset-3 mt-5'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Calculator</h4>
                        </div>
                        <div className='card-body'>
                            <form>
                                <thead>
                                    <h5>Day Calculator</h5>
                                </thead>
                                <tbody>
                                  <div className='d-flex'>
                                  <input type="number" class="form-control" placeholder="Days"/>&nbsp;
                                  <input type="text" class="form-control" placeholder="Month"/>&nbsp;
                                  <input type="text" class="form-control" placeholder="Year"/>&nbsp;
                                  </div>
                                  <div className='mt-3'>
                                    <button type="button" class="btn btn-primary">Claculat</button>
                                  </div>&nbsp;
                               </tbody>
                                <tfoot>
                                    <div className='align-center'>
                                        <h3>OutPut</h3>
                                    </div>
                                </tfoot>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Calculator
