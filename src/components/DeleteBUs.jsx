import React from 'react'
import Navbar from './Navbar'
import Caroosal from './Caroosal'

const DeleteBUs = () => {
  return (
    <><Navbar />
    <br/>
    <div className="container">
          <div className="row">
              <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <div className="row g-3">
                      <div className="col-12 col-md-12 col-xl-12 col-xxl-12">
                          <label htmlFor="" className="form label">Enter Bus ID</label>
                          <input type="text" className="form-control" />
                      </div>
                      <div className="col-12 col-md-12 col-xl-12 col-xxl-12">
                          <button className="btn btn-warning">Delete</button>
                      </div>
                      <div className="col-12 col-md-12 col-xl-12 col-xxl-12">
                          <Caroosal/>
                      </div>
                  </div>
              </div>
          </div>
      </div></>
  )
}

export default DeleteBUs