import React,{useState} from 'react'
import './airframe.css'
import { useNavigate } from 'react-router-dom';
import { useQuery , useQueryClient ,useMutation, Mutation} from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from 'axios';
import { base_url } from '../../../constant/url';


const AirFrame = () => {

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust items per page as needed

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // // Sample data (Replace with API data if needed)
    // const vendors = [
    //     { vendor: "ADAMS AVIATION", code: 34, address: "UNKNOWN" },
    //     { vendor: "AEROSPARES", code: 32, address: "NEW DELHI" },
    //     { vendor: "AEROSTRUCTURE, TAAL", code: 17, address: "UNKNOWN" },
    //     { vendor: "ASSD", code: 24, address: "HOSUR" },
    //     { vendor: "BUSINESS JET INDIA PVT LTD", code: 30, address: "HYDERABAD" }
    // ];

    // // Filter data based on search input
    // const filteredVendors = vendors.filter(v =>
    //     v.vendor.toLowerCase().includes(search.toLowerCase())
    // );

    // // Pagination Logic
    // const totalPages = Math.ceil(filteredVendors.length / itemsPerPage);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const currentVendors = filteredVendors.slice(startIndex, endIndex);

    const { data: getairframedata, isLoading, isError } = useQuery({
        queryKey: ["getairframedatakey"],
        queryFn: async () => {
          try {
            const res = await fetch(`${base_url}/api/aircraft/getairframe`, {
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

      const deleteAirframe = async ({deleteid}) => {
        console.log("dldhairm",deleteid )
        const response = await axios.delete(`${base_url }/api/aircraft/dldairframe/${deleteid}`);
        return response.data;
    };
    
        
    
        const useDeleteAirframe = useMutation( {
            mutationFn : deleteAirframe,
            onSuccess: () => {
                Swal.fire("Deleted!", "The airframe has been deleted.", "success");
                queryClient.invalidateQueries("getairframedatakey"); // Refresh data after delete
            },
            onError: (error) => {
                Swal.fire("Error!", "Failed to delete the airframe.", "error");
                console.error("Delete error:", error);
            }
        });
 


      // dld function 
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
    // const deleteMutation = useDeleteAirframe();

    return (
        <div className="container mt-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3 border p-2 rounded shadow bg-card-color card-border">
                <h4 className="text-white fw-bold">AirFrame Form</h4>
                <div>
                    <button className="btn btn-primary me-2" onClick={() => navigate("/addAirFrame")}>Add New</button>
                   
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
                            <th>ATA</th>
                           
                            <th>Manufacturer</th>
                            <th>Model</th>
                            <th>Serial No</th>
                           
                            <th>Installed On</th>
                           
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {isLoading ? (<p>Loading......</p>):(
                        getairframedata?.length > 0 ? (
                            getairframedata.map((vendor, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-primaryone text-white border p-2 rounded" : "bg-light"}>
                                    <td>{vendor.ATAChapter}</td>
                                   
                                    <td>{vendor.Manufacturer}</td>
                                    <td>{vendor.Model}</td>
                                    <td>{vendor.SerialNo}</td>
                                    
                                    <td>{vendor.Installedon}</td>
                                   
                                    <td>
                                        <div className='d-flex justify-content-center'>
                                            <button className="btn btn-light mx-2" onClick={()=>navigate(`/updateairframe/${vendor._id}`)}>
                                                <i className="bi bi-pencil-square mx-2"></i>
                                            </button>
                                            <button className="btn btn-light" onClick={() => handleDelete(vendor._id)}>
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
                        )
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

export default AirFrame