import React, { useState } from 'react'
import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from 'react-hot-toast';
import { base_url } from '../../../constant/url';

const AircraftStatus = () => {

    const [formData, setFormData] = useState({
      regno: "",
      category: "",
      owner: "",
      hourtype: "",
      operator: "",
      manufacture: "",
      model: "",
      serialno: "",
      maintananceservice: "",
      warrantystartdate: "",
      warrantyenddate: "",
      aircraftunderwarranty: false,
  })

  const handleChange = (e) => {
      const {name,value,type,checked}= e.target;
      setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
  }
          // API function to send data
          const postAircraftData = async (data) => {
            const response = await axios.post(`${base_url}/api/aircraft/postaircraftdata`, data);
            return response.data;
        };

        // useMutation for API call
        const mutation = useMutation({
            mutationFn: postAircraftData,
            onSuccess: (data) => {

                toast.success("Data Submited")
                setFormData({
                    regno: "",
                    category: "",
                    owner: "",
                    hourtype: "",
                    operator: "",
                    manufacture: "",
                    model: "",
                    serialno: "",
                    maintananceservice: "",
                    warrantystartdate: "",
                    warrantyenddate: "",
                    aircraftunderwarranty: false,
                    singleSector: false,
                    multipleSector: false,
                    airborneTimeEntry: false,
                    emptywt1: "",
                    grosspayload1: "",
                    takeoffwt1: "",
                    landwt1: "",
                    allupwt1: "",
                    taxiwt1: "",
                    zerofuelwt1: "",
                    fuelcap1: "",
                    emptywt2: "",
                    grosspayload2: "",
                    takeoffwt2: "",
                    landwt2: "",
                    allupwt2: "",
                    taxiwt2: "",
                    zerofuelwt2: "",
                    fuelcap2: "",
                    asondate:"",
                    tablehours:"",
                    tablemanufacturingdate: "",
                    tablelandings: "",
                    aircraftnotinuse: false,
                    aircraftreadonly: false,
                    flightlogunderutc: false,
                    notinusedate:"",
                    readonlydate:"",
                })
                
                
             
            },
            onError: (error) => {
              alert("Error saving aircraft data.");
              console.error("Error:", error);
            }
          });

  const handleSubmit =(e) => {
      e.preventDefault();
      console.log("Submitted Data:", formData);
      mutation.mutate(formData);
  }


  return (
    <div className='aircraft-status border p-4 rounded shadow'>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5'>
            <h6 className="btn-bg-color text-white text-center p-1 btn-border">Aircraft Registration Details</h6>
            <div className='row '>
                <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                    <Form.Group >
                        <label className='mt-2 '>Reg No</label>
                    </Form.Group>
                    <Form.Group >
                        <label className='mt-2'>Category</label>
                    </Form.Group>
                    <Form.Group >
                        <label className='mt-2'>Owner</label>
                    </Form.Group>
                    <Form.Group >
                        <label className='mt-2'>Hour Type</label>
                    </Form.Group>
                    <Form.Group >
                        <label className='mt-3'>Operator/Customer</label>
                    </Form.Group>
                </div>
                <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                    <Form.Group className='mt-2'>
                        <input type="text" name='regno' className='form-control p-0 input-border' value={formData.regno} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                    <input type="text" name='category' className='form-control p-0 input-border' value={formData.category} onChange={handleChange} />
                    {/* <select className="form-control p-0 input-border" name="category" value={formData.category} onChange={handleChange}>
                        <option selected>Select...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">four</option>
                      </select> */}
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <input type="text" name='owner' className='form-control p-0 input-border' value={formData.owner} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                      <input type="text" name='hourtype' className='form-control p-0 input-border' value={formData.hourtype} onChange={handleChange} />
                      {/* <select className="form-control p-0 input-border" name="hourtype" value={formData.hourtype} onChange={handleChange}>  
                        <option selected>Select...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select> */}
                    </Form.Group>
                    <Form.Group className='mt-2'>
                      <input type="text" name='operator' className='form-control p-0 input-border' value={formData.operator} onChange={handleChange} />
                      {/* <select className="form-control p-0 input-border" name="operator" value={formData.operator} onChange={handleChange}>
                          <option selected>Select...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select> */}
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
              <h6 className="btn-bg-color text-white text-center p-1 btn-border mt-2">Aircraft Details</h6>
              <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                  <Form.Group >
                      <label className='mt-2'>Manufacture</label>
                  </Form.Group>
                  <Form.Group >
                      <label className='mt-2'>Model</label>
                  </Form.Group>
                  <Form.Group >
                      <label className='mt-2'>Serial No</label>
                  </Form.Group>
                  <Form.Group >
                      <label className='mt-3'>Maintanance Service program/Provider</label>
                  </Form.Group>
              </div>
              <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                  <Form.Group className='mt-2'>
                      {/* <input type="text" name='manufacture' className='form-control p-0 input-border' value={formData.manufacture} onChange={handleChange} /> */}
                      <select className="form-control p-0 input-border" name="manufacture" value={formData.manufacture} onChange={handleChange}>
                      <option selected>Select...</option>
                      <option value="1">ARTEX</option>
                      <option value="2">Astro Engine GmbH</option>
                      </select>
                  </Form.Group>
                  <Form.Group className='mt-2'>
                  <select className="form-control p-0 input-border" name="model" value={formData.model} onChange={handleChange}>
                      <option selected>Select...</option>
                      <option value="1">CESSNA 152</option>
                      <option value="2">CESSNA A/C</option>
              
                    </select>
                  </Form.Group>
                  <Form.Group className='mt-2'>
                      <input type="text" name='serialno' className='form-control p-0 input-border' value={formData.serialno} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className='mt-2'>
                      <textarea name='maintananceservice' className='form-control p-0 input-border' rows='3' value={formData.maintananceservice} onChange={handleChange} />
                  </Form.Group>
              </div>
            </div>
            <div className='row my-5'>
              <h6 className="btn-bg-color text-white text-center p-1 btn-border">Warranty Details</h6>
              <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                  <Form.Group >
                      <label className='mt-3'>Is Aircraft Under Warranty ?</label>
                  </Form.Group>
                  <Form.Group >
                      <label className='mt-3'>Warranty Start Date</label>
                  </Form.Group>
                  <Form.Group >
                      <label className='mt-3'>Warranty End Date</label>
                  </Form.Group>
              </div>
              <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                  <Form.Group className='mt-3 mb-5'>
                    <input type="checkbox" className='' name='aircraftunderwarranty' label="Is Aircraft Under Warranty?" value={formData.aircraftunderwarranty} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className='mt-5'>
                    <input type="date" name='warrantystartdate' className='form-control p-0' value={formData.warrantystartdate} onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className='mt-2'>
                    <input type="date" name='warrantyenddate' className='form-control p-0' value={formData.warrantyenddate} onChange={handleChange} />
                  </Form.Group>
              </div>
            </div>
            <div className='row'>
              <h6 className="btn-bg-color text-white text-center p-1 btn-border">Tech log Page</h6>
              <Form.Group className='mt-3 mb-5'>
                <input type="checkbox" className='mx-2' name='singleSector' value={formData.singleSector} onChange={handleChange} /> Single Sector
                <input type="checkbox" className='mx-2' name='multipleSector' value={formData.multipleSector} onChange={handleChange} /> Multiple Sector <br />
                <input type="checkbox" className='mx-2 mt-2' name='airborneTimeEntry' value={formData.airborneTimeEntry} onChange={handleChange} /> Airborne Time Entry
              </Form.Group>
            </div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7'>
            <div className='row '>
              <h6 className="btn-bg-color text-white text-center p-1 btn-border">Total Weight and Capacity</h6>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                <div className='row'>
                  <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                    <Form.Group >
                        <label className='mt-2 total-weight-section'>Empty wt</label>
                    </Form.Group>
                    <Form.Group >
                      <label className='mt-3 total-weight-section'>Gross Payload</label>
                    </Form.Group>
                    <Form.Group >
                        <label className='mt-3 total-weight-section'>Takeoff Wt</label>
                    </Form.Group>
                    <Form.Group >
                        <label className='mt-3 total-weight-section'>Land Wt</label>
                    </Form.Group>
                  </div>
                  <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                    <Form.Group className='mt-2'>
                        <input type="text" name='emptywt1' className='form-control p-0 input-border' value={formData.emptywt1} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <input type="text" name='grosspayload1' className='form-control p-0 input-border' value={formData.grosspayload1} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <input type="text" name='takeoffwt1' className='form-control p-0 input-border' value={formData.takeoffwt1} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <input type="text" name='landwt1' className='form-control p-0 input-border' value={formData.landwt1} onChange={handleChange} />
                    </Form.Group>
                  </div>
                  <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                    <Form.Group className='mt-2'>
                      <select className="form-control p-0 input-border" name="emptywt2" value={formData.emptywt1} onChange={handleChange}>
                        <option selected>Select...</option>
                        <option value="1">Gallon (UK) </option>
                        <option value="2">Gallon (US)</option>
                        <option value="3">KG</option>
                        <option value="3">Liter</option>
                        <option value="3">Pounds</option>
                        <option value="3">Quarters</option>
                      </select>
                    </Form.Group>
                    <Form.Group className='mt-2'>
                    <select className="form-control p-0 input-border" name="grosspayload2" value={formData.grosspayload2} onChange={handleChange}>
                      <option selected>Select...</option>
                        <option value="1">Gallon (UK) </option>
                        <option value="2">Gallon (US)</option>
                        <option value="3">KG</option>
                        <option value="3">Liter</option>
                        <option value="3">Pounds</option>
                        <option value="3">Quarters</option>
                      </select>
                    </Form.Group>
                    <Form.Group className='mt-2'>
                      <select className="form-control p-0 input-border" name="takeoffwt2" value={formData.takeoffwt2} onChange={handleChange}>
                      <option selected>Select...</option>
                        <option value="1">Gallon (UK) </option>
                        <option value="2">Gallon (US)</option>
                        <option value="3">KG</option>
                        <option value="3">Liter</option>
                        <option value="3">Pounds</option>
                        <option value="3">Quarters</option>
                      </select>
                    </Form.Group>
                    <Form.Group className='mt-2'>
                      <select className="form-control p-0 input-border" name="landwt2" value={formData.landwt2} onChange={handleChange}>
                      <option selected>Select...</option>
                        <option value="1">Gallon (UK) </option>
                        <option value="2">Gallon (US)</option>
                        <option value="3">KG</option>
                        <option value="3">Liter</option>
                        <option value="3">Pounds</option>
                        <option value="3">Quarters</option>
                      </select>
                    </Form.Group>
                  </div>
                </div> 
              </div>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                <div className='row'>
                  <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                    <Form.Group >
                        <label className='mt-2 total-weight-section'>All Up Wt</label>
                    </Form.Group>
                    <Form.Group >
                      <label className='mt-3 total-weight-section'>Taxi Wt</label>
                    </Form.Group>
                    <Form.Group >
                        <label className='mt-3 total-weight-section'>Zero Fuel Wt</label>
                    </Form.Group>
                    <Form.Group >
                        <label className='mt-3 total-weight-section'>Fuel cap</label>
                    </Form.Group>
                  </div>
                  <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                    <Form.Group className='mt-2'>
                        <input type="text" name='allupwt1' className='form-control p-0 input-border' value={formData.allupwt1} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <input type="text" name='taxiwt1' className='form-control p-0 input-border' value={formData.taxiwt1} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <input type="text" name='zerofuelwt1' className='form-control p-0 input-border' value={formData.zerofuelwt1} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <input type="text" name='fuelcap1' className='form-control p-0 input-border' value={formData.fuelcap1} onChange={handleChange} />
                    </Form.Group>
                  </div>
                  <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                    <Form.Group className='mt-2'>
                      <select className="form-control p-0 input-border" name="allupwt2" value={formData.allupwt2} onChange={handleChange}>
                      <option selected>Select...</option>
                        <option value="1">Gallon (UK) </option>
                        <option value="2">Gallon (US)</option>
                        <option value="3">KG</option>
                        <option value="3">Liter</option>
                        <option value="3">Pounds</option>
                        <option value="3">Quarters</option>
                      </select>
                    </Form.Group>
                    <Form.Group className='mt-2'>
                      <select className="form-control p-0 input-border" name="taxiwt2" value={formData.taxiwt2} onChange={handleChange}>
                      <option selected>Select...</option>
                        <option value="1">Gallon (UK) </option>
                        <option value="2">Gallon (US)</option>
                        <option value="3">KG</option>
                        <option value="3">Liter</option>
                        <option value="3">Pounds</option>
                        <option value="3">Quarters</option>
                      </select>
                    </Form.Group>
                    <Form.Group className='mt-2'>
                      <select className="form-control p-0 input-border" name="zerofuelwt2" value={formData.zerofuelwt2} onChange={handleChange}>
                      <option selected>Select...</option>
                        <option value="1">Gallon (UK) </option>
                        <option value="2">Gallon (US)</option>
                        <option value="3">KG</option>
                        <option value="3">Liter</option>
                        <option value="3">Pounds</option>
                        <option value="3">Quarters</option>
                      </select>
                    </Form.Group>
                    <Form.Group className='mt-2'>
                      <select className="form-control p-0 input-border" name="fuelcap2" value={formData.fuelcap2} onChange={handleChange}>
                      <option selected>Select...</option>
                        <option value="1">Gallon (UK) </option>
                        <option value="2">Gallon (US)</option>
                        <option value="3">KG</option>
                        <option value="3">Liter</option>
                        <option value="3">Pounds</option>
                        <option value="3">Quarters</option>
                      </select>
                    </Form.Group>
                  </div>
                </div> 
              </div>
            </div>
            <div className='row mt-4'>
              <h6 className="btn-bg-color text-white text-center p-1 btn-border mx-1 mt-3">Time Since New Values Of Aircraft (TNS)</h6>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                <Form.Group className=''>
                  <Form.Label className='mt-2'>As On Date</Form.Label>
                  <input type="date" className='mx-1 p-0 ms-3 input-border' />
                </Form.Group>
              </div>

              <table className='mt-2 airframetab ms-5 mb-2'>
                    <tr>
                        <th className='text-center' ></th>
                        <th className='text-center'>Periods</th>
                        <th className='text-center'>AirFrame</th>
                       
                        
                    </tr>
                    <tr>
                        <td><label htmlFor="" style={{padding:"12px"}}></label></td>
                        <td className=''><label htmlFor="Hours"  style={{paddingLeft:"5px"}} ><b>Hours</b></label></td>
                        <td><div className='tableflex'>
                          <input type="time" className='airframeinput' id='Hours' name='' onChange={handleChange}  />
                          </div></td>
                       
                    </tr>
                    <tr>
                        <td></td>
                        <td className='' style={{paddingLeft:"30px"}}><label htmlFor="ManufacturingDate" style={{paddingLeft:"5px"}}><b>Manufacturing Date</b></label></td> 
                        <td><div className='tableflex'><input type="date" className='airframeinput' id='ManufacturingDate' name='' onChange={handleChange} /></div></td>
                        
                    </tr>
                    <tr>
                        <td></td>
                        <td className='' style={{paddingLeft:"30px"}}><label htmlFor="Landings" style={{paddingLeft:"5px"}}><b>Landings</b></label></td>
                        <td  ><div className='tableflex'>
                        <input type="text" className='airframeinput' id='Landings' name='' onChange={handleChange} />
                          </div></td>
                        
                    </tr>
                    
                </table>
              {/* <Table  className=' mx-2 rounded-3 rhtable ms-5'>
                <thead >
                  <tr className='btn-bg-color text-center'>
                      <th className='text-center'>Periods</th>
                      <th className='text-center'>Value</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Hours</td>
                    <td><input type="text" name='' className='form-control p-0 '  onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>Manufacturing Date</td>
                    <td><input type="date" name='' className='form-control p-0 '  onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>Landings</td>
                    <td><input type="text" name='' className='form-control p-0 '  onChange={handleChange} /></td>
                </tr>
                </tbody>
              </Table> */}
            </div>
            <div className='row mt-1'>
              <h6 className="btn-bg-color text-white text-center p-1 btn-border mx-2">Other Details</h6>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                <Form.Group className='mt-3 mb-5'>
                  <input type="checkbox" className='mx-2 my-2' name='aircraftnotinuse' value={formData.aircraftnotinuse} onChange={handleChange} /> Aicraft Not in use<br />
                  <input type="checkbox" className='mx-2 my-2' name='markthisaircraftreadonly' value={formData.markthisaircraftreadonly} onChange={handleChange} /> Mark this Aircraft as ReadOnly<br/>
                  <input type="checkbox" className='mx-2 my-2' name='isflightlogunderutc' value={formData.isflightlogunderutc} onChange={handleChange} /> Is flight Log under UTC ?<br />
                </Form.Group>
              </div>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                <div className='row'>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <Form.Group >
                      <label className='mt-2 total-weight-section'>Not in Use Date</label>
                    </Form.Group>
                    <Form.Group >
                      <label className='mt-3 total-weight-section'>Read Only Date</label>
                    </Form.Group>
                  </div>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <Form.Group className='mt-2'>
                      <input type="date" name='notinusedate' className='form-control p-0' value={formData.notinusedate} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                      <input type="date" name='readonlydate' className='form-control p-0' value={formData.readonlydate} onChange={handleChange} />
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <input className="btn btn-light btn-border-attachment1 rounded px-1 p-1 mx-2 " type="button" value="Attach Dent and Buckle Chart" />
                <input className="btn btn-light btn-border-attachment2 rounded px-1 p-1 mx-2 " type="button" value="Remove Attachment" />
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-end mt-2'>
          <input className="btn btn-light btn-border rounded px-4 p-1 mx-2 " type="submit" value="Save" />
          <input className="btn btn-light btn-border rounded px-4 p-1 mx-2" type="button" value="print" />
          <input className="btn-border-close rounded px-4  p-1 mx-2" type="reset" value="Close" />
        </div>
      </form>
    </div>
  )
}

export default AircraftStatus