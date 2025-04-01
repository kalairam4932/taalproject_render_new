import React, { useState } from 'react';
import './flightstyle.css';
import { useNavigate } from 'react-router-dom';
import { Form } from "react-bootstrap";
import useFetch  from '../../customHooks/UseFetch'
import Swal from "sweetalert2";
import axios from 'axios';
import { useMutation,useQuery,useQueryClient} from "@tanstack/react-query";
import { base_url } from '../../../../constant/url';
import { Link } from "react-router-dom";



const FlightLogDetails = () => {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
     const queryClient = useQueryClient();

    const itemsPerPage = 5; // Adjust items per page as needed

    const navigate = useNavigate();
    const deleteAirframe = async ({deleteid}) => {
        console.log("dldhairm",deleteid )
        const response = await axios.delete(`${base_url}/api/flightlog/Deleteflightlogs/${deleteid}`);

        return response.data;
    };

            const useDeleteAirframe = useMutation( {
                mutationFn : deleteAirframe,
                onSuccess: () => {
                    Swal.fire("Deleted!", "The airframe has been deleted.", "success");
                    queryClient.invalidateQueries("getflightdatalogkey")

                },
                onError: (error) => {
                    Swal.fire("Error!", "Failed to delete the airframe.", "error");
                    console.error("Delete error:", error);
                }
            });

    // Delete API
          const handleDelete = (deleteid) => {
            console.log("dldid",deleteid)
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    useDeleteAirframe.mutate({deleteid});
                }
            });
        };







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
      

    
    


    return (
        <div className="container mt-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3 border p-2 rounded shadow bg-card-color card-border">
                <h4 className="text-white fw-bold">Flight Log Form</h4>
                <div>
                    <button className="btn btn-primary me-2" onClick={() => navigate("/flightLogForm")}>Add New</button>
                   
                </div>
            </div>

            {/* Table */}
            <div className="table-responsive border p-4 rounded shadow bg-card-color">
                <div className='row my-2'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 col-xxl-1'>
                        <Form.Group >
                            <label className='mt-3 fw-bold'>Aircraft</label>
                        </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2'>
                        <Form.Group className='mt-2'>
                            {/* Search Bar */}
                        <input 
                            type="text" 
                            className="form-control mb-3" 
                            placeholder="Search Here" 
                            value={search} 
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1); // Reset to page 1 on search
                            }} 
                        />
                        </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 col-xxl-1'>
                        <Form.Group >
                            <label className='mt-3 fw-bold'>Start Date</label>
                        </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2'>
                        <Form.Group className='mt-2'>
                            <input type="date" name='category' className='form-control ' placeholder="Search Here" />
                        </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 col-xxl-1'>
                        <Form.Group >
                            <label className='mt-3 fw-bold'>End Date</label>
                        </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2'>
                        <Form.Group className='mt-2'>
                            <input type="date" name='location' className='form-control ' placeholder="Search Here" />
                        </Form.Group>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        {/* Search Bar */}
                        <input 
                            type="text" hidden
                            className="form-control mb-3" 
                            placeholder="Search Here" 
                            value={search} 
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1); // Reset to page 1 on search
                            }} 
                        />
                    </div>
                </div>

                <table className="text-center w-100">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Log No</th>
                            <th>LogPage No</th>
                            <th>Departure<br /><span className='text-light'>( Time)</span></th>
                            <th>Arrival<br /><span className='text-light'>( Time)</span></th>
                            <th>AirBorne Time</th>
                            <th>Cycles</th>
                            <th>Final Hours</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getflightdata && getflightdata?.length > 0 ? (
                        getflightdata.map((item, index) => ( // ✅ Use "item" instead of "data"
                            <tr key={item._id} className={index % 2 === 0 ? "bg-primary text-white border p-2 rounded" : "bg-light"}>
                            <td>{item.date}</td>
                            <td>{item.Logno.first}</td>
                            <td>{item.pageno}</td>
                            <td>{item.departure.place} <br/>
                            <span>{item.departure.time}</span>

                            </td>
                            <td>{item.arrival.place}

                            <br/>
                            <span>{item.arrival.time}</span>
                            </td>
                            <td>{item.HOBBS.airborntime}</td>
                            {/* ✅ Display Cycle - Works for both object & array */}
                            <td>
                                {Array.isArray(item.engineperiod)
                                    ? item.engineperiod.map((engine, idx) => (
                                        <span key={idx}>{engine.cycle || "N/A"} </span>
                                    ))
                                    : item.engineperiod?.cycle || "N/A"
                                }
                            </td>

                            {/* ✅ Display Final Hours */}
                            <td>
                                {Array.isArray(item.airconditionperiod)
                                    ? item.airconditionperiod.map((engine, idx) => (
                                        <span key={idx}>{engine.finalhours || "N/A"} </span>
                                    ))
                                    : item.engineperiod?.finalhours || "N/A"
                                }
                            </td>
                            <td>
                                <div className="d-flex justify-content-center">
                                <Link to={`/editFlightLogForm/${item._id}`}>
                                        <button className="btn btn-light mx-2">
                                            <i className="bi bi-pencil-square mx-2"></i>
                                        </button>
                                </Link>
                                <button className="btn btn-light" onClick={()=>handleDelete(item._id)} >
                                    <i className="bi bi-trash mx-2"></i>
                                </button>
                                </div>
                            </td>
                            </tr>
                        ))
                        ) : (
                        <tr>
                            <td colSpan="9" className="text-center ">Loading....</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FlightLogDetails;
