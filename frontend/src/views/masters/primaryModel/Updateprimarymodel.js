import React, {useState} from 'react'
import { Form } from "react-bootstrap";
import './primaryModel.css'
import { useMutation,useQuery,useQueries} from "@tanstack/react-query";
import axios from "axios";
import toast from 'react-hot-toast';
import { base_url } from '../../../../constant/url';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AddPrimaryModel = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
              PrimaryModelName : '',
          })
        
            const handleChange = (e) => {
              const {name,value}= e.target;
              setFormData({
                  ...formData,
                  [name]:value,
                });
            }
            
                          // API function to send data
                          const postprimarymodelapi = async ({data,userid}) => {
                            const response = await axios.put(`${base_url}/api/aircraft/updateprimary/${userid}`, data,);
                            return response.data;
                          };
                
                        // useMutation for API call
                        const mutation = useMutation({
                            mutationFn: postprimarymodelapi,
                            onSuccess: (data) => {
                
                                toast.success("Data Submited")
                                setFormData({
                                    PrimaryModelName : ''
                         
                                })
                                setTimeout(()=>{
                                    navigate('/masterPrimaryModel')
                                },1000)
                                
                                
                             
                            },
                            onError: (error) => {
                              alert("Error saving primarymodel data.");
                              console.error("Error:", error);
                            }
                          });
          const handleSubmit =(e) => {
              e.preventDefault();
              console.log("Submitted Data:", formData);
              mutation.mutate({data:formData,userid});
          }


//getvalue
const {id}=useParams();
const userid=id;

          
const {data:getprimaryvalue,isLoading:getprimaryvalueloading}=useQuery({
  queryKey:["get_primary_value"],
  queryFn: async() =>{
      const response = await axios.get(`${base_url}/api/aircraft/getprimaryid/${userid}`);
      setFormData(response.data)
      return response.data
  }
})

  return (
    <div className='aircraft-status border p-4 rounded shadow'>
        <form onSubmit={handleSubmit}>
            <div className='row'>
            <h6 className="btn-bg-color text-white text-center p-2 btn-border">Update Primary Model</h6>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5'>
                <div className='row '>
                    <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                        <Form.Group >
                            <label className='mt-3'>PrimaryModel Name</label>
                        </Form.Group>
                    </div>
                    <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                        <Form.Group className='mt-2'>
                            <input type="text" name='PrimaryModelName' className='form-control input-border'  value={formData.PrimaryModelName} onChange={handleChange} />
                        </Form.Group>
                    </div>
                </div>
                </div>
            </div>
            <div className='d-flex justify-content-end mt-2'>
                <input className="btn btn-light btn-border rounded px-4 p-1 mx-2 " type="submit" value="Update" />
                <input className="btn-border-close rounded px-4  p-1 mx-2" type="reset" value="Close" onClick={()=>navigate('/masterPrimaryModel')} />
            </div>
        </form>
    </div>
  )
}

export default AddPrimaryModel