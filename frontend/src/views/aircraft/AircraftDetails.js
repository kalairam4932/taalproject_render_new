import React, {useState} from 'react'
import { useQuery } from "@tanstack/react-query";
import './vendorTable.css'
import { useNavigate } from "react-router-dom";

const AircraftDetails = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const { data: aircraftdata, isLoading, isError } = useQuery({
    queryKey: ["aircraftdatakey"],
    queryFn: async () => {
      try {
        const res = await fetch("https://taal.onrender.com/api/aircraft/", {
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
              <th scope="col">#</th>
              <th scope="col">Reg No</th>
              <th scope="col">Category</th>
              <th scope="col">Owner</th>
              <th scope="col">Operator</th>
              <th scope="col">manufacture</th>
              <th scope="col">model</th>
              <th scope="col">serialno</th>
              <th scope="col">Action</th>
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
                      <button className="btn btn-light mx-2">
                        <i className="bi bi-pencil-square mx-2"></i>
                      </button>
                      <button className="btn btn-light">
                        <i className="bi bi-trash mx-2"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center text-danger">Loading....</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
      
  )
}

export default AircraftDetails