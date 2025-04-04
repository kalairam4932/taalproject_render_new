import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";
import './Ads.css'
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { reference } from '@popperjs/core';
import { base_url } from '../../../constant/url';

const AdsForm = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [formData, setFormData] = useState({
      DirectiveType: '',
      DirectiveNo: '',
      ATAChapter:'',
      reference:'',
      Note:'',
      Compliance:'',
      description: '',
      doneon:'',
      WorkOrderNo:'',
      LicenseNo:'',
      Place:'',
      actualManHours:'',
      remarks:'',
      RevisionNo:'',
      pageNo:'',
      BookNo:'',
      sourceDoc:'',
      airframeFrequency:'',
      airframeElapsedValue:'',
      airframeRemaining:'',
      extensionDate:'',
      extensionRemark:'',
      Remainingdays:'',
      applicable:false,

      })
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        let updatedData = {
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        };
    
        if (name === "airframeRemaining") {
            const selectedDate = new Date(value);
            const currentDate = new Date();
    
            // Calculate difference in days
            const diffTime = selectedDate - currentDate;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
    
            updatedData.Remainingdays = diffDays;
        }
    
        setFormData(updatedData);
    };
    

      // Get Data Id 
      // ✅ Fetch existing data if editing (ID exists)
      useEffect(() => {
        if (id) {
            axios.get(`${base_url}/api/assembly/getAssembly/${id}`)
                .then((res) => {
                    console.log("API Response:", res.data); // ✅ Check API response
                    setFormData(res.data);
                })
                .catch((err) => console.error("Error fetching data:", err));
        }
      }, [id]);

      const {data:ATAChapter,isLoading} = useQuery({
        queryKey :["ATAChapterkey"],
        queryFn : async() =>{
          const response = await axios.get(`${base_url}/api/aircraft/getata`);
          return response.data

        }


      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let response;
      
          if (id) {
            response = await axios.put(`${base_url}/api/assembly/updateAssembly/${id}`, formData); // Corrected template literals
            alert("Assembly Details updated successfully!");
          } else {
            response = await axios.post(`${base_url}/api/assembly/Postads`, formData);
            toast.success("Data submited")
          }
      
          console.log("Response:", response.data);
          navigate("/ADSTABLE"); // Redirect after success
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("Error submitting form.");
        }
      };

    return (
      <div className=' container mt-3 border p-2 rounded shadow'>
        <div className='row'>
            <h6 className='text-primary'>Assembly Directive Status</h6>
        </div>
        <div className='aircraft-status border p-2 px-4   rounded shadow'>
            <form onSubmit={handleSubmit}>
                <div className='row pt-3 '>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
                    <h6 className="btn-bg-color text-white text-center btn-border">Monitoring Details</h6>
                    <div className='row '>
                        {/* <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <Form.Group >
                                <label className='mt-2'>Insp Type</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-2'>Monitor type</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-3'>ATA Chapter</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-3'>Reference</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-3'>Description</label>
                            </Form.Group>
                        </div>
                        <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                            <Form.Group className='mt-2'>
                                <input type="text" name='InspType' className='form-control p-0 input-border' value={formData.InspType} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <input type="text" name='monitorType' className='form-control p-0 input-border' value={formData.monitorType} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                              <select className="form-control p-0 input-border" name="ATAChapter" value={formData.ATAChapter} onChange={handleChange}>
                                <option value="" disabled>Select...</option>
                                  {isLoading ? (
                                    <option value="" disabled>Loading.......</option>
                                  ) : (
                                    ATAChapter?.length > 0 ? (
                                      ATAChapter.map((data, index) => (
                                        <option key={index} value={data.ATAChapter}>
                                          {data.ataName}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="" disabled>No Data Available</option>
                                    )
                                  )}
                              </select>
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <input type="text" name='reference' className='form-control p-0 input-border' value={formData.reference} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <textarea name='description' rows='2' className='form-control p-0 input-border' value={formData.description} onChange={handleChange} />
                            </Form.Group>
                        </div> */}

                         {/* kalairam changes */}
                        <div className='col-12 mb-2 '>
                        <div className='row mt-1 '>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="DirectiveType" className='text-nowrap' >Directive Type</label>
                          </div>
                          <div className='col-7 '>
                          <input type="text" className="aisinput " id='DirectiveType' name='DirectiveType'  autoComplete="off" onChange={handleChange} />
                              
                          </div>
                    

                        </div>

                        <div className='row mt-1'>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="DirectiveNo" className='text-nowrap'>Directive No</label>
                          </div>
                          <div className='col-7'>
                          <input type="text" className="aisinput " id='DirectiveNo' name='DirectiveNo'  autoComplete="off" onChange={handleChange} />
                              
                          </div>
                    

                        </div>






                        <div className='row mt-1'>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="ATAChapter">ATA Chapter</label>
                          </div>
                          <div className='col-7'>
                          <select className="aisinput" name="ATAChapter" id="ATAChapter" value={formData.ATAChapter} onChange={handleChange}>
                                <option value="" disabled>Select...</option>
                                  {isLoading ? (
                                    <option value="" disabled>Loading.......</option>
                                  ) : (
                                    ATAChapter?.length > 0 ? (
                                      ATAChapter.map((data, index) => (
                                        <option key={index} value={data.ATAChapter}>
                                          {data.ataName}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="" disabled>No Data Available</option>
                                    )
                                  )}
                            </select>
                              
                          </div>
                    

                        </div>


                        <div className='row mt-1'>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="reference">Reference</label>
                          </div>
                          <div className='col-7'>
                          <input type="text" className="aisinput" id='reference' name='reference'  autoComplete="off" onChange={handleChange} />
                              
                          </div>
                    

                        </div>
                        <div className='row mt-1'>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="Note">Note</label>
                          </div>
                          <div className='col-7'>
                          <input type="text" className="aisinput" id='Note' name='Note'  autoComplete="off" onChange={handleChange} />
                              
                          </div>
                    

                        </div>
                        <div className='row mt-1'>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="Description">Description</label>
                          </div>
                          <div className='col-7'>
                          <textarea type="text" className="aisinput" id="Description" rows="2"  name='description'  autoComplete="off" onChange={handleChange} />
                              
                          </div>
                    

                        </div>






                        


                        </div>
                    </div>
                    <div className='row'>
                      <h6 className="btn-bg-color text-white text-center btn-border">Done On Details</h6>
                        {/* <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <Form.Group >
                                <label className='mt-2'>Done On</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-2'>Work Order No</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-3'>License No</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-2'>Place</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-2'>Actual Man Hours</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-3'>Remarks</label>
                            </Form.Group>
                        </div>
                        <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                            <Form.Group className='mt-2'>
                                <input type="date" name='doneon' className='form-control p-0 input-border' value={formData.doneon} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <input type="text" name='WorkOrderNo' className='form-control p-0 input-border' value={formData.WorkOrderNo} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                              <select className="form-control p-0 input-border" name="LicenseNo" value={formData.LicenseNo} onChange={handleChange}>  
                                <option selected>Select...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </Form.Group>
                            <Form.Group className='mt-2'>
                              <select className="form-control p-0 input-border" name="Place" value={formData.Place} onChange={handleChange}>  
                                <option selected>Select...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </Form.Group>
                            <Form.Group className='mt-2'>
                              <input type='text' name='actualManHours' className='form-control p-0 input-border' rows='2' value={formData.actualManHours} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                              <textarea name='remarks' className='form-control p-0 input-border' rows='2' value={formData.remarks} onChange={handleChange} />
                            </Form.Group>
                        </div> */}

                          {/* kalairam design */}
                        <div className='col-12'>
                        <div className='row mt-1'>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="doneon">Done On</label>
                          </div>
                          <div className='col-7'>
                          <input type="date" className="aisinput" id='doneon' name='doneon'  autoComplete="off" onChange={handleChange} />
                              
                          </div>
                        </div>
                        <div className='row mt-1'>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="WorkOrderNo">W.O. No</label>
                          </div>
                          <div className='col-7'>
                          <input type="text" className="aisinput" id='WorkOrderNo' name='WorkOrderNo'  autoComplete="off" onChange={handleChange} />
                              
                          </div>
                        </div>
                        <div className='row mt-1'>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="LicenseNo">License No</label>
                          </div>
                          <div className='col-7'>
                          <select className="aisinput" name="LicenseNo" id="LicenseNo"  value={formData.LicenseNo} onChange={handleChange}>
                                <option value="" disabled>Select...</option>
                                  {isLoading ? (
                                    <option value="" disabled>Loading.......</option>
                                  ) : (
                                    ATAChapter?.length > 0 ? (
                                      ATAChapter.map((data, index) => (
                                        <option key={index} value={data.ATAChapter}>
                                          {data.ataName}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="" disabled>No Data Available</option>
                                    )
                                  )}
                            </select>
                              
                          </div>
                    

                        </div>
                        <div className='row mt-1'>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="Place">Place</label>
                          </div>
                          <div className='col-7'>
                          <select className="aisinput" name="Place" id="Place" value={formData.Place} onChange={handleChange}>
                                <option value="" disabled>Select...</option>
                                  {isLoading ? (
                                    <option value="" disabled>Loading.......</option>
                                  ) : (
                                    ATAChapter?.length > 0 ? (
                                      ATAChapter.map((data, index) => (
                                        <option key={index} value={data.ATAChapter}>
                                          {data.ataName}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="" disabled>No Data Available</option>
                                    )
                                  )}
                            </select>
                              
                          </div>
                    

                        </div>

                        <div className='row mt-1'>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="actualManHours" className='text-nowrap'>Act. Man Hrs</label>
                          </div>
                          <div className='col-7'>
                          <input type="text" className="aisinput" id='actualManHours' name='actualManHours'  autoComplete="off" onChange={handleChange} />
                              
                          </div>
                        </div>
                        <div className='row mt-1'>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="Compliance" className='text-nowrap'>	M. of Compliance</label>
                          </div>
                          <div className='col-7'>
                          <textarea type="text" className="aisinput" id="Compliance" rows="2"  name='Compliance'  autoComplete="off" onChange={handleChange} />
                              
                          </div>
                    

                        </div>

                        <div className='row '>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="remarks">Remarks</label>
                          </div>
                          <div className='col-7'>
                          <textarea type="text" className="aisinput" id="remarks" rows="2"  name='remarks'  autoComplete="off" onChange={handleChange} />
                              
                          </div>
                    

                        </div>



                        </div>
                    </div>
                  </div>
                   {/* second col */}
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
                  <h6 className="btn-bg-color text-white text-center btn-border">Document Information Of the Engine</h6>
                    <div className='row'>

                        {/* <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <Form.Group >
                                <label className='mt-2'>Revision No</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-2'>Page No</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-3'>Book No</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-3'>Source Doc</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-2'>Attach file</label>
                            </Form.Group>
                        </div>
                        <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                            <Form.Group className='mt-2'>
                                <input type="text" name='RevisionNo' className='form-control p-0 input-border' value={formData.RevisionNo} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <input type="text" name='pageNo' className='form-control p-0 input-border' value={formData.pageNo} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <input type="text" name='BookNo' className='form-control p-0 input-border' value={formData.BookNo} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <input type="text" name='sourceDoc' className='form-control p-0 input-border' value={formData.sourceDoc} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <input type="file" name='attachFile' className='form-control p-0 input-border' value={formData.attachFile} onChange={handleChange} />
                            </Form.Group>
                        </div> */}

                        <div className='col-12'>
                        <div className='row mt-1'>
                            <div className='col-4  d-flex justify-content-end'>
                                <label htmlFor="RevisionNo">Revision No</label>
                            </div>
                            <div className='col-7'>
                            <input type="text" className="aisinput" id='RevisionNo' name='RevisionNo'  autoComplete="off" onChange={handleChange} />
                                
                            </div>
                        </div>

                        <div className='row mt-1'>
                            <div className='col-4  d-flex justify-content-end'>
                                <label htmlFor="pageNo">Page No</label>
                            </div>
                            <div className='col-7'>
                            <input type="text" className="aisinput" id='pageNo' name='pageNo'  autoComplete="off" onChange={handleChange} />
                                
                            </div>
                        </div>

                        <div className='row mt-1'>
                            <div className='col-4  d-flex justify-content-end'>
                                <label htmlFor="BookNo">Book No</label>
                            </div>
                            <div className='col-7'>
                            <input type="text" className="aisinput" id='BookNo' name='BookNo'  autoComplete="off" onChange={handleChange} />
                                
                            </div>
                        </div>
                        <div className='row mt-1'>
                            <div className='col-4  d-flex justify-content-end'>
                                <label htmlFor="sourceDoc">Source Doc</label>
                            </div>
                            <div className='col-7'>
                            <input type="text" className="aisinput" id='sourceDoc' name='sourceDoc'  autoComplete="off" onChange={handleChange} />
                                
                            </div>
                        </div>
                        <div className='row mt-1'>
                            <div className='col-4  d-flex justify-content-end'>
                                <label htmlFor="attachFile">Attach file</label>
                            </div>
                            <div className='col-7'>
                            <input type="file" className="aisinput" id='attachFile' name=''  autoComplete="off" onChange={handleChange} />
                                
                            </div>
                        </div>

                        </div>

                    </div>
                      
                    <h6 className="btn-bg-color text-white text-center  btn-border mt-4 mx-1 ">Elapsed and Remaining Values</h6>
                      <div className='row'>

                        <Table striped bordered hover className='mx-2 my-1 rounded-3'>
                          <thead >
                            <tr className='btn-bg-color text-center'>
                                <th>Periods</th>
                                <th>Frequency</th>
                                <th>Elapsed Val</th>
                                <th>Remaining</th>
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td>Months</td>
                              <td>3</td>
                              <td>0</td>
                              <td>{formData.Remainingdays}</td>
                          </tr>
                          </tbody>
                        </Table>
                        {/* <p className='fw-bold'>Please Note:Ellapsed and Remaining Values for Days/Months/Years will be in Days</p> */}
                      </div>

                      <h6 className="btn-bg-color text-white text-center btn-border mx-1 mt-2">Airframe Values</h6>
                      <div className='row'>

                        <Table striped bordered hover className='my-2 mx-2 rounded-3'>
                          <thead >
                            <tr className='btn-bg-color text-center'>
                                <th>Periods</th>
                                <th>Done On</th>
                                <th>Extension</th>
                                <th>Due At.</th>
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td>Date</td>
                              <td><input type="date" style={{width:'70px'}} name='airframeFrequency' className='form-control p-0 input-border' value={formData.airframeFrequency}  onChange={handleChange} /></td>
                              <td><input type="text" style={{width:'70px'}} name='airframeElapsedValue' className='form-control p-0 input-border' value={formData.airframeElapsedValue}  onChange={handleChange} /></td>
                              <td><input type="date" style={{width:'70px'}} name='airframeRemaining' className='form-control p-0 input-border' value={formData.airframeRemaining}  onChange={handleChange} /></td>
                          </tr>
                          </tbody>
                        </Table>
                      </div>
                  </div>

                  {/* thrid col */}
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
                  <div className='col-12'>
                      <div className='row mt-1'>
                            <div className='col-4  d-flex justify-content-end'>
                                <label htmlFor="extensionDate" className='text-nowrap'>Extension Date</label>
                            </div>
                            <div className='col-7'>
                            <input type="date" className="aisinput" id='extensionDate' name='extensionDate'  autoComplete="off" onChange={handleChange} />
                                
                            </div>
                      </div>
                      <div className='row mt-1'>
                          <div className='col-4  d-flex justify-content-end'>
                              <label htmlFor="extensionRemark">Remark</label>
                          </div>
                          <div className='col-7'>
                          <textarea type="text" className="aisinput" id="extensionRemark" rows="2"  name='extensionRemark'  autoComplete="off" onChange={handleChange} />
                              
                          </div>
                    

                      </div>


                      
                      </div>
                    <div className='row'>
                      <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                        {/* <Form.Group >
                          <label className='mt-4 '>Extension Date</label>
                        </Form.Group>
                        <Form.Group >
                          <label className='mt-4 '>Remark</label>
                        </Form.Group> */}
                        <Form.Group >
                          <label className='mt-3 total-weight-section text-end'>Applicable (Un-check if not required to be Monitored from now onwards ..)</label>
                        </Form.Group>
                      </div>
                      <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                        {/* <Form.Group className='mt-3'>
                          <input type="date" name='extensionDate' className='form-control p-0 input-border' value={formData.extensionDate} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className='mt-2'>
                          <textarea name='extensionRemark' className='form-control p-0 input-border' rows='2' value={formData.extensionRemark} onChange={handleChange} />
                        </Form.Group> */}
                        <Form.Group className='mt-2 mb-5'>
                          <input type="checkbox" className='' name='applicable' label="Applicable (Un-check if not required to be Monitored from now onwards ..)" value={formData.applicable} onChange={handleChange} />
                        </Form.Group>
                      </div>


                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-end mt-2'>
                  <input className="btn btn-light btn-border rounded px-4 p-1 mx-2 " type="submit" value="Save" />
                  <input className="btn-border-close rounded px-4  p-1 mx-2" type="reset" value="Close" />
                </div>
            </form>
        </div>
      </div>  
    )
}

export default AdsForm