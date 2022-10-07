import React from 'react'
import LOGO from '../assents/LOGO_01.png'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'

const Footer = ()=>{
    return(
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <img className='logo' src={LOGO}/>
                        <p>Dirección: Calle 5 # 38 – 48
                            Edificio Consulta Externa
                            <p> <FontAwesomeIcon icon={faPhone}/> Teléfono: + (57) (2) 489 6364</p>
                            E-mail: info@premediips.com.co</p>
                           
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer