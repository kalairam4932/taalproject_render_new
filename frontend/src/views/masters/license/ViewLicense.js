import React, { useState } from 'react';
import './license.css';
import { useNavigate } from 'react-router-dom';
import { base_url } from '../../../../constant/url';
import { useMutation, useQuery ,useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import Swal from "sweetalert2";

const ViewLicense = () => {
    const [search, setSearch] = useState('');
    const queryClient = useQueryClient();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust items per page as needed

    const navigate = useNavigate();

    // Sample data (Replace with API data if needed)
    // const vendors = [
    //     { vendor: "ADAMS AVIATION", code: 34, address: "UNKNOWN" },
    //     { vendor: "AEROSPARES", code: 32, address: "NEW DELHI" },
    //     { vendor: "AEROSTRUCTURE, TAAL", code: 17, address: "UNKNOWN" },
    //     { vendor: "ASSD", code: 24, address: "HOSUR" },
    //     { vendor: "BUSINESS JET INDIA PVT LTD", code: 30, address: "HYDERABAD" }
    // ];

    // Filter data based on search input
    // const filteredVendors = vendors.filter(v =>
    //     v.vendor.toLowerCase().includes(search.toLowerCase())
    // );

    // Pagination Logic
    // const totalPages = Math.ceil(filteredVendors.length / itemsPerPage);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const currentVendors = filteredVendors.slice(startIndex, endIndex);

    const {data:licens,isLoading:licensloading} = useQuery({
        queryKey :["licenskey"],
        queryFn : async() =>{
          const response = await axios.get(`${base_url}/api/aircraft/getlicences`);
          return response.data

        }


    });
                    const deleteAirframe = async ({deleteid}) => {
                        console.log("dldhairm",deleteid )
                        const response = await axios.delete(`${base_url }/api/aircraft/dldlicences/${deleteid}`);
                        return response.data;
                    };
                    
                const useDeleteAirframe = useMutation( {
                    mutationFn : deleteAirframe,
                    onSuccess: () => {
                        Swal.fire("Deleted!", "The License Data has been deleted.", "success");
                        queryClient.invalidateQueries("licenskey"); // Refresh data after delete
                    },
                    onError: (error) => {
                        Swal.fire("Error!", "Failed to delete the License Data.", "error");
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
                <h4 className="text-white fw-bold">License List</h4>
                <div>
                    <button className="btn btn-primary me-2" onClick={() => navigate("/addLicense")}>Add New</button>
                    <button className="btn btn-outline-danger" onClick={()=>(navigate('/'))}>Close</button>
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
                            <th>Pilot Name</th>
                            <th>License No</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {licens?.length > 0 ? (
                            licens.map((vendor, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-primary text-white border p-2 rounded" : "bg-light"}>
                                    <td>{vendor.PilotName}</td>
                                    <td>{vendor.LicenseNo}</td>
                                    <td>
                                        <div className='d-flex justify-content-center'>
                                            <button className="btn btn-light mx-2" onClick={()=>navigate(`/Updatelicense/${vendor._id}`)} >
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
                                <td colSpan="3" className="text-center text-danger">No Records Found</td>
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
    );
}

export default ViewLicense;
