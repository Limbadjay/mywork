import './App.css'

function App(){
    return(
        <div className='App'>
            <h4>reactjs multiple images in single import </h4>
            <p>Display images</p>
            <img src={require('../src/images/newphoto.jpg').default} />
        </div>
    )
}