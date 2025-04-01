import React, {useState} from 'react'
import { Form } from "react-bootstrap";
import './place.css'
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from 'react-hot-toast';import { useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { base_url } from '../../../../constant/url';
import {BeatLoader} from 'react-spinners'
const AddPlace = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      place : '',
      city: '',
  })

    const handleChange = (e) => {
      const {name,value,type,checked}= e.target;
      setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
    }
    const modeldatapostapi = async (data) => {
      const response = await axios.post(`${base_url}/api/aircraft/postplaces`, data,);
      return response.data;
    };
          const { data: getcitydatas, isLoading, isError } = useQuery({
            queryKey: ["getcitydatakey"],
            queryFn: async () => {
              try {
                const res = await fetch(`${base_url}/api/aircraft/getcity`, {
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
  // useMutation for API call
  const mutation = useMutation({
      mutationFn: modeldatapostapi,
      onSuccess: (data) => {

          toast.success("Data Submited")
          setFormData({
            place : '',
            city: ''
          })
          setTimeout(() => {
            navigate("/place"); 
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
      mutation.mutate(formData);
  }

  return (
    <div className='aircraft-status border p-4 rounded shadow'>
      <form onSubmit={handleSubmit}>
        <div className='row'>
        <h6 className="btn-bg-color text-white text-center p-2 btn-border">Place</h6>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5'>
            <div className='row '>
                <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                    <Form.Group >
                        <label className='mt-3'>Place</label>
                    </Form.Group>
                    <Form.Group >
                        <label className='mt-3'>City</label>
                    </Form.Group>
                </div>
                <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                    <Form.Group className='mt-2'>
                        <input type="text" name='place' className='form-control input-border'  value={formData.place} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className='mt-2'>
                        <select className="form-control input-border" name="city" value={formData.city} onChange={handleChange}>
                        <option value="" disabled>Select...</option>
                       
                                  {isLoading ? (<option>      Loading......                          
                                </option>):(getcitydatas?.length>0 ? (getcitydatas.map((data)=>(
                                  <option>
                                    {data.cityName}
                                  </option>
                               ))):(<></>))}
                        </select>
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

export default AddPlace