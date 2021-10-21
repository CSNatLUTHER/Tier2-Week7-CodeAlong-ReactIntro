// importing just "useState from the 'react' package"
import { useState } from 'react';
import ImageItem from '../ImageItem/ImageItem';

function ItemList( props) {
    // const [name, setName] = useState( null );
    return(
        <div>
            <h1>ItemList with Image</h1>
            <p>{ JSON.stringify( props) }</p>
        </div>
    )
}

export default ItemList