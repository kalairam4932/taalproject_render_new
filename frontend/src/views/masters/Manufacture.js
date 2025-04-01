import React, {useState} from 'react'
import './ata.css'
import { useNavigate } from "react-router-dom";
import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query";
import { base_url } from '../../../constant/url';
import axios from 'axios';
import Swal from "sweetalert2";


const Manufacture = () => {

    const [search, setSearch] = useState("");
          const navigate = useNavigate();
          const queryClient = useQueryClient();
        
          // Sample data (Replace with API data if needed)
          // const vendors = [
          //   { vendor: "ADAMS AVIATION", code: 34, address: "UNKNOWN", city: "UNKNOWN", zip: "UNKNOWN", state: "UNKNOWN", country: "UNKNOWN", contact: "UNKNOWN" },
          //   { vendor: "AEROSPARES", code: 32, address: "E-9/24, VASANT VIHAR, NEW DELHI", city: "NEW DELHI", zip: "110059", state: "DELHI", country: "INDIA", contact: "" },
          //   { vendor: "AEROSTRUCTURE, TAAL", code: 17, address: "UNKNOWN", city: "UNKNOWN", zip: "UNKNOWN", state: "UNKNOWN", country: "UNKNOWN", contact: "UNKNOWN" },
          //   { vendor: "ASSD", code: 24, address: "BELANDONADALLI", city: "HOSUR", zip: "635114", state: "TAMILNADU", country: "INDIA", contact: "ASHOK" },
          //   { vendor: "BUSINESS JET INDIA PVT LTD", code: 30, address: "168/1, ROAD NO 13A, JUBILE HILLS", city: "HYDERABAD", zip: "500033", state: "ANDHRA PRADESH", country: "INDIA", contact: "SUSAIRAJ JOAN D" }
          // ];

            const { data: getManufacturedatas, isLoading, isError } = useQuery({
              queryKey: ["getManufacturedatakey"],
              queryFn: async () => {
                try {
                  const res = await fetch(`${base_url}/api/aircraft/getManufacturedata`, {
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
        
          // Filter data based on search input
          // const filteredVendors = getManufacturedatas.filter(v =>
          //   v.manufactureName.toLowerCase().includes(search.toLowerCase())
          // );

          const deleteAirframe = async ({deleteid}) => {
       
            const response = await axios.delete(`${base_url }/api/aircraft/dldManufacturedata/${deleteid}`);
            return response.data;
        };
        
    const useDeleteAirframe = useMutation( {
        mutationFn : deleteAirframe,
        onSuccess: () => {
            Swal.fire("Deleted!", "The Manufacture Data has been deleted.", "success");
            queryClient.invalidateQueries("licenskey"); // Refresh data after delete
        },
        onError: (error) => {
            Swal.fire("Error!", "Failed to delete the Manufacture Data.", "error");
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
        <h4 className="text-white fw-bold">Manufacturer Listw</h4>
        <div>
          <button className="btn btn-primary me-2" onClick={() => navigate("/addManufacture")}>Add New</button>
          <button className="btn btn-outline-danger" onClick={()=> navigate('/')}>Close</button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive border p-4 rounded shadow bg-card-color">
        <div className='row'>
            <div className='col-3'>
              {/* Search Bar */}
              <input type="text" className="form-control mb-3" placeholder="Search Here" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
        </div>
        <table className="text-center w-100">
          <thead className="">
            <tr>
              <th>Manufacture Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (<p>Loading......</p>):(getManufacturedatas?.length > 0 ? (
              getManufacturedatas.map((vendor, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-primary text-white border p-2 rounded" : "bg-light"}>
                  <td>{vendor.manufactureName}</td>
                  <td>
                    <div className='d-flex justify-content-center'>
                      <button className="btn btn-light mx-2" onClick={()=>navigate(`/updatemanufacture/${vendor._id}`)}>
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
                <td colSpan="9" className="text-center text-danger">No Records Found</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Manufacture
