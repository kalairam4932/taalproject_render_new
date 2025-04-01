import React, {useState,useEffect } from 'react'
import { Form } from "react-bootstrap";
import './model.css'
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from 'react-hot-toast';
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { base_url } from '../../../../constant/url';

import { useNavigate } from "react-router-dom"; 

const Updatemodeldata = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient(); 
    const updateid = id 
    const [formData, setFormData] = useState({
        ModelName : '',
        Manufacturer: '',
        primary_modal: '',
      })
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value, 
        }));
      };
      

                        //   const modeldatapostapi = async (data) => {
                        //     const response = await axios.post("https://taal.onrender.com/api/aircraft/modeldatapost", data,);
                        //     return response.data;
                        //   };
                
                        // // useMutation for API call
                        // const mutation = useMutation({
                        //     mutationFn: modeldatapostapi,
                        //     onSuccess: (data) => {
                
                        //         toast.success("Data Submited")
                        //         setFormData({
                        //           modelName : '',
                        //           manufacturer: '',
                        //           primaryModel: '',
                         
                        //         })
                                
                                
                             
                        //     },
                        //     onError: (error) => {
                        //       alert("Error saving aircraft data.");
                        //       console.error("Error:", error);
                        //     }
                        //   });

            
            


            const { data: primarydatas1  } = useQuery({
              queryKey: ["primarydatakey1"],
              queryFn: async () => {
                try {
                  const res = await fetch("https://taal.onrender.com/api/aircraft/getprimary", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
          
                  if (!res.ok) throw new Error("Failed to fetch data");
                  return res.json();
                } catch (error) {
                  console.log(`Error message: ${error.message}`);
                  throw error;
                }
              },
            });
            const { data: getManufacturedatas } = useQuery({
                          queryKey: ["getManufacturedatakey"],
                          queryFn: async () => {
                            try {
                              const res = await fetch("https://taal.onrender.com/api/aircraft/getManufacturedata", {
                                method: "GET",
                                credentials: "include",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                              });
                      
                              if (!res.ok) throw new Error("Failed to fetch data");
                              return res.json();
                            } catch (error) {
                              console.log(`Error message: ${error.message}`);
                              throw error;
                            }
                          },
            });

            const modeldatapostapi = async ({data,updateid}) => {
                const response = await axios.put(`${base_url}/api/aircraft/updatemodelname/${updateid}`, data,);
                return response.data;
            };

            const mutation = useMutation({
                mutationFn: modeldatapostapi,
                onSuccess: (data) => {
    
                    toast.success("updated");
                    setTimeout(() => {
                        navigate("/masterModel"); // ✅ Navigate after success
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
          mutation.mutate({ data: formData, updateid });

          
          
         
      }
      const { data: getmodalnamedata ,isLoading} = useQuery({
        queryKey: ["getmodalnamedatakey"],
        queryFn: async () => {
          try {
            const res = await fetch(`${base_url}/api/aircraft/getmodeldata/${updateid}`, {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            });
    
            if (!res.ok) throw new Error("Failed to fetch data");
            const data = await res.json();
            setFormData(data);
            console.log(data)
            return data

          } catch (error) {
            console.log(`Error message: ${error.message}`);
            throw error;
          }
        },
      
        });
        




  return (

       
        <div className='aircraft-status border p-4 rounded shadow'>
            {isLoading && <p>Loading............</p>}
          {!isLoading && <form onSubmit={handleSubmit}>
            <div className='row'>
            <h6 className="btn-bg-color text-white text-center p-2 btn-border">Update Model</h6>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5'>
                <div className='row '>
                    <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                        <Form.Group >
                            <label className='mt-3'>Model Name</label>
                        </Form.Group>
                        <Form.Group >
                            <label className='mt-3'>Manufacturer</label>
                        </Form.Group>
                        <Form.Group >
                            <label className='mt-3'>Primary Model</label>
                        </Form.Group>
                    </div>
                    <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                        <Form.Group className='mt-2'>
                            <input type="text" name='ModelName' className='form-control input-border'  value={formData.ModelName } onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <select className="form-control input-border" name="Manufacturer" value={formData.Manufacturer} onChange={handleChange}>
                            
                            <option value="" disabled>Select...</option>
                            {getManufacturedatas?.length > 0 ? (
                              getManufacturedatas.map((data, index) => (
                                <option key={index} value={data.manufactureName}>
                                  {data.manufactureName}
                                </option>
                              ))
                            ) : (<option value="" disabled>NO Data Found...</option>) }
                            </select>
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <select className="form-control input-border" name="primary_modal" value={formData.primary_modal} onChange={handleChange}>
                            <option value="" disabled>Select...</option>
                            {primarydatas1?.length > 0 ? (
                              primarydatas1.map((data, index) => (
                                <option key={index} value={data.PrimaryModelName}>
                                  {data.PrimaryModelName}
                                </option>
                              ))
                            ) : (<p> NO Data Found...</p>) }
                           
                            </select>
                        </Form.Group>
                    </div>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-end mt-2'>
              <input className="btn btn-success text-white btn-border rounded px-4 p-1 mx-2 " type="submit" value="Update" />
              <input className="btn btn-danger text-white btn-border rounded px-4  p-1 mx-2" type="reset" value="Close" />
            </div>
          </form> }
        </div>
    
  )
}

export default Updatemodeldata