import React from 'react'
import Navbar from './Navbar'
import Caroosal from './Caroosal'

const AddBus = () => {
  return (
    <><Navbar />
    <br/>
    <div className="container">
          <div className="row">
              <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <div className="row g-3">
                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                          <label htmlFor="" className="form label">Enter Bus ID</label>
                          <input type="text" className="form-control" />
                      </div>
                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                          <label htmlFor="" className="form label">Enter Bus number</label>
                          <input type="text" className="form-control" />
                      </div>
                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                          <label htmlFor="" className="form label">Route(Starting)</label>
                          <input type="text" className="form-control" />
                      </div>
                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                          <label htmlFor="" className="form label">Route(Ending)</label>
                          <input type="text" className="form-control" />
                      </div>
                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                          <label htmlFor="" className="form label">Driver name</label>
                          <input type="text" className="form-control" />
                      </div>
                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                          <label htmlFor="" className="form label">Driver number</label>
                          <input type="text" className="form-control" />
                      </div>
                      <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                          <Caroosal/>
                      </div>
                  </div>
              </div>
          </div>
      </div></>
  )
}

export default AddBus