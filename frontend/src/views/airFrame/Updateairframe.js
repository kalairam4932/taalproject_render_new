import React, { useState } from 'react'
import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";
import './airframe.css'
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';
import { base_url } from '../../../constant/url';
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom"; 

const Updateairframe = () => {

    const { id } = useParams();
    const userid = id;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Installedon: '',
        ATAChapter:'',
        Manufacturer:'',
        Model:'',
        SerialNo:'',


    
      })
    
      const handleChange = (e) => {
          const {name,value,type,checked}= e.target;
          setFormData({
              ...formData,
              [name]: type === "checkbox" ? checked : value,
            });
      }


      const {data:ATAChapter,isLoading} = useQuery({
        queryKey :["ATAChapterkey"],
        queryFn : async() =>{
          const response = await axios.get("https://taal.onrender.com/api/aircraft/getata");
          return response.data

        }


      });

      const {data:Manufacturerdata,isLoading:loading} = useQuery({
        queryKey :["Manufacturerdatakey"],
        queryFn : async() =>{
          const response = await axios.get("https://taal.onrender.com/api/aircraft/getManufacturedata");
          return response.data

        }


      });

      const {data:Modeldata,isLoading:loadingmodel} = useQuery({
        queryKey :["Modeldatakey"],
        queryFn : async() =>{
          const response = await axios.get("https://taal.onrender.com/api/aircraft/getmodelname");
          return response.data

        }


      });

      const {data:updatedata,isLoading:updatedataloading} = useQuery({
        queryKey :["updatedatakey"],
        queryFn : async() =>{
          const response = await axios.get(`${base_url}/api/aircraft/getairframedata/${userid}`);
          setFormData(response.data)
          return response.data

        }


      });
      console.log("formdata",formData)
      const updateairframedata = async ({data,updateid}) => {
        const response = await axios.put(`${base_url}/api/aircraft/updateairframe/${updateid}`, data,);
        return response.data;
    };
      
      const mutation = useMutation({
        mutationFn: updateairframedata,
        onSuccess: (data) => {

            toast.success("updated");
            setTimeout(() => {
                navigate("/airFrame");
            }, 1000);

            
            
         
        },
        onError: (error) => {
          alert("Error saving aircraft data.");
          console.error("Error:", error);
        }
      });
    
      const handleSubmit =(e) => {
          e.preventDefault();
          console.log("Submitted Data:", formData);
          mutation.mutate({ data: formData, updateid: userid });

      }

    return (
        <div className='aircraft-status border p-4 rounded shadow'>
            {updatedataloading && <p>Loading.....</p>}
            {!updatedataloading && <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5'>
                    <h6 className="btn-bg-color text-white text-center p-2 btn-border"> AirFrame Update</h6>
                    
                    <div className='row '>
                        <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                            <Form.Group >
                                <label className='mt-3'>Installed On</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-4'>ATA Chapter</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-4'>Manufacturer</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-4'>Model</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-3'>Serial No</label>
                            </Form.Group>

                        </div>
                        <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                            <Form.Group className='mt-2'>
                                <input type="date" name='Installedon' className='form-control input-border' value={formData.Installedon} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                            <select className="form-control input-border" name="ATAChapter" value={formData.ATAChapter} onChange={handleChange}>
                          
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
                            <select className="form-control input-border" name="Manufacturer" value={formData.Manufacturer} onChange={handleChange}>
                                <option value="" disabled>Select...</option>

                                {loading ? (
                            <option value="" disabled>Loading.......</option>
                          ) : (Manufacturerdata?.length>0 ? (Manufacturerdata.map((data)=>{
                                  return <option>
                                    {data.manufactureName}
                                  </option>
                                })):(<> </>))}
                              </select>
                            </Form.Group>
                            <Form.Group className='mt-2'>
                              <select className="form-control input-border" name="Model" value={formData.Model} onChange={handleChange}>  
                                <option value="" disabled>Select...</option>
                               {loadingmodel ? (<p>Loading.....</p>):(Modeldata?.length>0 ? (Modeldata.map((data)=>(
                                  <option>
                                    {data.ModelName}
                                  </option>
                               ))):(<></>))}
                              </select>
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <input type="text" name='SerialNo' className='form-control input-border' value={formData.SerialNo} onChange={handleChange} />
                            </Form.Group>
                            
                        </div>
                    </div>

                  </div>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7'>

  
                  </div>
                </div>
                <div className='d-flex justify-content-end mt-2'>
                  <input className="btn btn-light btn-border rounded px-4 p-1 mx-2 " type="submit" value="Save" />
                  <input className="btn-border-close rounded px-4  p-1 mx-2" type="reset" value="Close" />
                </div>
            </form>}
        </div>
    )
}

export default Updateairframe