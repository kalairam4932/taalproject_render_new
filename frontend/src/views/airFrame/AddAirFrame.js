import React, { useState } from 'react'
import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";
import './airframe.css'
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { base_url } from '../../../constant/url';

const AddAirFrame = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      Installedon: '',
      ATAChapter:'',
      Manufacturer:'',
      Model:'',
      SerialNo:'',
      Position:'',
      InstallationRemark:'',
      WorkOrderNo:'',
      LicenseNo:'',
      Place:'',
      Note:'',
      RevisionNo:'',
      BookNo:'',
      SourceDoc:'',
      PageNo:'',

    
      })
    
      const handleChange = (e) => {
          const {name,value,type,checked}= e.target;
          setFormData({
              ...formData,
              [name]: type === "checkbox" ? checked : value,
            });
      }
      const postdata_airframe = async(data)=>{
        const response = await axios.post(`${base_url}/api/aircraft/postairframe`,data)
        return response.data;


      }
      const mutation = useMutation({
        mutationFn : postdata_airframe,
        onSuccess : ()=>{
          toast.success("Data Submitted")
          setFormData(
            {
              Installedon: '',
              ATAChapter:'',
              Manufacturer:'',
              Model:'',
              SerialNo:'',
              Position:'',
              InstallationRemark:'',
              WorkOrderNo:'',
              LicenseNo:'',
              Place:'',
              Note:'',
              RevisionNo:'',
              BookNo:'',
              SourceDoc:'',
              PageNo:'',
            }
          )
          ,setTimeout(() => {
            navigate("/airFrame");
          }, 1000);
        },

        onError : (error)=>{
          console.error("Error in airframe post data:", error.response?.data || error.message); 
        }
      })

      const {data:ATAChapter,isLoading} = useQuery({
        queryKey :["ATAChapterkey"],
        queryFn : async() =>{
          const response = await axios.get(`${base_url}/api/aircraft/getata`);
          return response.data

        }


      });

      const {data:places,isLoading:placesloading} = useQuery({
        queryKey :["placeskey"],
        queryFn : async() =>{
          const response = await axios.get(`${base_url}/api/aircraft/getplaces`);
          return response.data

        }


      });

      const {data:licens,isLoading:licensloading} = useQuery({
        queryKey :["licenskey"],
        queryFn : async() =>{
          const response = await axios.get(`${base_url}/api/aircraft/getlicences`);
          return response.data

        }


      });
      const {data:Manufacturerdata,isLoading:loading} = useQuery({
        queryKey :["Manufacturerdatakey"],
        queryFn : async() =>{
          const response = await axios.get(`${base_url}/api/aircraft/getManufacturedata`);
          return response.data

        }


      });

      const {data:Modeldata,isLoading:loadingmodel} = useQuery({
        queryKey :["Modeldatakey"],
        queryFn : async() =>{
          const response = await axios.get(`${base_url}/api/aircraft/getmodelname`);
          return response.data

        }


      });
    
      const handleSubmit =(e) => {
          e.preventDefault();
          console.log("Submitted Data:", formData);
          mutation.mutate(formData)
      }

    return (
        // <div className='aircraft-status border p-4 rounded shadow mt-3'>
        //     <form onSubmit={handleSubmit}>
        //         <div className='row '>
        //           <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
        //             <h6 className="btn-bg-color p-1 text-white text-center btn-border">Installation Information of the AirFrame</h6>
        //             <div className='row '>
        //                 <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
        //                     <Form.Group >
        //                         <label className='mt-2'>Installed On</label>
        //                     </Form.Group>
        //                     <Form.Group >
        //                         <label className='mt-2'>ATA Chapter</label>
        //                     </Form.Group>
        //                     <Form.Group >
        //                         <label className='mt-2'>Manufacturer</label>
        //                     </Form.Group>
        //                     <Form.Group >
        //                         <label className='mt-2'>Model</label>
        //                     </Form.Group>
        //                     <Form.Group >
        //                         <label className='mt-3 mb-1'>Serial No</label>
        //                     </Form.Group>
        //                     <Form.Group >
        //                         <label className='mt-2'>Position</label>
        //                     </Form.Group>
        //                     <Form.Group >
        //                         <label className='my-3 installation'>Installation </label>
        //                     </Form.Group>
        //                     <Form.Group >
        //                         <label className='mt-1'>Work order </label>
        //                     </Form.Group>
        //                     <Form.Group >
        //                         <label className='mt-2'>License No</label>
        //                     </Form.Group>
        //                     <Form.Group >
        //                         <label className='mt-2'>Place</label>
        //                     </Form.Group>
        //                     <Form.Group >
        //                         <label className='my-4'>Note</label>
        //                     </Form.Group>
        //                 </div>
        //                 <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
        //                     <Form.Group className='mt-2'>
        //                         <input type="date" name='Installedon' className='form-control p-0 input-border' value={formData.Installedon} onChange={handleChange} />
        //                     </Form.Group>
        //                     <Form.Group className='mt-2'>
        //                     <select className=" w-100 input-border" name="ATAChapter" value={formData.ATAChapter} onChange={handleChange}>
                          
        //                   <option value="" disabled>Select...</option>

                         
        //                   {isLoading ? (
        //                     <option value="" disabled>Loading.......</option>
        //                   ) : (
        //                     ATAChapter?.length > 0 ? (
        //                       ATAChapter.map((data, index) => (
        //                         <option key={index} value={data.ATAChapter}>
        //                           {data.ataName}
        //                         </option>
        //                       ))
        //                     ) : (
        //                       <option value="" disabled>No Data Available</option>
        //                     )
        //                   )}
        //                 </select>

        //                     </Form.Group>
        //                     <Form.Group className='mt-2'>
        //                     <select className="w-100 input-border" name="Manufacturer" value={formData.Manufacturer} onChange={handleChange}>
        //                         <option value="" disabled>Select...</option>

        //                         {loading ? (
        //                     <option value="" disabled>Loading.......</option>
        //                   ) : (Manufacturerdata?.length>0 ? (Manufacturerdata.map((data)=>{
        //                           return <option>
        //                             {data.manufactureName}
        //                           </option>
        //                         })):(<> </>))}
        //                       </select>
        //                     </Form.Group>
        //                     <Form.Group className='mt-2'>
        //                       <select className="w-100 input-border" name="Model" value={formData.Model} onChange={handleChange}>  
        //                         <option value="" disabled>Select...</option>
        //                        {loadingmodel ? (<p>Loading.....</p>):(Modeldata?.length>0 ? (Modeldata.map((data)=>(
        //                           <option>
        //                             {data.ModelName}
        //                           </option>
        //                        ))):(<></>))}
        //                       </select>
        //                     </Form.Group>
        //                     <Form.Group className='mt-2'>
        //                         <input type="text" name='SerialNo' className='form-control p-0 input-border' value={formData.SerialNo} onChange={handleChange} />
        //                     </Form.Group>
        //                     <Form.Group className='mt-2'>
        //                         <input type="text" name='Position' className='form-control p-0 input-border' value={formData.Position} onChange={handleChange} />
        //                     </Form.Group>
        //                     <Form.Group className='mt-2'>
        //                       <textarea name='InstallationRemark' className='form-control p-0 input-border' rows='2' value={formData.InstallationRemark} onChange={handleChange} />
        //                     </Form.Group>
        //                     <Form.Group className='mt-2'>
        //                         <input type="text" name='WorkOrderNo' className='form-control p-0 input-border' value={formData.WorkOrderNo} onChange={handleChange} />
        //                     </Form.Group>
        //                     <Form.Group className='mt-2'>
        //                       <select className="w-100 p-0 input-border" name="LicenseNo" value={formData.LicenseNo} onChange={handleChange}>  
        //                       <option value="" disabled>Select...</option>

                         
        //                             {licensloading ? (
        //                               <option value="" disabled>Loading.......</option>
        //                             ) : (
        //                               licens?.length > 0 ? (
        //                                 licens.map((data, index) => (
        //                                   <option key={index} value={data.PilotName}>
        //                                     {data.PilotName}
        //                                   </option>
        //                                 ))
        //                               ) : (
        //                                 <option value="" disabled>No Data Available</option>
        //                               )
        //                             )}
        //                       </select>
        //                     </Form.Group>
        //                     <Form.Group className='mt-2'>
        //                       <select className="w-100 input-border" name="Place" value={formData.Place} onChange={handleChange}>  
        //                       <option value="" disabled>Select...</option>

                         
        //                             {placesloading ? (
        //                               <option value="" disabled>Loading.......</option>
        //                             ) : (
        //                               places?.length > 0 ? (
        //                                 places.map((data, index) => (
        //                                   <option key={index} value={data.place}>
        //                                     {data.place}
        //                                   </option>
        //                                 ))
        //                               ) : (
        //                                 <option value="" disabled>No Data Available</option>
        //                               )
        //                             )}
        //                       </select>
        //                     </Form.Group>
        //                     <Form.Group className='mt-2'>
        //                       <textarea name='Note' className='form-control p-0 input-border' rows='2' value={formData.Note} onChange={handleChange} />
        //                     </Form.Group>
        //                 </div>
        //             </div>
        //           </div>

        //           <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 col-xxl-5 ms-5 '>
        //           <div className='row'>
        //               <h6 className="btn-bg-color text-white text-center btn-border p-1">Document Information Of the AirFrame</h6>
        //               <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5  '>
        //                   <Form.Group >
        //                       <label className='mt-2'>Revision No</label>
        //                   </Form.Group>
        //                   <Form.Group >
        //                       <label className='my-2'>Book No</label>
        //                   </Form.Group>
        //                   <Form.Group >
        //                       <label className='mt-2'>Attach file</label>
        //                   </Form.Group>
        //                   <Form.Group >
        //                       <label className='mt-2'>Source Doc</label>
        //                   </Form.Group>
        //                   <Form.Group >
        //                       <label className='my-2'>Page No</label>
        //                   </Form.Group>
        //               </div>
        //               <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
        //                   <Form.Group className='mt-2'>
        //                       <input type="text" name='RevisionNo' className='form-control p-0 input-border' value={formData.RevisionNo} onChange={handleChange} />
        //                   </Form.Group>
        //                   <Form.Group className='mt-2'>
        //                       <input type="text" name='BookNo' className='form-control p-0 input-border' value={formData.BookNo} onChange={handleChange} />
        //                   </Form.Group>
        //                   <Form.Group className='mt-2'>
        //                       <input type="file" name='attachFile' className='form-control p-0 input-border' value={formData.attachFile} onChange={handleChange} />
        //                   </Form.Group>
        //                   <Form.Group className='my-2'>
        //                     <input type="text" name='SourceDoc' className='form-control p-0 input-border' value={formData.SourceDoc} onChange={handleChange} />
        //                   </Form.Group>
        //                   <Form.Group className='mt-2'>
        //                     <input type="text" name='PageNo' className='form-control p-0 input-border' value={formData.PageNo} onChange={handleChange} />
        //                   </Form.Group>
        //               </div>
        //             </div>
        //             <div className='row my-1'>
        //               <h6 className="btn-bg-color text-white text-center btn-border mx-1 p-1">Time Since New Values Of Aircraft (TNS)</h6>
        //               <Table striped bordered hover className='myy-1 mx-1 rounded-3'>
        //                 <thead >
        //                   <tr className='btn-bg-color text-center'>
        //                       <th>Periods</th>
        //                       <th>AirFrame</th>
        //                   </tr>
        //                 </thead>
        //                 <tbody>
        //                 <tr>
        //                     <td>Hours</td>
        //                     <td><input type="text" name='tableHours' className='form-control p-0 input-border'  onChange={handleChange} /></td>
        //                 </tr>
        //                 <tr>
        //                     <td>Manufacturing Date</td>
        //                     <td><input type="date" name='tableDate' className='form-control p-0 input-border'  onChange={handleChange} /></td>
        //                 </tr>
        //                 <tr>
        //                     <td>Landings</td>
        //                     <td><input type="text" name='tableLandings' className='form-control p-0 input-border'  onChange={handleChange} /></td>
        //                 </tr>
        //                 </tbody>
        //               </Table>
        //             </div>
        //           </div>
        //         </div>
        //         <div className='d-flex justify-content-end mt-2'>
        //           <input className="btn btn-light btn-border rounded px-4 p-1 mx-2 " type="submit" value="Save" />
        //           <input className="btn-border-close rounded px-4  p-1 mx-2" type="reset" value="Close" />
        //         </div>
        //     </form>
        // </div>

        <div className='rhbody container mt-3 border p-2 rounded shadow'>
        <div className='row'>
            <h6 className='text-primary'>AirFrame Form</h6>
        </div>


        {/* form designs */}
        <div className='border p-3 rounded shadow'>
            <form  onSubmit={handleSubmit}>
            <div className='row '>
                <div className='col-6  '>
                <h6 className="btn-bg-one text-white text-center btn-border mx-1 p-1">Installation Information of the AirFrame</h6>
             
                <div className='p-2'>

                
                <div className='row '>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="Installedon">Installed on</label>
                    </div>
                    <div className='col-6 '>
                        <input type="date" className="input " id='Installedon' name='Installedon' autoComplete="off" onChange={handleChange} />
                       
                    </div>

                </div>
                <div className='row mt-1'>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="ATAChapter">ATA Chapter</label>
                    </div>
                    <div className='col-6'>
                        <select className="input " id="ATAChapter" name="ATAChapter" onChange={handleChange} >
                        <option value='' disabled selected>Select...</option>
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
                        <label htmlFor="Manufacturer">Manufacturer</label>
                    </div>
                    <div className='col-6'>
              
                        <select className="input " id="Manufacturer" name="Manufacturer" onChange={handleChange} >
                        <option value='' disabled selected>Select...</option>
                          {loading ? (
                            <option value="" disabled>Loading.......</option>
                          ) : (Manufacturerdata?.length>0 ? (Manufacturerdata.map((data)=>{
                                  return <option>
                                    {data.manufactureName}
                                  </option>
                                })):(<> </>))}

                        </select>
                    </div>
                    

                </div>
                <div className='row mt-1'>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="Model">Model</label>
                    </div>
                    <div className='col-6'>
              
                        <select className="input " id="Model" name="Model" onChange={handleChange}>
                        <option value='' disabled selected>Select...</option>
                          {loadingmodel ? (<p>Loading.....</p>):(Modeldata?.length>0 ? (Modeldata.map((data)=>(
                                  <option>
                                    {data.ModelName}
                                  </option>
                               ))):(<></>))
                          }
                        </select>
                    </div>
                    

                </div>
                <div className='row mt-1'>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="SerialNo">Serial No</label>
                    </div>
                    <div className='col-6'>
                    <input type="text" className="input " id='SerialNo' name='SerialNo'  autoComplete="off" onChange={handleChange}  />
                        
                    </div>
                    

                </div>
                <div className='row mt-1'>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="Position">Position</label>
                    </div>
                    <div className='col-6'>
                    <input type="text" className="input " id='Position' name='Position'  autoComplete="off" onChange={handleChange} />
                        
                    </div>
                    

                </div>
                <div className='row mt-1'>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="InstallationRemark">Installation Remark</label>
                    </div>
                    <div className='col-6'>
                    <textarea type="text" className="input" rows="2" id='InstallationRemark' name='InstallationRemark'  autoComplete="off" onChange={handleChange} />
                        
                    </div>
                    

                </div>
                <div className='row '>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="WorkOrderNo">Work Order No</label>
                    </div>
                    <div className='col-6'>
                    <input type="text" className="input " id='WorkOrderNo' name='WorkOrderNo' autoComplete="off" onChange={handleChange} />
                        
                    </div>
                    

                </div>
                <div className='row mt-1'>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="Place">Place</label>
                    </div>
                    <div className='col-6'>
                    <select className="input " id="Place" name="Place" onChange={handleChange} >
                        <option value='' disabled selected>Select...</option>


                                    {placesloading ? (
                                      <option value="" disabled>Loading.......</option>
                                    ) : (
                                      places?.length > 0 ? (
                                        places.map((data, index) => (
                                          <option key={index} value={data.place}>
                                            {data.place}
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
                        <label htmlFor="LicenseNo">License No</label>
                    </div>
                    <div className='col-6'>
                    <select className="input " id="LicenseNo" name="LicenseNo" onChange={handleChange} >
                        <option value='' disabled selected>Select...</option>
                                    {licensloading ? (
                                      <option value="" disabled>Loading.......</option>
                                    ) : (
                                      licens?.length > 0 ? (
                                        licens.map((data, index) => (
                                          <option key={index} value={data.PilotName}>
                                            {data.PilotName}
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
                        <label htmlFor="Note">Note</label>
                    </div>
                    <div className='col-6'>
                    <textarea type="text" className="input" rows="2" id='Note' name='Note'  autoComplete="off" onChange={handleChange} />
                        
                    </div>
                    

                </div>




                </div>


                </div>


                <div className='col-6'>
                <h6 className="btn-bg-color text-white text-center btn-border mx-1 p-1">Document Information Of the AirFrame</h6>

                <div className='p-2'>


                <div className='row'>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="RevisionNo">Revision No</label>
                    </div>
                    <div className='col-6'>
                    <input type="text" className="input " id='RevisionNo' name='RevisionNo' autoComplete="off" onChange={handleChange}  />
                        
                    </div>
                    
                </div>

                <div className='row mt-1'>
                <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="BookNo">Book No</label>
                    </div>
                    <div className='col-6'>
                    <input type="text" className="input " id='BookNo' name='BookNo' autoComplete="off" onChange={handleChange}  />
                        
                    </div>
                </div>

               



                <div className='row mt-1'>
                        <div className='col-4 d-flex justify-content-end'>
                        <label htmlFor="PageNo">Page No</label>
                        </div>
                        <div className='col-6'>
                            <input type="text" className="input " id='PageNo' name='PageNo' autoComplete="off"  onChange={handleChange}  />
                                
                        </div>

                </div>

                <div className='row mt-1 '>
                        <div className='col-4 d-flex justify-content-end'>
                        <label htmlFor="SourceDoc">Source Doc</label>
                        </div>
                        <div className='col-6'>
                            <input type="text" className="input " id='SourceDoc' name='SourceDoc' autoComplete="off" onChange={handleChange}   />
                                
                        </div>

                </div>

                <div className='row mt-1'>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="AttachFile">Attach File</label>
                    </div>
                    <div className='col-6'>
                    <input type="file" className="input " id='AttachFile' name='AttachFile' autoComplete="off"  />
                        
                    </div>
                    

                </div>
                


                <h6 className="btn-bg-color text-white text-center btn-border mx-1 p-1 mt-3">Time Since New Values Of Aircraft (TNS)</h6>


                  

                <table className='mt-2 airframetab ms-5'>
                    <tr>
                        <th className='text-center' ></th>
                        <th className='text-center'>Periods</th>
                        <th className='text-center'>AirFrame</th>
                       
                        
                    </tr>
                    <tr>
                        <td><label htmlFor="" style={{padding:"12px"}}></label></td>
                        <td className=''><label htmlFor="Hours"  style={{paddingLeft:"5px"}} ><b>Hours</b></label></td>
                        <td><div className='tableflex'>
                          <input type="time" className='airframeinput' id='Hours' name='Hours' onChange={handleChange}  />
                          </div></td>
                       
                    </tr>
                    <tr>
                        <td></td>
                        <td className='' style={{paddingLeft:"30px"}}><label htmlFor="ManufacturingDate" style={{paddingLeft:"5px"}}><b>Manufacturing Date</b></label></td> 
                        <td><div className='tableflex'><input type="date" className='airframeinput' id='ManufacturingDate' name='ManufacturingDate' onChange={handleChange} /></div></td>
                        
                    </tr>
                    <tr>
                        <td></td>
                        <td className='' style={{paddingLeft:"30px"}}><label htmlFor="Landings" style={{paddingLeft:"5px"}}><b>Landings</b></label></td>
                        <td  ><div className='tableflex'>
                        <input type="text" className='airframeinput' id='Landings' name='Landings' onChange={handleChange} />
                          </div></td>
                        
                    </tr>
                    
                </table>

                </div>
                </div>
            </div>


            <div className='row mt-3'>
                        <div className='col-12 d-flex justify-content-end'>

                        {/* <button type='submit' className='btnrh'>save</button> */}
                        <input className="btn btn-light btn-border rounded px-4 p-1 mx-2 " type="submit" value="Save" />

                        </div>

            </div>

            
            </form>
        </div>
    </div>
    )
}

export default AddAirFrame