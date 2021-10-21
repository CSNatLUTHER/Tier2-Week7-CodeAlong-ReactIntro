// importing just "useState from the 'react' package"
import { useState } from 'react';

function Footer() {
    // const [name, setName] = useState( null );
    const [typedString, setTypedString ] = useState( '' );
    const handleChange = ( event ) =>{
        // console.log( 'in onChange', event.target.value );
        setTypedString (event.target.value);
    }

    return(
        <div className="App-footer">
            <h1>THIS IS THE FOOTER</h1>
            <input type="text" placeholder="type something..." onChange={ (event) => handleChange (event) }/>
            <div id="textTyped"><p>You typed: { typedString }</p></div>
        </div>
    )
}

export default Footer