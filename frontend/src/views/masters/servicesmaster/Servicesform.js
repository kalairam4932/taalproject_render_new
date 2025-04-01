import React, { useState } from 'react'
import './services.css'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { base_url } from '../../../../constant/url';


const RHform = () => {
    const navigate = useNavigate();
    const queryClient  = useQueryClient();


    const[formData,setformData]=useState({
        servicestype:'',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
            setformData({ ...formData, [name]: value });
    };

    // post api 
    const POSTDATA_LHENGINE = async(data)=>{
        const response = await axios.post(`${base_url}/api/master/POSTSERVICES`,data)
        return response.data;
      }
      const mutation = useMutation({
        mutationFn : POSTDATA_LHENGINE,
        onSuccess : ()=>{
          toast.success("Data Submitted")
          setformData(
            {
                servicestype :'',
            }
          )
          ,setTimeout(() => {
            navigate("/SERVICETABLE");
          }, 1000);
        },
  
        onError : (error)=>{
          console.error("Error in LH ENGINE data:", error.response?.data || error.message); 
        }
      })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitted data", formData)
        
        mutation.mutate(formData)

    }

        

       

    

  return (
    <div className='servicetable container mt-3 ownborder p-2   shadow'>
        <div className='row'>
            <h6 className='text-primary'>Add Services Master</h6>

        </div>



        
        {/* form designs */}

            <div className=' ownborder mt-2 p-3 w-50 shadow '>
                <form  onSubmit={handleSubmit}>
                    <div className='row '>
                        <div className='col-4  d-flex justify-content-end '>
                            <label htmlFor="servicestype">Service Type</label>
                        </div>
                        <div className='col-6 '>
                            <input type="text" id='servicestype' name='servicestype' className='input' onChange={handleChange} autoComplete='off' />
                        </div>

                    </div>
                    <div className='row mt-2'>
                        <div className='col-12 d-flex justify-content-end'>

                        <button type='submit' className='btnrh'>save</button>

                        </div>

                    </div>
                
                </form>
            </div>


        </div>
        

  )
}

export default RHform