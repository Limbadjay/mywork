import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Player from './inlineStyleSheet';
import Player from './inlineStyleSheetdemo';
function ComponentStyle()
{
    return(
        <div>
            <Player name=':-jay' match=':-100' rune=':-200000' age=':-23'/>
            <Player name=':-kelvin' match=':-26' rune=':-23000' age=':-30'/>
            <Player name=':-kuldip' match=':-30' rune=':-11000' age=':-35'/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ComponentStyle/>);