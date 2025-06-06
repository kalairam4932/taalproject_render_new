import React, { useState, useEffect } from "react";
import "./flightstyle.css";
import { useNavigate , useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useMutation,useQuery,useQueryClient} from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { base_url } from "../../../../constant/url";


const FlightLogForm = () => {

  const navigate = useNavigate();
  const { id } = useParams(); 

  const [formData, setFormData] = useState({
    date: "",  // Matches Mongoose data
    Logno: { first: "", second: "" },
    pageno: "",  // Convert to Number before saving
    flightno: "",  // Convert to Number before saving
    pilotcmt: "",
    copilot: "",
    FinalHrs: "",
    TotalLandings : "",
    // attachfiles: ["", ""],  // Use array instead of attachfile1, attachfile2
    classification: "",
    departure: { place: "", date: "", time: "" },  // Time → time
    arrival: { place: "", date: "", time: "" },  // Time → time
    HOBBS: {
      blocktime: "",
      airborntime: "",
      groundruntime1: "",  // Matches Mongoose
      groundruntime2: "",  // Matches Mongoose
      totaltime: "",
    },
    airframeperiod:[
      {
        model: "",  // Added
        serialno: "",  // Added
        hours: "",
        finalhours: "",  // Added
        landing: "",
        finallanding: "",  // Added
      },
    ],
    engineperiod:[
      {
        model: "",  // Added
        serialno: "",  // Added
        hours: "",
        finalhours: "",  // Added
        cycle: "",
        finalcycles: "",  // Added
      },
    ],
    airconditionperiod: [
      {
        model: "",  // Added
        serialno: "",  // Added
        hours: "",
        finalhours: "",  // Added
      },
    ],
    remark: "",
    // fileattachments: [],  // Matches Mongoose schema
  });

  
  useEffect(() => {
    if (id) {
        axios.get(`${base_url}/api/flightlog/Editflightlogs/${id}`)
            .then((res) => {
                console.log("API Response:", res.data); // ✅ Check API response
                setFormData(res.data.flightLog);
            })
            .catch((err) => console.error("Error fetching data:", err));
    }
  }, [id]);


  
  const handleChange = (e) => {
    const { name, value, type, files, dataset } = e.target;

    setFormData((prev) => {
     
      if (type === "file") {
        return { ...prev, [name]: files[0] };
      }

      
      if (dataset.arrayname) {
        const arrayName = dataset.arrayname;
        const index = Number(dataset.index);
        const field = dataset.field;
        const updatedArray = [...prev[arrayName]];
        updatedArray[index][field] = value;
        return { ...prev, [arrayName]: updatedArray };
      }

    
      if (name.includes(".")) {
        const [main, sub] = name.split(".");
        return { ...prev, [main]: { ...prev[main], [sub]: value } };
      }

      return { ...prev, [name]: value };
    });
  };
            // kalairam works 
            const { data: getflightdata, isLoading:loading, isError } = useQuery({
                queryKey: ["getflightdatalogkey"],
                queryFn: async () => {
                  try {
                    const res = await fetch(`${base_url}/api/flightlog/Getflightlogs`, {
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


              useEffect(() => {
                if (getflightdata) {
                  // Extract landing values
                  const landings = getflightdata.flatMap(item =>
                    item.airframeperiod?.map(period => Number(period.landing) || 0) || []
                  );
                  const totalLanding = landings.reduce((acc, curr) => acc + curr, 0); // Sum of landings
                  
                  const totalMinutes = getflightdata.reduce((acc, item) => {
                    const time = item.HOBBS?.airborntime || "00:00";
                    console.log(time);
                    
                    const [h, m] = time.split(":").map(Number);
                    return acc + (h * 60 + m);
                  }, 0);
                  
            
                  const hours = Math.floor(totalMinutes / 60);
                  const minutes = totalMinutes % 60;
                  const finalTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;


                 
                  
                  



                  // Update formData with total landings
                  setFormData(prev => ({
                    ...prev,
                    TotalLandings: totalLanding,
                    FinalHrs:finalTime,
                   
                  }));
                  }


              }, [getflightdata]);

                    const {data:Modeldata,isLoading:loadingmodel} = useQuery({
                      queryKey :["Modeldatakey"],
                      queryFn : async() =>{
                        const response = await axios.get(`${base_url}/api/aircraft/getmodelname`);
                        return response.data
              
                      }
              
              
                    });








  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
  
      if (id) {
        response = await axios.put(`${base_url}/api/flightlog/Updateflightlogs/${id}`, formData); // Corrected template literals
        alert("Flight Log Details updated successfully!");
      } else {
        response = await axios.post(`${base_url}/api/flightlog/postflightlogs`, formData);
        alert("Flight Log Details submitted successfully!");
      }
  
      console.log("Response:", response.data);
      navigate("/flightLogDetails"); // Redirect after success
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };
  


  const handleChange1 = (event) => {
    const { name, value } = event.target;
  
    // Update the state
    setFormData((prevData) => {
      let updatedData = { ...prevData };
  
      // Update departure or arrival time
      if (name === "departure.time") {
        updatedData.departure = {
          ...updatedData.departure,
          time: value,
        };
      }
  
      if (name === "arrival.time") {
        updatedData.arrival = {
          ...updatedData.arrival,
          time: value,
        };
      }
  
      // Check if both times are available
      const departureTime = updatedData.departure?.time;
      const arrivalTime = updatedData.arrival?.time;
  
      if (departureTime && arrivalTime) {
        // Parse time strings to Date objects (same day)
        const [dHours, dMinutes] = departureTime.split(':').map(Number);
        const [aHours, aMinutes] = arrivalTime.split(':').map(Number);
  
        const departureDate = new Date(0, 0, 0, dHours, dMinutes);
        const arrivalDate = new Date(0, 0, 0, aHours, aMinutes);
  
        // Subtract times (milliseconds)
        const diffMs = departureDate - arrivalDate;
        const diffMinutes = Math.abs(diffMs) / 60000;
        const diffHours = Math.floor(diffMinutes / 60);
        const minutes = diffMinutes % 60;
  
        // Format as HH:MM
        const formatted = `${String(diffHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  
        // Set blocktime
        updatedData.HOBBS = {
          ...updatedData.HOBBS,
          blocktime: formatted,
        };
        updatedData.HOBBS = {
          ...updatedData.HOBBS,
          totaltime: formatted,
        };
      }
  
      return updatedData;
    });
  };
const handleChange2 = (event) => {
  const { name, value } = event.target;

  setFormData((prevData) => {
    const updatedData = {
      ...prevData,
      HOBBS: {
        ...prevData.HOBBS,
        [name.split('.')[1]]: value,
      },
    };

    if (name === 'HOBBS.airborntime' && updatedData.HOBBS.blocktime) {
      const blocktime = updatedData.HOBBS.blocktime;
      const airborntime = value;

      const [bHours, bMinutes] = blocktime.split(':').map(Number);
      const [aHours, aMinutes] = airborntime.split(':').map(Number);

      const blockDate = new Date(0, 0, 0, bHours, bMinutes);
      const airborneDate = new Date(0, 0, 0, aHours, aMinutes);

      const diffMs = blockDate - airborneDate;
      const diffMinutes = Math.abs(diffMs) / 60000;
      const diffHours = Math.floor(diffMinutes / 60);
      const minutes = diffMinutes % 60;

      const formatted1 = `${diffHours}:${String(minutes).padStart(2, '0')}`;

      updatedData.HOBBS = {
        ...updatedData.HOBBS,
        groundruntime1: formatted1,
        totaltime: airborntime,
      };

      // Also update airframeperiod[0].hours
      const updatedAirframe = [...(prevData.airframeperiod || [])];
      updatedAirframe[0] = {
        ...(updatedAirframe[0] || {}),
        hours: airborntime,
      };

      updatedData.airframeperiod = updatedAirframe;

      const updatedEngine = [...(prevData.engineperiod || [])];
      updatedEngine[0] = {
        ...(updatedEngine[0] || {}),
        hours: airborntime,
      };
      updatedData.engineperiod = updatedEngine;
    }

    return updatedData;
  });
};

const handleChangelanding = (event)=>{
    const {name,value} = event.target
    
    
    
    const totalvalue = Number(value) + Number(formData.TotalLandings)
    console.log(totalvalue);
   
    setFormData(prev => ({
      ...prev,
      airframeperiod: prev.airframeperiod.map((item, index) => 
        index === 0
          ? { ...item, 
            landing : value,
            finallanding: totalvalue }
          : item
      )
    }));
    


}
const handleChangefinalcycles = (event)=>{
    const{value} = event.target
    console.log(value);
    const totalvalue = Number(value) + Number(formData.TotalLandings)
    
    
    setFormData(prev => ({
      ...prev,
      engineperiod: prev.engineperiod.map((item, index) => 
        index === 0
          ? { ...item, finalcycles: totalvalue }
          : item
      )
    }));
}

function addTimes(time1, time2) {
  const [h1, m1] = time1.split(":").map(Number);
  const [h2, m2] = time2.split(":").map(Number);

  let totalMinutes = m1 + m2;
  let totalHours = h1 + h2 + Math.floor(totalMinutes / 60);
  totalMinutes = totalMinutes % 60;

  // Format with leading zeros
  const hoursStr = String(totalHours).padStart(2, '0');
  const minutesStr = String(totalMinutes).padStart(2, '0');

  return `${hoursStr}:${minutesStr}`;
} 
const handleChangeairbonetime = (event)=>{
  const{value} = event.target
  const time = addTimes(value, formData.FinalHrs)
  
  setFormData(prev => ({
    ...prev,
    airconditionperiod: prev.airconditionperiod.map((item, index) => 
      index === 0
        ? { ...item, finalhours: time }
        : item
    )
  }));
  

}
  
  
  const handleCombinedChange = (event) => {
    handleChange(event);   // Your existing logic
    handleChange1(event);  // Your additional logic
  };
    return (
        <div className="container">
          <form onSubmit={handleSubmit}>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-1 p-1 border rounded shadow bg-card-color card-border">
                <h4 className="text-white fw-bold mx-5">Training Information [New]</h4>
                <div>
                    <button className="btn btn-light me-2" type="submit">{id ? "Update" : "Save"}</button>
                    {/* <button className="btn btn-light me-2" >Add New</button> */}
                    {/* <button className="btn btn-outline-danger" onClick={navigate("/flightLogDetails")}>Close</button> */}
                </div>
            </div>

            {/* Table */}
            <div className=" border p-4 rounded shadow bg-card-color">
                <div className='row my-2'>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <div className='row'>
                      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                        <Form.Group >
                          <label className='mt-2 fw-bold'>Date</label>
                        </Form.Group>
                        <Form.Group >
                          <label className='mt-2 fw-bold'>Pilot in Cmd</label>
                        </Form.Group>
                        <Form.Group >
                          <label className='mt-2 fw-bold'>Attach File</label>
                        </Form.Group>
                        <Form.Group >
                          <label className='mt-2 fw-bold'>Final Hrs</label>
                        </Form.Group>
                      </div>
                      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9'>
                        <Form.Group className='mt-1 d-flex'>
                          <input type="date" name='date' className='w-100 ' value={formData.date} onChange={handleChange} />
                          <label className='mx-1 px-2 fw-bold'>LogNo</label>
                          <input type="text" name='Logno.first' className='w-100 input-border' value={formData.Logno.first} onChange={handleChange} />
                          <input type="text" name='Logno.second' className='w-100 mx-1 input-border' value={formData.Logno.second} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <input type="text" name='pilotcmt' className='w-100 input-border' value={formData.pilotcmt} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className='mt-2 d-flex'>
                            <input type="file" name="attachfiles" className="w-100" />
                            {/* onChange={handleChange} */}
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <input type="text" name='FinalHrs' className='w-100 input-border' value={formData.FinalHrs} onChange={handleChange}/>
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                  <div className='row'>
                      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                        <Form.Group >
                          <label className='mt-2 fw-bold'>Page No</label>
                        </Form.Group>
                        <Form.Group >
                          <label className='my-2 fw-bold'>Co Pilot</label>
                        </Form.Group>
                        <Form.Group >
                          <label className='my-2 fw-bold'>Classification</label>
                        </Form.Group>
                        
                        <Form.Group >
                          <label className='my-2 fw-bold'>Total Landings</label>
                        </Form.Group>
                      </div>
                      <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9'>
                        <Form.Group className='mt-2 d-flex'>
                          <input type="number" name='pageno' className='w-100 input-border' value={formData.pageno} onChange={handleChange} />
                          <label className='mx-1 px-1 fw-bold'>FlightNo</label>
                          <input type="number" name='flightno' className='w-100 input-border' value={formData.flightno}  onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <input type="text" name='copilot' className='w-100 input-border'  value={formData.copilot} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className='mt-2 d-flex'>
                          <input type="text" name='classification' className='w-100 input-border'  value={formData.classification} onChange={handleChange}/>
                          
                        </Form.Group>
                        <Form.Group className='mt-2 d-flex'>
                          <input type="text" name='TotalLandings' className='w-100 input-border'  value={formData.TotalLandings} onChange={handleChange}/>
                          
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card_section'>
                    <div className='row'>
                      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                        <div className='card-color border p-2 shadow'>
                          <h6 className='text-light fw-bold mx-2'>Departure</h6>
                          <Form.Group className='mt-2 d-flex align-items-center'>
                            <label className='mx-1 px-2 fw-bold text-light'>Place</label>
                            <input type="text" name='departure.place' className='w-100 input-border'  value={formData.departure.place}  onChange={handleChange}/>
                            <label className='mx-1 px-2 fw-bold text-light'>Date/Time</label>
                            <input type="date" name='departure.date' className='w-100 input-border' value={formData.departure.date} onChange={handleChange}/>
                            <input type="time" name='departure.time' className='w-100 mx-1 input-border'  value={formData.departure.time}  onChange={handleCombinedChange}/>
                          </Form.Group>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                        <div className='card-color border p-2 shadow'>
                          <h6 className='text-light fw-bold mx-2'>Arrival</h6>
                          <Form.Group className='d-flex align-items-center'>
                            <label className='mx-1 px-2 fw-bold text-light'>Place</label>
                            <input type="text" name='arrival.place' className='w-100 input-border'  value={formData.arrival.place} onChange={handleChange}/>
                            <label className='mx-1 px-2 fw-bold text-light'>Date/Time</label>
                            <input type="date" name='arrival.date' className='w-100 input-border'  value={formData.arrival.date}  onChange={handleChange}/>
                            <input type="time" name='arrival.time' className='w-100 mx-1 input-border'  value={formData.arrival.time}  onChange={handleCombinedChange}/>
                          </Form.Group>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='card_section card-color border p-2 shadow mt-1'>
                  <div className='row'>
                    <h6 className='text-light fw-bold mx-2'>Aircraft Flying Hours as per flight Log Book or HOBBS</h6>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                      <Form.Group className=' d-flex align-items-center'>
                        <label className='mx-1 px-2 fw-bold text-light'>BlockTime</label>
                        <input type="text" name='HOBBS.blocktime' className='w-100 input-border'value={formData.HOBBS.blocktime} onChange={handleChange} />
                      </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                      <Form.Group className='d-flex align-items-center'>
                        <label className='mx-1 px-2 fw-bold text-light'>AirborneTime</label>
                        <input type="time" name='HOBBS.airborntime' className='w-100 input-border' onChange={handleChangeairbonetime} />
                      </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                      <Form.Group className='d-flex align-items-center'>
                        <label className='mx-1 px-2 fw-bold text-light'>groundRunTime</label>
                        <input type="text" name='HOBBS.groundruntime1' className='w-100 input-border'value={formData.HOBBS.groundruntime1} onChange={handleChange}  />%
                      </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                      <Form.Group className='d-flex align-items-center'>
                          <label className='mx-1 px-2 fw-bold text-light'>%GroundRunTime</label>
                          <input type="text" name='HOBBS.groundruntime2' className='w-100 input-border'value={formData.HOBBS.groundruntime2} onChange={handleChange} />
                        </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                      <Form.Group className='d-flex align-items-center mt-2'>
                        <label className='mx-1 px-2 fw-bold text-light'>TotalTime</label>
                        <input type="text" name='HOBBS.totaltime' className='w-100 input-border'value={formData.HOBBS.totaltime} onChange={handleChange}  />
                      </Form.Group>
                    </div>
                  </div>
                </div>
                {/* Table */}
                <h6 className='text-light fw-bold mx-2'>AirFrame period</h6>
                <div className="card_section card-color border p-2 shadow ">
                    <table className="text-center w-100 text-light">
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Serial No</th>
                                <th>Hours</th>
                                <th>final Hours</th>
                                <th>Landings</th>
                                <th>Final Landings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <td><input type='text' name='airframeperiod.model' data-arrayname="airframeperiod" data-index={0} data-field="model" className='w-100 input-border' value={formData.airframeperiod[0]?.model || ""} onChange={handleChange}/></td> */}
                            <td>
                            <select className="w-100 input-border " id="" name="airframeperiod.model" onChange={handleChange}>
                        <option value='' disabled selected>Select...</option>
                          {loadingmodel ? (<p>Loading.....</p>):(Modeldata?.length>0 ? (Modeldata.map((data)=>(
                                  <option>
                                    {data.ModelName}
                                  </option>
                               ))):(<></>))
                          }
                        </select>
                            </td>
                            {/* <td><input type='text' name='airframeperiod.serialno' data-arrayname="airframeperiod" data-index={0} data-field="serialno" className='w-100 input-border' value={formData.airframeperiod[0]?.serialno || ""} onChange={handleChange}/></td> */}

                            <td>
                            <select className="w-100 input-border " id="" name="airframeperiod.serialno" onChange={handleChange}>
                        <option value='' disabled selected>Select...</option>
             
                                  <option>
                                  525A-0470	
                                  </option>
                       
                        </select>
                            </td>
                            <td><input type='text' name='airframeperiod.hours' className='w-100 input-border' data-arrayname="airframeperiod" data-index={0} data-field="hours" value={formData.airframeperiod[0]?.hours || ""} onChange={handleChange}/></td>
                            <td><input type='text' name='airframeperiod.finalhours' className='w-100 input-border' data-arrayname="airframeperiod" data-index={0} data-field="finalhours" value={formData.airframeperiod[0]?.finalhours || ""} onChange={handleChange}/></td>

                            <td><input type='text' name='airframeperiod.landing' className='w-100 input-border' data-arrayname="airframeperiod" data-index={0} data-field="landing"  onChange={handleChangelanding} /></td>

                            <td><input type='text' name='airframeperiod.finallanding' className='w-100 input-border' data-arrayname="airframeperiod" data-index={0} data-field="finallanding" value={formData.airframeperiod[0].finallanding} onChange={handleChange}/></td>
                        </tbody>
                    </table>
                </div>
                {/* Table */}
                <h6 className='text-light fw-bold mx-2'>Engine period</h6>
                <div className="card_section card-color border p-2 shadow ">
                    <table className="text-center w-100 text-light">
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Serial No</th>
                                <th>Hours</th>
                                <th>final Hours</th>
                                <th>Cycles</th>
                                <th>Final Cycles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <td><input type='text' name='engineperiod.model' data-arrayname="engineperiod" data-index={0} data-field="model" className='w-100 input-border' value={formData.engineperiod[0]?.model || ""} onChange={handleChange} /></td> */}

                            <td>
                              <select className="w-100 input-border " id="engineperiod.model" name="engineperiod.model" value={formData.engineperiod[0]?.model || ""} onChange={handleChange}>
                          <option value='' disabled selected>Select...</option>
                            {loadingmodel ? (<p>Loading.....</p>):(Modeldata?.length>0 ? (Modeldata.map((data)=>(
                                    <option>
                                      {data.ModelName}
                                    </option>
                                ))):(<></>))
                            }
                          </select>
                            </td>
                            {/* <td><input type='text' name='engineperiod.serialno' data-arrayname="engineperiod" data-index={0} data-field="serialno" className='w-100 input-border' value={formData.engineperiod[0]?.serialno || ""} onChange={handleChange} /></td> */}
                            <td>
                            <select className="w-100 input-border " name="engineperiod.serialno" onChange={handleChange}>
                        <option value='' disabled selected>Select...</option>
             
                                  <option>
                                  525A-0470	
                                  </option>
                       
                        </select>
                            </td>
                            <td><input type='text' name='engineperiod.hours' data-arrayname="engineperiod" data-index={0} data-field="hours" className='w-100 input-border' value={formData.engineperiod[0]?.hours || ""} onChange={handleChange} /></td>
                            <td><input type='text' name='engineperiod.finalhours' data-arrayname="engineperiod" data-index={0} data-field="finalhours" className='w-100 input-border' value={formData.engineperiod[0]?.finalhours || ""} onChange={handleChange} /></td>
                            <td><input type='text' name='engineperiod.cycle' data-arrayname="engineperiod" data-index={0} data-field="cycle" className='w-100 input-border' onChange={handleChangefinalcycles} /></td>
                            <td><input type='text' name='engineperiod.finalcycles' data-arrayname="engineperiod" data-index={0} data-field="finalcycles" className='w-100 input-border' value={formData.engineperiod[0]?.finalcycles || ""} onChange={handleChange} /></td>
                        </tbody>
                    </table>
                </div>
                {/* Table */}
                <h6 className='text-light fw-bold mx-2'>AirCondition period</h6>
                <div className="card_section card-color border p-2 shadow ">
                    <table className="text-center w-100 text-light">
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Serial No</th>
                                <th>Hours</th>
                                <th>final Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <td><input type='text' name='airconditionperiod.model' data-arrayname="airconditionperiod" data-index={0} data-field="model" className='w-100 input-border' value={formData.airconditionperiod[0]?.model || ""} onChange={handleChange} /></td> */}
                            <td>
                              <select className="w-100 input-border "  name="airconditionperiod.model" value={formData.airconditionperiod[0]?.model || ""} onChange={handleChange}>
                          <option value='' disabled selected>Select...</option>
                            {loadingmodel ? (<p>Loading.....</p>):(Modeldata?.length>0 ? (Modeldata.map((data)=>(
                                    <option>
                                      {data.ModelName}
                                    </option>
                                ))):(<></>))
                            }
                          </select>
                            </td>
                            
                            {/* <td><input type='text' name='airconditionperiod.serialno' data-arrayname="airconditionperiod" data-index={0} data-field="serialno" className='w-100 input-border' value={formData.airconditionperiod[0]?.serialno || ""} onChange={handleChange} /></td> */}

                            <td>
                            <select className="w-100 input-border " name="airconditionperiod.serialno" onChange={handleChange}>
                        <option value='' disabled selected>Select...</option>
             
                                  <option>
                                  525A-0470	
                                  </option>
                       
                        </select>
                            </td>
                            <td><input type='text' name='airconditionperiod.hours' data-arrayname="airconditionperiod" data-index={0} data-field="hours" className='w-100 input-border' value={formData.airconditionperiod[0]?.hours || ""} onChange={handleChange} /></td>
                            <td><input type='text' name='airconditionperiod.finalhours' data-arrayname="airconditionperiod" data-index={0} data-field="finalhours" className='w-100 input-border' value={formData.airconditionperiod[0]?.finalhours || ""}onChange={handleChange} /></td>
                        </tbody>
                    </table>
                </div>
                <div className='row'>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <div className='row'>
                      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                        <Form.Group >
                          <label className='mt-2 fw-bold'>Remarks</label>
                        </Form.Group>
                      </div>
                      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9'>
                        <Form.Group className='mt-2'>
                            <textarea name='remark' className='w-100 input-border' value={formData.remark} onChange={handleChange} />
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <div className='row'>
                      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                          <Form.Group >
                            <label className='mt-3 fw-bold'>File Attachment</label>
                          </Form.Group>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9'>
                          <Form.Group className='mt-2'>
                              <textarea name='fileattachments' className='form-control '  />
                              {/* value={formData.fileattachments} onChange={handleChange} */}
                          </Form.Group>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </form>
        </div>
    );
}

export default FlightLogForm;