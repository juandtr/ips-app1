import React from 'react'
import doctor from '../assents/doctor.7c2bc96d.png'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare} from '@fortawesome/free-solid-svg-icons'

const Home = ()=>{
    return(
<header>
    <div className='container'>
        <div className='row'>
            <div className='col md-6 col-lg-6'>
                <h5>Cuidamos tu salud y la de los tuyos</h5>
                <h2>Brindamos el mejor servicio complementario de salud.</h2>
                <button><a href='#'></a>saber mas</button>
                <span>+</span>
            </div>
            <div className='col-lg-6 col-md-6'>
                <div className="header-box">
                    <img src={doctor}></img>
                    <FontAwesomeIcon icon={faSquare} />
                </div>
            </div>
        </div>
    </div>
</header>
    )
}

export default Home