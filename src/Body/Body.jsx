// importing just "useState from the 'react' package"
import { useState } from 'react';

function Body() {
    // const [name, setName] = useState( null );
    const [clicks, setClicks] = useState( 0 ); // replace name(s) and set initial Value - cannot be null
    const handleClick = ()=>{
        console.log( 'in handleClick');
        setClicks( clicks + 1);
    }
    return(
        <div>
            <h1>THIS IS THE BODY</h1>
            <p>Hello World from the Body Components</p>
            <button onClick={ handleClick }>Clicker</button>
            <p>Clicks: { clicks }</p>
        </div>
    )
}

export default Body