import React, {useState} from 'react'
import { Form } from "react-bootstrap";
import './city.css'
import { useMutation,useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';
import { base_url } from '../../../../constant/url'
import { useNavigate, useParams } from 'react-router-dom';


const updatecity = () => {
    const navigate = useNavigate();  
    const{id}= useParams();
    const userid = id; 
    
    const [formData, setFormData] = useState({
        cityName : '',
    })


    
        const handleChange = (e) => {
        const {name,value}= e.target;
        setFormData({
            ...formData,
            [name]:value,
            });
        }


        const {data:getcitydata} = useQuery({
            queryKey :['getcitydatakey'],
            queryFn : async()=>{
                const response = await axios.get(`${base_url}/api/aircraft/getcitydata/${userid}`)
                setFormData(response.data)
                return response.data
    
            }
          })

          const mutation = useMutation({
            mutationFn: async({data,id})=>{
              console.log("data",data)
              const response = await axios.put(`${base_url}/api/aircraft/updatecitydata/${id}`,data)
              return response.data;
    
            },
            onSuccess:()=>{
              toast.success("Data Updated")
              setFormData({
                PilotName : '',
                LicenseNo: '',
              })
    
              setTimeout(()=>{
                navigate('/city')
              },1000)
            }
          })
    
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        mutation.mutate({id:userid, data:formData})
    }

  return (
    <div className='aircraft-status border p-4 rounded shadow'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
            <h6 className="btn-bg-color text-white text-center p-2 btn-border">City</h6>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5'>
                <div className='row '>
                    <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                        <Form.Group >
                            <label className='mt-3'>City Name</label>
                        </Form.Group>
                    </div>
                    <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                        <Form.Group className='mt-2'>
                            <input type="text" name='cityName' className='form-control input-border'  value={formData.cityName} onChange={handleChange} />
                        </Form.Group>
                    </div>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-end mt-2'>
              <input className="btn btn-light btn-border rounded px-4 p-1 mx-2 " type="submit" value="Update" />
              <input className="btn-border-close rounded px-4  p-1 mx-2" type="reset" value="Close" onClick={()=>navigate('/city')} />
            </div>
          </form>
        </div>
  )
}

export default updatecity