import React from 'react'
import mobile from '../assents/mobile.f82d7322.png'
import './Cita.css'
const Cita = () =>{
    return(
        <div className='col-lg-6 col-md-6'>
        <div className="Cita">
            <img className='Cita1' src={mobile}></img>
            <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">RESERVA TU CITA</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  
        </div>
        </div>
        
    )
}


export default Cita