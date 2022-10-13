import React, { Component } from 'react'
import Greeting from 'React';
let user = {
    name: 'jay',
    surname : 'Limbad'
};
function Greeting()
{
    if(user)
    return <p>Hello + {user.name} + {user.surname} + you are fine</p>;
    else
    return <p>hello Good Morining</p>;
}
export default (Greeting);