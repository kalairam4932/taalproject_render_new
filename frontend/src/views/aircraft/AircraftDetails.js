import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useQuery , useQueryClient ,useMutation, Mutation} from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from 'axios';
import './vendorTable.css'
import { base_url } from '../../../constant/url';


const AircraftDetails = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");

  const { data: aircraftdata, isLoading, isError } = useQuery({
    queryKey: ["aircraftdatakey"],
    queryFn: async () => {
      try {
        const res = await fetch(`${base_url}/api/aircraft/`, {
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
  // const filteredVendors = aircraftdata.filter(v =>
  //   v.vendor.toLowerCase().includes(search.toLowerCase())
  // );


  // dld function 
  const deleteAirframe = async ({deleteid}) => {
    console.log("dldhairm",deleteid )
    const response = await axios.delete(`${base_url}/api/aircraft/dldaircraftdata/${deleteid}`);
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
        <h4 className="text-white fw-bold">Aircraft List</h4>
        <div>
          <button className="btn btn-primary me-2" onClick={()=> navigate("/addaircraft")}>Add New</button>
          <button className="btn btn-outline-danger">Close</button>
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
        <table className="text-center">
          <thead className="">
            <tr>
              <th scope="col" className='col-1'>#</th>
              <th scope="col" className='col-1'>Reg No</th>
              <th scope="col" className='col-1'>Category</th>
              <th scope="col" className='col-1'>Owner</th>
              <th scope="col" className='col-1'>Operator</th>
              <th scope="col" className='col-1'>manufacture</th>
              <th scope="col" className='col-1'>model</th>
              <th scope="col" className='col-1'>serialno</th>
              <th scope="col" className='col-1'>Action</th>
            </tr>
          </thead>
          <tbody>
            {aircraftdata?.length > 0 ? (
              aircraftdata.map((vendor, index) => (
                <tr key={vendor._id} className={index % 2 === 0 ? "bg-primary text-white border p-2 rounded" : "bg-light"}>
                  <td>{index + 1}</td>
                  <td>{vendor.regno}</td>
                  <td>{vendor.category}</td>
                  <td>{vendor.owner}</td>
                  <td>{vendor.operator}</td>
                  <td>{vendor.manufacture}</td>
                  <td>{vendor.model}</td>
                  <td>{vendor.serialno}</td>
                  
                  
                  
                  <td>
                    <div className='d-flex'>
                      <button className="btn btn-light mx-2" onClick={()=>navigate(`/updateaircraft/${vendor._id}`)}>
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
                <td colSpan="9" className="text-center "><b>Loading....</b></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
      
  )
}

export default AircraftDetails