import React, { useState } from 'react';
import './place.css';
import { useNavigate } from 'react-router-dom';
import { useQuery ,useQueryClient,useMutation} from "@tanstack/react-query";
import axios from 'axios';
import { ClipLoader } from "react-spinners";
import Swal from "sweetalert2";

import { base_url } from '../../../../constant/url';

const Place = () => {

  const [search, setSearch] = useState('');
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 5; // Adjust items per page as needed
        const queryClient = useQueryClient();
      const navigate = useNavigate();
  
      // Sample data (Replace with API data if needed)
    //   const vendors = [
    //       { vendor: "ADAMS AVIATION", code: 34, address: "UNKNOWN" },
    //       { vendor: "AEROSPARES", code: 32, address: "NEW DELHI" },
    //       { vendor: "AEROSTRUCTURE, TAAL", code: 17, address: "UNKNOWN" },
    //       { vendor: "ASSD", code: 24, address: "HOSUR" },
    //       { vendor: "BUSINESS JET INDIA PVT LTD", code: 30, address: "HYDERABAD" }
    //   ];
  
      // Filter data based on search input
    //   const filteredVendors = vendors.filter(v =>
    //       v.vendor.toLowerCase().includes(search.toLowerCase())
    //   );
  
      // Pagination Logic
    //   const totalPages = Math.ceil(filteredVendors.length / itemsPerPage);
    //   const startIndex = (currentPage - 1) * itemsPerPage;
    //   const endIndex = startIndex + itemsPerPage;
    //   const currentVendors = filteredVendors.slice(startIndex, endIndex);


    const {data:places,isLoading} = useQuery({
        queryKey :["placeskey"],
        queryFn : async() =>{
            const response = await axios.get(`${base_url}/api/aircraft/getplaces`);
            return response.data

        }


    });

            const deleteAirframe = async ({deleteid}) => {
           
                const response = await axios.delete(`${base_url}/api/aircraft/deleteplaces/${deleteid}`);
                return response.data;
            };
            
        const useDeleteAirframe = useMutation( {
            mutationFn : deleteAirframe,
            onSuccess: () => {
                Swal.fire("Deleted!", "The Places Data has been deleted.", "success");
                queryClient.invalidateQueries("licenskey"); // Refresh data after delete
            },
            onError: (error) => {
                Swal.fire("Error!", "Failed to delete the Places Data.", "error");
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
                <h4 className="text-white fw-bold">Place List</h4>
                <div>
                    <button className="btn btn-primary me-2" onClick={() => navigate("/addPlace")}>Add New</button>
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
                            <th>Place Name</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {places?.length > 0 ? (
                            places.map((vendor, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-primary text-white border p-2 rounded" : "bg-light"}>
                                    <td>{vendor.place}</td>
                                    <td>{vendor.city}</td>
                                    <td>
                                        <div className='d-flex justify-content-center' >
                                            <button className="btn btn-light mx-2" onClick={()=>navigate(`/updateplaces/${vendor._id}`)}>
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
                            <tr>
                                <td colSpan="3" className="text-center "><ClipLoader /></td>
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

export default Place