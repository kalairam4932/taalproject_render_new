import React from 'react'
import Style from './MyForm.module.css'

const FormEngOrder = () => {
  return (
    <div className= {`container  mt-4 pb-2 px-4 ${Style.boxborder}`}>
        <div className='row'>
          <div className='col-12'>
            <h5 className={`${Style.title} mt-2 text-primary`}>Engineering Order</h5>
          </div>
          <div className='col-12  border  rounded-3 p-3 mt-2 position-relative'>
              <div className={`${Style.text} position-absolute top-0  translate-middle fw-bold `}>Engineering Order Details</div>

              <div className='row mt-2'>
                  <div className='col-12 '>
                      <div className='row'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="AcSerialNo" className='fs-6'>Ac Serial No </label>
                        </div>
                        <div className='col-6'>
                          <select name="AcSerialNo" id="AcSerialNo" className={`${Style.input}`}>
                            <option value="">Select</option>
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                          </select>
                        </div>

                      </div>
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="EngineSerialNo" className='fs-6'>Engine Serial No </label>
                        </div>
                        <div className='col-6'>
                          <select name="EngineSerialNo" id="EngineSerialNo" className={`${Style.input}`}>
                            <option value="">Select</option>
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                          </select>
                        </div>

                      </div>
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="REGN" className='fs-6'>REGN </label>
                        </div>
                        <div className='col-6'>
                          <select name="REGN" id="REGN" className={`${Style.input}`}>
                            <option value="">Select</option>
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                          </select>
                        </div>

                      </div>

                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="Year" className='fs-6'>Year </label>
                        </div>
                        <div className='col-6'>
                            <input type="text" name='Year' id='Year' className={`${Style.input}`} />
                        </div>

                      </div>
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="Month" className='fs-6'>Month </label>
                        </div>
                        <div className='col-6'>
                            <input type="text" name='Month' id='Month' className={`${Style.input}`} />
                        </div>

                      </div>
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="Date" className='fs-6'>Date </label>
                        </div>
                        <div className='col-6'>
                            <input type="text" name='Date' id='Date' className={`${Style.input}`} />
                        </div>

                      </div>
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="slno" className='fs-6'>sl.no </label>
                        </div>
                        <div className='col-6'>
                            <input type="text" name='slno' id='slno' className={`${Style.input}`} />
                        </div>

                      </div>
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="EngineHours" className='fs-6'>Engine Hours </label>
                        </div>
                        <div className='col-6'>
                            <input type="text" name='EngineHours' id='EngineHours' className={`${Style.input}`} />
                        </div>

                      </div>
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="AirframeHours" className='fs-6'>Airframe Hours </label>
                        </div>
                        <div className='col-6'>
                            <input type="text" name='AirframeHours' id='AirframeHours' className={`${Style.input}`} />
                        </div>

                      </div>
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="OrderNo" className='fs-6'>Order No </label>
                        </div>
                        <div className='col-6'>
                            <input type="text" name='OrderNo' id='OrderNo' className={`${Style.input}`} />
                        </div>

                      </div>

                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="NextDue" className='fs-6'>Next Due </label>
                        </div>
                        <div className='col-6'>
                            <input type="text" name='NextDue' id='NextDue' className={`${Style.input}`} />
                        </div>

                      </div>
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="Landings" className='fs-6'>Landings </label>
                        </div>
                        <div className='col-6'>
                            <input type="text" name='Landings' id='Landings' className={`${Style.input}`} />
                        </div>

                      </div>
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="WorktobeDone" className='fs-6'>Work to be Done </label>
                        </div>
                        <div className='col-6'>
                            <input type="text" name='WorktobeDone' id='WorktobeDone' className={`${Style.input}`} />
                        </div>

                      </div>
                      
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="TaskDue" className='fs-6'>Task Due </label>
                        </div>
                        <div className='col-6'>
                            <input type="text" name='TaskDue' id='TaskDue' className={`${Style.input}`} />
                        </div>

                      </div>
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="ActionTaken" className='fs-6'>Action Taken </label>
                        </div>
                        <div className='col-6'>
                            <input type="text" name='ActionTaken' id='ActionTaken' className={`${Style.input}`} />
                        </div>

                      </div>
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="AppNo" className='fs-6'>App No </label>
                        </div>
                        <div className='col-6'>
                            <input type="text" name='AppNo' id='AppNo' className={`${Style.input}`} />
                        </div>

                      </div>
                      <div className='row mt-1'>
                        <div className='col-2  d-flex justify-content-end'>
                          <label htmlFor="EmployeeName" className='fs-6'>Employee Name </label>
                        </div>
                        <div className='col-6'>
                          <select name="EmployeeName" id="EmployeeName" className={`${Style.input}`}>
                            <option value="">Select</option>
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                          </select>
                        </div>

                      </div>
                  </div>
              </div>

          </div>
        </div>
          
        <div className='row p-2 d-flex justify-content-end '>
          <div className='col-2 d-flex gap-2'>
          <input className=" btn-light btn-border rounded px-4 p-1  " type="button" value="Back" />
          <input className=" btn-light btn-border rounded px-4 p-1  " type="submit" value="Save" />
          
          </div>
        </div>

    </div>
  )
}

export default FormEngOrder