import React, { useState } from 'react';
import './city.css';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery ,useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import Swal from "sweetalert2";
import {BeatLoader} from 'react-spinners'
import { base_url } from '../../../../constant/url';

const City = () => {

  const [search, setSearch] = useState('');
  const queryClient = useQueryClient();     
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 5; // Adjust items per page as needed
  
      const navigate = useNavigate();   
  
      // Sample data (Replace with API data if needed)
    //   const vendors = [
    //       { vendor: "ADAMS AVIATION", code: 34, address: "UNKNOWN" },
    //       { vendor: "AEROSPARES", code: 32, address: "NEW DELHI" },
    //       { vendor: "AEROSTRUCTURE, TAAL", code: 17, address: "UNKNOWN" },
    //       { vendor: "ASSD", code: 24, address: "HOSUR" },
    //       { vendor: "BUSINESS JET INDIA PVT LTD", code: 30, address: "HYDERABAD" }
    //   ];
  
    //   // Filter data based on search input
    //   const filteredVendors = vendors.filter(v =>
    //       v.vendor.toLowerCase().includes(search.toLowerCase())
    //   );
  
    //   // Pagination Logic
    //   const totalPages = Math.ceil(filteredVendors.length / itemsPerPage);
    //   const startIndex = (currentPage - 1) * itemsPerPage;
    //   const endIndex = startIndex + itemsPerPage;
    //   const currentVendors = filteredVendors.slice(startIndex, endIndex);

      

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
             console.log(getcitydatas);
            if (!res.ok) throw new Error("Failed to fetch data");
            return res.json();
          } catch (error) {
            console.log(`Error message: ${error.message}`);
            throw error;
          }
        },
      });

                const deleteAirframe = async ({deleteid}) => {
             
                  const response = await axios.delete(`${base_url }/api/aircraft/deletecity/${deleteid}`);
                  return response.data;
              };
              
          const useDeleteAirframe = useMutation( {
              mutationFn : deleteAirframe,
              onSuccess: () => {
                  Swal.fire("Deleted!", "The City Data has been deleted.", "success");
                  queryClient.invalidateQueries("licenskey"); // Refresh data after delete
              },
              onError: (error) => {
                  Swal.fire("Error!", "Failed to delete the City Data.", "error");
                  console.error("Delete error:", error);
              }
          });
      
      
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
  return (
    <div className="container mt-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3 border p-2 rounded shadow bg-card-color card-border">
                <h4 className="text-white fw-bold">City List</h4>
                <div>
                    <button className="btn btn-primary me-2" onClick={() => navigate("/addCity")}>Add New</button>
                    <button className="btn btn-outline-danger" onClick={() => navigate("/")}>Close</button>
                </div>
            </div>

            {/* Table */}
            <div className="table-responsive border p-4 rounded shadow bg-card-color">
                <div className='row'>
                    <div className='col-3'>
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
                    </div>
                </div>

                <table className="text-center w-100">
                    <thead>
                        <tr>
                            <th>City Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {getcitydatas ?.length > 0 ? (
                            getcitydatas.map((vendor, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-primary text-white border p-2 rounded" : "bg-light"}>
                                    <td>{vendor.cityName}</td>
                                    <td>
                                        <div className='d-flex justify-content-center'>
                                            <button className="btn btn-light mx-2" onClick={()=>navigate(`/updatecity/${vendor._id}`)}>
                                                <i className="bi bi-pencil-square mx-2"></i>
                                            </button>
                                            <button className="btn btn-light" onClick={()=>handleDelete(vendor._id)}>
                                                <i className="bi bi-trash mx-2"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr >
                                <td colSpan="3" className="text-center  " >
                                <BeatLoader
                                    
                                    color="rgba(28, 98, 255, 1)"
                                    cssOverride={{}}
                                    loading
                                    margin={1}
                                    size={26}
                                    speedMultiplier={1}
                                />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                {/* <div className="d-flex justify-content-between mt-3">
                    <button 
                        className="btn btn-primary" 
                        disabled={currentPage === 1} 
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        Previous
                    </button>
                    <span className="align-self-center">Page {currentPage} of {totalPages}</span>
                    <button 
                        className="btn btn-primary" 
                        disabled={currentPage === totalPages || totalPages === 0} 
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next
                    </button>
                </div> */}
            </div>
        </div>
  )
}

export default City