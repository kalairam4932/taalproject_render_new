import React, { useState } from 'react'
import './LH.css'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';
import { base_url } from '../../../constant/url';
import { useNavigate, useParams } from 'react-router-dom';


const LHupdate = () => {
    const navigate = useNavigate();
    const queryClient  = useQueryClient();
    const {id} = useParams();
    const userid = id;


    const[formData,setformData]=useState({
        Installedon : '',
        ATAChapter  : '',
        manufacturer:'',
        Model:'',
        SerialNo:'',
        Position:'',
        InstallationRemark:'',
        WorkOrderNo:'',
        Place:'',
        LicenseNo:'',
        Note:'',
        RevisionNo:'',
        BookNo:'',
        SourceDoc:'',
        PageNo:'',
        firsttable:{
            Hours:'',
            Date:'',
            Landing:''
        },
        secondtable:{
            Hours:'',
            Date:'',
            Landing:''
        },

        




        


    });


    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // If updating a nested object (firsttable or secondtable)
        if (name.includes(".")) {
          const [parent, child] = name.split("."); // Example: "firsttable.Hours"
    
          setformData((prevData) => ({
            ...prevData,
            [parent]: {
              ...prevData[parent],
              [child]: value
            }
          }));
        } else {
            setformData({ ...formData, [name]: value });
        }
    };

    // user data retrived 

    const{data: userdata } = useQuery({
        queryKey:["userdatakey"],
        queryFn:async()=>{
            const response  = await axios.get(`${base_url}/api/Engine/DisplayLHENGINEDATA/${userid}`)
            setformData(response.data)
            console.log("userdata",response.data)
            return response.data

        }
    })

    // post api 
    const POSTDATA_RHENGINE = async(data)=>{
        const response = await axios.post(`${base_url}/api/Engine/postRHENGINEDATA`,data)
        return response.data;
      }
      const mutation = useMutation({
        mutationFn : POSTDATA_RHENGINE,
        onSuccess : ()=>{
          toast.success("Data Submitted")
          setformData(
            {
                Installedon : '',
                ATAChapter  : '',
                manufacturer:'',
                Model:'',
                SerialNo:'',
                Position:'',
                InstallationRemark:'',
                WorkOrderNo:'',
                Place:'',
                LicenseNo:'',
                Note:'',
                RevisionNo:'',
                BookNo:'',
                SourceDoc:'',
                PageNo:'',
                firsttable:{
                    Hours:'',
                    Date:'',
                    Landing:''
                },
                secondtable:{
                    Hours:'',
                    Date:'',
                    Landing:''
                },
            }
          )
          ,setTimeout(() => {
            navigate("/RHTABLE");
          }, 1000);
        },
  
        onError : (error)=>{
          console.error("Error in airframe post data:", error.response?.data || error.message); 
        }
      })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitted data", formData)
        // mutation.mutate(formData)
        toast.success("Updated")
    }

    // API FOR DROPDOWNS------->

    // 1. APT CHAPTER API 

    const{data: APTdata,isLoading:aptloading,} = useQuery({
            queryKey:['APTKEY'],
            queryFn : async()=>{
                try {
                    const response = await axios.get(`${base_url}/api/aircraft/getata`)
                    return response.data;  //  Return only the data, not the whole response object
                } catch (error) {
                    throw new Error(error.response?.data?.message || "Failed to fetch data in APTKEY ");
                }

            }
    })

    // 2. API Manufacturer API

    const{data: Manufacturerdata,isLoading:Manufacturerloading,} = useQuery({
        queryKey:["Manufacturerkey"],
        queryFn : async()=>{
            try {
                const response = await axios.get(`${base_url}/api/aircraft/getManufacturedata`)
                return response.data; 
            } catch (error) {
                throw new Error(error.response?.data?.message || "Failed to fetch data in Manufacturer ");
            }

        }
    })

        // 3. MODEL Manufacturer API

    const{data:MODELdata,isLoading:MODELloading,} = useQuery({
        queryKey : ['MODELkey'],
        queryFn : async()=>{
            try {
                const response = await axios.get(`${base_url}/api/aircraft/getmodelname`)
                return response.data; 
            } catch (error) {
                throw new Error(error.response?.data?.message || "Failed to fetch data in MODEL ");
            }

        }
    })


        // 4. places Manufacturer API

    const{data:placesdata,isLoading:placesloading,} = useQuery({
        queryKey : ['placeskey'],
        queryFn : async()=>{
            try {
                const response = await axios.get(`${base_url}/api/aircraft/getplaces`)
                return response.data; 
            } catch (error) {
                throw new Error(error.response?.data?.message || "Failed to fetch data in place  ");
            }

        }
    })
            // 5. places Manufacturer API

    const{data:license,isLoading:licenseloading,} = useQuery({
        queryKey : ['licensekey'],
        queryFn : async()=>{
            try {
                const response = await axios.get(`${base_url}/api/aircraft/getlicences`)
                return response.data; 
            } catch (error) {
                throw new Error(error.response?.data?.message || "Failed to fetch data in license  ");
            }

        }
    })


       

    

  return (
    <div className='rhbody container mt-3 border p-2 rounded shadow'>
        <div className='row'>
            <h6 className='text-primary'>LH Update Form</h6>
        </div>


        {/* form designs */}
        <div className='border p-3 rounded shadow'>
            <form  onSubmit={handleSubmit}>
            <div className='row '>
                <div className='col-6  '>
                <h6 className='text-body-emphasis'>Installation Information of the Engine</h6>
                <div className='p-2'>

                
                <div className='row '>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="Installedon">Installed on</label>
                    </div>
                    <div className='col-6 '>
                        <input type="date" className="input " id='Installedon' name='Installedon' autoComplete="off" onChange={handleChange} value={formData.Installedon} />
                       
                    </div>

                </div>
                <div className='row mt-1'>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="ATAChapter">ATA Chapter</label>
                    </div>
                    <div className='col-6'>
                        <select className="input " id="ATAChapter" name="ATAChapter" onChange={handleChange} value={formData.ATAChapter} >
                        <option value='' disabled selected>Select...</option>


                        {aptloading ? (
                            <option value="" disabled>Loading.......</option>
                          ) : (
                            APTdata?.length > 0 ? (
                                APTdata.map((data, index) => (
                                <option key={index} >
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
              
                        <select className="input " id="manufacturer" name="manufacturer" onChange={handleChange}  value={formData.manufacturer} >
                        <option value='' disabled selected>Select...</option>
                        {Manufacturerloading ? (
                            <option value="" disabled>Loading.......</option>
                          ) : (
                            Manufacturerdata?.length > 0 ? (
                                Manufacturerdata.map((data, index) => (
                                <option key={index} >
                                  {data.manufactureName}
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
                        <label htmlFor="Model">Model</label>
                    </div>
                    <div className='col-6'>
              
                        <select className="input " id="Model" name="Model" onChange={handleChange} value={formData.Model}>
                        <option value='' disabled selected>Select...</option>
                        {MODELloading ? (
                            <option value="" disabled>Loading.......</option>
                          ) : (
                            MODELdata?.length > 0 ? (
                                MODELdata.map((data, index) => (
                                <option key={index} >
                                  {data.ModelName}
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
                        <label htmlFor="SerialNo">Serial No</label>
                    </div>
                    <div className='col-6'>
                    <input type="text" className="input " id='SerialNo' name='SerialNo'  autoComplete="off" onChange={handleChange}  value={formData.SerialNo}  />
                        
                    </div>
                    

                </div>
                <div className='row mt-1'>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="Position">Position</label>
                    </div>
                    <div className='col-6'>
                    <input type="text" className="input " id='Position' name='Position'  autoComplete="off" onChange={handleChange}  value={formData.Position}  />
                        
                    </div>
                    

                </div>
                <div className='row mt-1'>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="InstallationRemark">Installation Remark</label>
                    </div>
                    <div className='col-6'>
                    <textarea type="text" className="input" rows="2" id='InstallationRemark' name='InstallationRemark'  autoComplete="off" onChange={handleChange}  value={formData.InstallationRemark} />
                        
                    </div>
                    

                </div>
                <div className='row '>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="WorkOrderNo">Work Order No</label>
                    </div>
                    <div className='col-6'>
                    <input type="text" className="input " id='WorkOrderNo' name='WorkOrderNo' autoComplete="off" onChange={handleChange} value={formData.WorkOrderNo} />
                        
                    </div>
                    

                </div>
                <div className='row mt-1'>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="Place">Place</label>
                    </div>
                    <div className='col-6'>
                    <select className="input " id="Place" name="Place" onChange={handleChange} value={formData.Place} >
                        <option value='' disabled selected>Select...</option>
                        {placesloading ? (
                            <option value="" disabled>Loading.......</option>
                          ) : (
                            placesdata?.length > 0 ? (
                                placesdata.map((data, index) => (
                                <option key={index} >
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
                    <select className="input " id="LicenseNo" name="LicenseNo" onChange={handleChange} value={formData.LicenseNo} >
                        <option value='' disabled selected>Select...</option>
                        {licenseloading ? (
                            <option value="" disabled>Loading.......</option>
                          ) : (
                            license?.length > 0 ? (
                                license.map((data, index) => (
                                <option key={index} >
                                  {data.LicenseNo}
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
                    <textarea type="text" className="input" rows="2" id='Note' name='Note'  autoComplete="off" onChange={handleChange} value={formData.Note} />
                        
                    </div>
                    

                </div>




                </div>


                </div>


                <div className='col-6'>
                <h6 className='text-body-emphasis'> Since New Values as on 19-Feb-2011</h6>

                <div className='p-2'>
                <table className='rhtable'>
                    <tr>
                        <th className='text-center'>Periods</th>
                        <th className='text-center'>Engine</th>
                        <th className='text-center'>AirFrame</th>
                    </tr>
                    <tr>
                        <td><label htmlFor="Hours">Hours</label></td>
                        <td><input type="time" className='tableinput' id='Hours' name='firsttable.Hours' onChange={handleChange}  /></td>
                        <td>42:06</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Date">Date</label></td> 
                        <td><input type="date" className='tableinput' id='Date' name='firsttable.Date' onChange={handleChange} /></td>
                        <td>21-jan-2011</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Landing">Landing</label></td>
                        <td><input type="text" className='tableinput' id='Landing' name='firsttable.Landing' onChange={handleChange} /></td>
                        <td>0</td>
                    </tr>
                    
                </table>


                <h6 className='text-body-emphasis mt-4' >Values at Installation</h6>

                <table className='mt-2 rhtable'>
                    <tr>
                        <th className='text-center'>Engine</th>
                        <th className='text-center'>Assembly</th>
                        <th className='text-center'>AirFrame</th>
                    </tr>
                    <tr>
                        <td><label htmlFor="Hoursone">Hours</label></td>
                        <td><input type="time" className='tableinput' id='Hoursone' name='secondtable.Hours' onChange={handleChange}  /></td>
                        <td>42:06</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Dateone">Date</label></td> 
                        <td><input type="date" className='tableinput' id='Dateone' name='secondtable.Date' onChange={handleChange} /></td>
                        <td>21-jan-2011</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Landingone">Landing</label></td>
                        <td><input type="text" className='tableinput' id='Landingone' name='secondtable.Landing' onChange={handleChange} /></td>
                        <td>0</td>
                    </tr>
                    
                </table>

                </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <h6>Document Information of the Engine</h6>

                    <div className='row '>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="RevisionNo">Revision No</label>
                    </div>
                    <div className='col-6'>
                    <input type="text" className="input " id='RevisionNo' name='RevisionNo' autoComplete="off" onChange={handleChange} value={formData.RevisionNo}  />
                        
                    </div>
                    

                    </div>

                    <div className='row mt-1'>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="BookNo">Book No</label>
                    </div>
                    <div className='col-6'>
                    <input type="text" className="input " id='BookNo' name='BookNo' autoComplete="off" onChange={handleChange} value={formData.BookNo} />
                        
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

                </div>
                <div className='col-6'>
                    <div className='row mt-3'>
                        <div className='col-3 d-flex justify-content-end'>
                        <label htmlFor="SourceDoc">Source Doc</label>
                        </div>
                        <div className='col-6'>
                            <input type="text" className="input " id='SourceDoc' name='SourceDoc' autoComplete="off" onChange={handleChange} value={formData.SourceDoc}   />
                                
                        </div>

                    </div>
                    <div className='row mt-1'>
                        <div className='col-3 d-flex justify-content-end'>
                        <label htmlFor="PageNo">Page No</label>
                        </div>
                        <div className='col-6'>
                            <input type="text" className="input " id='PageNo' name='PageNo' autoComplete="off"  onChange={handleChange} value={formData.PageNo} />
                                
                        </div>

                    </div>

                    <div className='row mt-3'>
                        <div className='col-12 d-flex justify-content-end'>

                        <button type='submit' className='btnrh'>Update</button>

                        </div>

                    </div>
                
                </div>

            </div>
            
            </form>
        </div>
    </div>
  )
}

export default LHupdate