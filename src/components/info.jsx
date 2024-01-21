import React from "react";
import fotop from "../assets/foto.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/fontawesome-free-brands';

const Info = () => {
    return (
        <div className="info">
         <h1>Ximena Ortega</h1>
        <img src={fotop} alt="perfilfoto" />

        <div className="botones">
        <a href="https://github.com/4910247Xro" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        </div>
        </div>

    )
}

export default Info;