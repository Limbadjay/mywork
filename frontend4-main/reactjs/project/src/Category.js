import React, { Component } from 'react';
import PageHeading from './PageHeading';
class Category extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
            <PageHeading title='Shop' />
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Category</h1>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}

export default Category;