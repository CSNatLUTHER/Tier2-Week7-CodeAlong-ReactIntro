// importing just "useState from the 'react' package"
import { useState } from 'react';

function ImageItem() {
    // const [name, setName] = useState( null );
    const[image, setImage]=useState({
        location: 'images/logo.svg',
        altText: 'yet another logo'
    })

    const[show, setShow]=useState( true );

    const toggleImage = () => {
        setShow( !show )
    }
    return(
        <div>
            { show ?
            <img src={image.location} onClick={toggleImage} id="newestLogo"/>:
            <h1 onClick={toggleImage}>{image.altText}</h1>
            };
        </div>
    )
}

export default ImageItem