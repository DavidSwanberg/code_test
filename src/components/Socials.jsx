import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Socials = () => {

    return(
        <div className="socials">
            <FontAwesomeIcon icon={["fab", "facebook-f"]} onClick={()=> window.open("http://facebook.com/", "_blank")}/>
                <FontAwesomeIcon icon={["fab", "twitter"]} onClick={()=> window.open("http://twitter.com/", "_blank")}/>
                <FontAwesomeIcon icon={["fab", "instagram"]} onClick={()=> window.open("http://instagram.com/", "_blank")} />
        </div>
    )
}

export default Socials;