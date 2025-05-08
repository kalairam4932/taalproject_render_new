import React, { useState } from 'react'
import './LH.css'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import axios from 'axios';
import { base_url } from '../../../constant/url';
import { useNavigate } from 'react-router-dom';


const RHform = () => {
    const navigate = useNavigate();
    const queryClient  = useQueryClient();


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

    // post api 
    const POSTDATA_LHENGINE = async(data)=>{
        const response = await axios.post(`${base_url}/api/Engine/postLHENGINEDATA`,data)
        return response.data;
      }
      const mutation = useMutation({
        mutationFn : POSTDATA_LHENGINE,
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
            navigate("/LHTABLE");
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
    <div className=' container mt-3 border p-2 rounded shadow'>
        <div className='row'>
            <h6 className='text-primary'>LH Engine Form</h6>
        </div>


        {/* form designs */}
        <div className='border p-3 rounded shadow'>
            <form  onSubmit={handleSubmit}>
            <div className='row '>
                <div className='col-6  '>
                {/* <h6 className='text-body-emphasis'>Installation Information of the Engine</h6> */}
                <h6 className="btn-bg-one text-white text-center btn-border mx-1 p-1">Installation Information of the Engine</h6>
             
                <div className='p-2'>

                
                <div className='row '>
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor=" ">Installed on</label>
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


                        {aptloading ? (
                            <option value="" disabled>Loading.......</option>
                          ) : (
                            APTdata?.length > 0 ? (
                                APTdata.map((data, index) => (
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
              
                        <select className="input " id="manufacturer" name="manufacturer" onChange={handleChange} >
                        <option value='' disabled selected>Select...</option>
                        {Manufacturerloading ? (
                            <option value="" disabled>Loading.......</option>
                          ) : (
                            Manufacturerdata?.length > 0 ? (
                                Manufacturerdata.map((data, index) => (
                                <option key={index} value={data.manufactureName}>
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
              
                        <select className="input " id="Model" name="Model" onChange={handleChange}>
                        <option value='' disabled selected>Select...</option>
                        {MODELloading ? (
                            <option value="" disabled>Loading.......</option>
                          ) : (
                            MODELdata?.length > 0 ? (
                                MODELdata.map((data, index) => (
                                <option key={index} value={data.ModelName}>
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
                            placesdata?.length > 0 ? (
                                placesdata.map((data, index) => (
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
                        {licenseloading ? (
                            <option value="" disabled>Loading.......</option>
                          ) : (
                            license?.length > 0 ? (
                                license.map((data, index) => (
                                <option key={index} value={data.LicenseNo}>
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
                    <textarea type="text" className="input" rows="2" id='Note' name='Note'  autoComplete="off" onChange={handleChange} />
                        
                    </div>
                    

                </div>




                </div>


                </div>


                <div className='col-6'>
                <h6 className="btn-bg-color text-white text-center btn-border mx-1 p-1">Since New Values as on 19-Feb-2011</h6>

                <div className='p-2'>
                <table className='Lhtable ms-5'>
                    <tr>
                        <th className='text-center'>Periods</th>
                        <th className='text-center'>Engine</th>
                        <th className='text-center'>AirFrame</th>
                    </tr>
                    <tr>
                        <td><label htmlFor="Hours">Hours</label></td>
                        <td><div className='lhflex'><input type="time" className='lhinput' id='Hours' name='firsttable.Hours' onChange={handleChange}  /></div></td>
                        <td>42:06</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Date">Date</label></td> 
                        <td><div className='lhflex'><input type="date" className='lhinput' id='Date' name='firsttable.Date' onChange={handleChange} /></div></td>
                        <td>21-jan-2011</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Landing">Landing</label></td>
                        <td><div className='lhflex'><input type="text" className='lhinput' id='Landing' name='firsttable.Landing' onChange={handleChange} /></div></td>
                        <td>0</td>
                    </tr>
                    
                </table>


                <h6 className="btn-bg-color text-white text-center btn-border mx-1 p-1 mt-3">Values at Installation</h6>

                <table className='mt-2 Lhtable ms-5'>
                    <tr>
                        <th className='text-center'>Engine</th>
                        <th className='text-center'>Assembly</th>
                        <th className='text-center'>AirFrame</th>
                    </tr>
                    <tr>
                        <td><label htmlFor="Hoursone">Hours</label></td>
                        <td><div className='lhflex'><input type="time" className='lhinput' id='Hoursone' name='secondtable.Hours' onChange={handleChange}  /></div></td>
                        <td>42:06</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Dateone">Date</label></td> 
                        <td><div className='lhflex'><input type="date" className='lhinput' id='Dateone' name='secondtable.Date' onChange={handleChange} /></div></td>
                        <td>21-jan-2011</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Landingone">Landing</label></td>
                        <td><div className='lhflex'><input type="text" className='lhinput' id='Landingone' name='secondtable.Landing' onChange={handleChange} /></div></td>
                        <td>0</td>
                    </tr>
                    
                </table>

                </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                <h6 className="btn-bg-one text-white text-center btn-border mx-1 p-1">Document Information of the Engine</h6>

                    <div className='row '>
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
                    <div className='col-4  d-flex justify-content-end'>
                        <label htmlFor="AttachFile">Attach File</label>
                    </div>
                    <div className='col-6'>
                    <input type="file" className="input " id='AttachFile' name='AttachFile' autoComplete="off"  />
                        
                    </div>
                    

                    </div>

                </div>
                <div className='col-6'>
                    <div className='row mt-3 ms-5'>
                        <div className='col-3 d-flex justify-content-end'>
                        <label htmlFor="SourceDoc">Source Doc</label>
                        </div>
                        <div className='col-6'>
                            <input type="text" className="input " id='SourceDoc' name='SourceDoc' autoComplete="off" onChange={handleChange}   />
                                
                        </div>

                    </div>
                    <div className='row mt-1 ms-5'>
                        <div className='col-3 d-flex justify-content-end'>
                        <label htmlFor="PageNo">Page No</label>
                        </div>
                        <div className='col-6'>
                            <input type="text" className="input " id='PageNo' name='PageNo' autoComplete="off"  onChange={handleChange}  />
                                
                        </div>

                    </div>

                    <div className='row mt-3'>
                        <div className='col-12 d-flex justify-content-end'>

                        {/* <button type='submit' className='btnrh'>save</button> */}
                        <input className="btn btn-light btn-border rounded px-4 p-1 mx-2 " type="submit" value="Save" />

                        </div>

                    </div>
                
                </div>

            </div>
            
            </form>
        </div>
    </div>
  )
}

export default RHform