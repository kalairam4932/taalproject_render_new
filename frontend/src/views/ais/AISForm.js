import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";
import './ais.css'
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { reference } from '@popperjs/core';
import { base_url } from '../../../constant/url';

const AISForm = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [formData, setFormData] = useState({
      InspType: '',
      monitorType: '',
      ATAChapter:'',
      reference:'',
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
      applicable:false,

      })
    
      const handleChange = (e) => {
          const {name,value,type,checked}= e.target;
          setFormData({
              ...formData,
              [name]: type === "checkbox" ? checked : value,
            });
      }

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
            response = await axios.post(`${base_url}/api/assembly/createAssembly`, formData);
            alert("Assembly Details submitted successfully!");
          }
      
          console.log("Response:", response.data);
          navigate("/ais"); // Redirect after success
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("Error submitting form.");
        }
      };

    return (
        <div className='aircraft-status border p-2 px-4 rounded shadow'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
                    <h6 className="btn-bg-color text-white text-center btn-border">Monitoring Details</h6>
                    <div className='row '>
                        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
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
                        </div>
                    </div>
                    <div className='row'>
                      <h6 className="btn-bg-color text-white text-center btn-border">Done On Details</h6>
                        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
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
                        </div>
                    </div>
                  </div>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
                    <div className='row'>
                        <h6 className="btn-bg-color text-white text-center btn-border">Document Information Of the Engine</h6>
                        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
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
                        </div>
                      </div>
                      <div className='row'>
                        <h6 className="btn-bg-color text-white text-center btn-border mt-4 mx-1">Elapsed and Remaining Values</h6>
                        <Table striped bordered hover className='mx-2 my-1 rounded-3'>
                          <thead >
                            <tr className='btn-bg-color text-center'>
                                <th>Periods</th>
                                <th>Frequency</th>
                                <th>Elapsed Value</th>
                                <th>Remaining</th>
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td>Months</td>
                              <td>3</td>
                              <td>0</td>
                              <td>90</td>
                          </tr>
                          </tbody>
                        </Table>
                        {/* <p className='fw-bold'>Please Note:Ellapsed and Remaining Values for Days/Months/Years will be in Days</p> */}
                      </div>
                      <div className='row'>
                        <h6 className="btn-bg-color text-white text-center btn-border mx-1">Airframe Values</h6>
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
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
                    
                    <div className='row'>
                      <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                        <Form.Group >
                          <label className='mt-4 total-weight-section'>Extension Date</label>
                        </Form.Group>
                        <Form.Group >
                          <label className='mt-4 total-weight-section'>Remark</label>
                        </Form.Group>
                        <Form.Group >
                          <label className='mt-3 total-weight-section'>Applicable (Un-check if not required to be Monitored from now onwards ..)</label>
                        </Form.Group>
                      </div>
                      <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                        <Form.Group className='mt-3'>
                          <input type="date" name='extensionDate' className='form-control p-0 input-border' value={formData.extensionDate} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className='mt-2'>
                          <textarea name='extensionRemark' className='form-control p-0 input-border' rows='2' value={formData.extensionRemark} onChange={handleChange} />
                        </Form.Group>
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
    )
}

export default AISForm