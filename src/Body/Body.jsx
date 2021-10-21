// importing just "useState from the 'react' package"
import { useState } from 'react';
// import { logo } from './images/logo.svg';

function Body() {
    // const [name, setName] = useState( null );
    const [clicks, setClicks] = useState( 0 ); // replace name(s) and set initial Value - cannot be null
    const [link, setLink] = useState( {
        url: 'https://www.cscottco.com',
        text: 'My Website'
    } );
    const [image, setImage] = useState({
        url: 'images/logo.svg',
        altText: 'another logo'

    });
    const handleClick = ()=>{
        console.log( 'in handleClick');
        setClicks( clicks + 1);
    }
    const[showImage, setShowImage]=useState( false );
    
    const toggleImage = ()=> {
        setShowImage( !showImage )
    }
    return(
        <div className="BodyDiv">
            <h1>Check out my Website:</h1>
            <a href={link.url}>{link.text}</a><br /><br />
            <button onClick={ handleClick }>Clicker</button>
            <p>Clicks: { clicks }</p>
            <p>Use JSON.stringify to show anything on DOM {JSON.stringify(link)}</p>

            {/* { ternary operator for conditional } */}
            { showImage ?
            <img src={ image.url} alt={image.altText} id="newestLogo" onClick = {toggleImage}/>: //true
            <h2 onClick = {toggleImage}>{ image.altText} </h2> // if FALSE
            }
        </div>
    )
}

export default Body