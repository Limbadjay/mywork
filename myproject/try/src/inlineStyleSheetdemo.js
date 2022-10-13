import './Player.css'
function Player(props)
{
    const {name,match,age,run}= props
    return(
            <ul className='ulList'>
                <li className='liList'>Name{name}</li>
                <li className='liList'>Match{match}</li>
                <li className='liList'>Age{age}</li>
                <li className='liList'>Run{run}</li>
            </ul>  
    );
}
export default Player;