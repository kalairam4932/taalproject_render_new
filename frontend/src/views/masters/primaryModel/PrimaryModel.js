import React, { useState } from 'react';
import './primaryModel.css';
import { useNavigate } from 'react-router-dom';
import { base_url } from '../../../../constant/url';
import Swal from "sweetalert2";
import { useQuery , useMutation,useQueryClient} from "@tanstack/react-query";
import axios from 'axios';

const PrimaryModel = () => {

  const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Change this value to set items per page
  
    const navigate = useNavigate();
    const queryClient = useQueryClient();
  
    // const vendors = [
    //   { vendor: "ADAMS AVIATION", code: 34, address: "UNKNOWN", city: "UNKNOWN", zip: "UNKNOWN", state: "UNKNOWN", country: "UNKNOWN", contact: "UNKNOWN" },
    //   { vendor: "AEROSPARES", code: 32, address: "E-9/24, VASANT VIHAR, NEW DELHI", city: "NEW DELHI", zip: "110059", state: "DELHI", country: "INDIA", contact: "" },
    //   { vendor: "AEROSTRUCTURE, TAAL", code: 17, address: "UNKNOWN", city: "UNKNOWN", zip: "UNKNOWN", state: "UNKNOWN", country: "UNKNOWN", contact: "UNKNOWN" },
    //   { vendor: "ASSD", code: 24, address: "BELANDONADALLI", city: "HOSUR", zip: "635114", state: "TAMILNADU", country: "INDIA", contact: "ASHOK" },
    //   { vendor: "BUSINESS JET INDIA PVT LTD", code: 30, address: "168/1, ROAD NO 13A, JUBILE HILLS", city: "HYDERABAD", zip: "500033", state: "ANDHRA PRADESH", country: "INDIA", contact: "SUSAIRAJ JOAN D" }
    // ];
  
    // Filter data based on search input
    // const filteredVendors = vendors.filter(v =>
    //   v.vendor.toLowerCase().includes(search.toLowerCase())
    // );
  
    // Pagination Logic



    const { data: primarydatas, isLoading, isError } = useQuery({
      queryKey: ["primarydatakey"],
      queryFn: async () => {
        try {
          const res = await fetch(`${base_url}/api/aircraft/getprimary`, {
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

    const dldbutton = ()=>{
      
    }
    // const totalPages = Math.ceil(filteredVendors.length / itemsPerPage);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const currentVendors = filteredVendors.slice(startIndex, endIndex);
    const deleteAta = async ({deleteid}) => {
      console.log("dldhairm",deleteid )
      const response = await axios.delete(`${base_url }/api/aircraft/delprimary/${deleteid}`);
      return response.data;
  };
    const useDeleteAta = useMutation( {
      mutationFn : deleteAta,
      onSuccess: () => {
          Swal.fire("Deleted!", "The Primary model data has been deleted.", "success");
          queryClient.invalidateQueries("primarydatakey"); // Refresh data after delete
      },
      onError: (error) => {
          Swal.fire("Error!", "Failed to delete the Primary model data  .", "error");
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
                useDeleteAta.mutate({deleteid});
            }
        });
    };

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 border p-2 rounded shadow bg-card-color card-border">
        <h4 className="text-white fw-bold">Primary Model List</h4>
        <div>
          <button className="btn btn-primary me-2" onClick={() => navigate("/addPrimaryModel")}>Add New</button>
          <button className="btn btn-outline-danger">Close</button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive border p-4 rounded shadow bg-card-color">
        <div className='row'>
          <div className='col-3'>
            {/* Search Bar */}
            <input type="text" className="form-control mb-3" placeholder="Search Here" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        <table className="text-center w-100">
          <thead>
            <tr>
              <th>primary Model Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {primarydatas?.length > 0 ? (
              primarydatas.map((vendor, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-primary text-white border p-2 rounded" : "bg-light"}>
                  <td>{vendor.PrimaryModelName}</td>
                  <td>
                    <div className='d-flex justify-content-center'>
                      <button className="btn btn-light mx-2" onClick={()=>navigate(`/updateprimary/${vendor._id}`)}>
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
                <td colSpan="4" className="text-center text-danger">No Records Found</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        {/* <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-primary" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
          <span className="align-self-center">Page {currentPage} of {totalPages}</span>
          <button className="btn btn-primary" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default PrimaryModel