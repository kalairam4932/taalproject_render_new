import React, {useState} from 'react'
import './ata.css'
import { useNavigate } from "react-router-dom";
import { base_url } from '../../../constant/url';
import Swal from "sweetalert2";
import { useQuery , useMutation,useQueryClient} from "@tanstack/react-query";
import axios from 'axios';
const Ata = () => {

      const [search, setSearch] = useState("");
      const navigate = useNavigate();
      const queryClient = useQueryClient();
    



                  const { data: getaptdatas, isLoading, isError } = useQuery({
                    queryKey: ["getaptdatakey"],
                    queryFn: async () => {
                      try {
                        const res = await fetch(`${base_url}/api/aircraft/getata`, {
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

                  const deleteAta = async ({deleteid}) => {
                    console.log("dldhairm",deleteid )
                    const response = await axios.delete(`${base_url }/api/aircraft/delata/${deleteid}`);
                    return response.data;
                };
                  const useDeleteAta = useMutation( {
                    mutationFn : deleteAta,
                    onSuccess: () => {
                        Swal.fire("Deleted!", "The ATA has been deleted.", "success");
                        queryClient.invalidateQueries("getaptdatakey"); // Refresh data after delete
                    },
                    onError: (error) => {
                        Swal.fire("Error!", "Failed to delete the ATA.", "error");
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
        <h4 className="text-white fw-bold">ATA List</h4>
        <div>
          <button className="btn btn-primary me-2" onClick={() => navigate("/addAta")}>Add New</button>
          <button className="btn btn-outline-danger" onClick={()=>navigate('/')}>Close</button>
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
              <th>ATA Name</th>
              <th>ATA Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (<p>loading....</p>):(getaptdatas?.length > 0 ? (
              getaptdatas.map((vendor, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-primary text-white border p-2 rounded" : "bg-light"}>
                  <td>{vendor.ataName}</td>
                  <td>{vendor.atacode}</td>
                  <td>
                    <div className='d-flex justify-content-center'>
                      <button className="btn btn-light mx-2" onClick={()=>navigate(`/updateata/${vendor._id}`)}>
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
                <td colSpan="9" className="text-center text-danger">No Records Found</td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Ata