import React, {useState} from 'react'
import { Form } from "react-bootstrap";
import './ata.css'
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from 'react-hot-toast';
import { base_url } from '../../../constant/url'
import {  useNavigate } from 'react-router-dom';

const AddAta = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
        ataName : '',
        ataCode: '',
    })
  
      const handleChange = (e) => {
        const {name,value,type,checked}= e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
          });
      }

                    // API function to send data
                    const atapostapi = async (data) => {
                      
                      const response = await axios.post(`${base_url}/api/aircraft/postATA`, data,);
                      
                      return response.data;
                    };
          
                  // useMutation for API call
                  const mutation = useMutation({
                      mutationFn: atapostapi,
                      onSuccess: (data) => {
          
                          toast.success("Data Submited")
                          setFormData({
                            ataName : '',
                            ataCode: '',
                   
                          })
                          setTimeout(()=>{
                            navigate('/ataTable')
                          },1000)
                          
                       
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
        <h6 className="btn-bg-color text-white text-center p-2 btn-border">ATA</h6>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5'>
            <div className='row '>
                <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                    <Form.Group >
                        <label className='mt-3'>ATA Name</label>
                    </Form.Group>
                    <Form.Group >
                        <label className='mt-3'>ATA Code</label>
                    </Form.Group>
                </div>
                <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                    <Form.Group className='mt-2'>
                        <input type="text" name='ataName' className='form-control input-border'  value={formData.ataName} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <input type="text" name='ataCode' className='form-control input-border'  value={formData.ataCode} onChange={handleChange} />
                    </Form.Group>
                </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-end mt-2'>
          <input className="btn btn-light btn-border rounded px-4 p-1 mx-2 " type="submit" value="Save" />
          <input className="btn-border-close rounded px-4  p-1 mx-2" type="reset" value="Close" onClick={()=>navigate('/ataTable')} />
        </div>
      </form>
    </div>
  )
}

export default AddAta
