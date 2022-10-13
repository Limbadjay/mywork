import React, { Component } from 'react'
function Player (props)
{
    const{name,match,rune,age} = props;
    const ulstyle = {border:'2px solid green',listStyleType:'none',padding:'5px',margin:'15px'}
    const listyle = {backgroundColor:'gray',padding:'10px'}
    return(
        <ul style={ulstyle}>
            <li style={listyle}>Name {name}</li>
            <li style={listyle}>Match {match}</li>
            <li style={listyle}>Rune {rune}</li>
            <li style={listyle}>Age {age}</li>
        </ul>
    );
}
export default Player;