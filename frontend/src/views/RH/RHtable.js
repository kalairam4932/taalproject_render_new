import React, { useState } from 'react'
import './RH.css'
import DataTable from "react-data-table-component";
import { useQuery ,useMutation,useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { base_url } from '../../../constant/url';
import {BeatLoader} from 'react-spinners'
import Swal from "sweetalert2";



const RHtable = () => {
  // const [selectedRows, setSelectedRows] = useState(false)
  // const [toggledClearRows, setToggleClearRows] = React.useState(false);
    const navigated = useNavigate();
    const queryClient = useQueryClient();   

    const fetchUsers = async () => {
        const response = await axios.get(`${base_url}/api/Engine/getRHENGINEDATA`);
        return response.data;
    };
    const { data: users, isLoading, error } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    const dldRHTABLE = async ({deleteid}) => {
             
        const response = await axios.delete(`${base_url}/api/Engine/dldRHENGINEDATA/${deleteid}`);
        return response.data;
    };  
    const useDeleteAirframe = useMutation( {
        mutationFn : dldRHTABLE,
        onSuccess: () => {
            Swal.fire("Deleted!", "The City Data has been deleted.", "success");
            queryClient.invalidateQueries("users"); // Refresh data after delete
        },
        onError: (error) => {
            Swal.fire("Error!", "Failed to delete the City Data.", "error");
            console.error("Delete error:", error);
        }
    });


    const handleDelete = (deleteid)=>{
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



    }
    
  return (
    <div >

            <div className="d-flex justify-content-between align-items-center mb-1 mt-3  p-2 rounded shadow bg-card-color ">
                <h5 className="text-white fw-bold">RH Engine List</h5>
                <div>
                    <button className="btn btn-primary me-2" onClick={()=>navigated('/RHENGINE')}>Add New</button>
                   
                </div>
            </div>
            {/* table design */}
            <div  className="table-responsive mt-2 p-4 rounded shadow bg-card-color">
            <table className="text-center w-100">
                    <thead>
                        <tr>
                            <th>Installed on</th>
                            <th>ATA Chapter</th>
                            <th>Manufacturer</th>
                            <th>Model</th>
                            <th>Serial No</th>
                            <th>Pos</th>
                            <th>Revision No</th>


                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {users ?.length > 0 ? (
                            users.map((vendor, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-primaryone text-white border p-2 rounded" : "bg-light"}>
                                    <td>{vendor.Installedon}</td>
                                    <td>{vendor.ATAChapter}</td>
                                    <td>{vendor.manufacturer}</td>
                                    <td>{vendor.Model}</td>
                                    <td>{vendor.SerialNo}</td>
                                    <td>{vendor.Position}</td>
                                    <td>{vendor.RevisionNo}</td>

                                    <td>
                                        <div className='d-flex justify-content-center'>
                                            <button className="btn btn-light mx-2" onClick={()=>navigated(`/RHUPDATE/${vendor._id}`)}  >
                                                <i className="bi bi-pencil-square mx-2"></i>
                                            </button>
                                            <button className="btn btn-light" onClick={()=>handleDelete(vendor._id)} >
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

            

            {/* <DataTable
                title="RH Data List"
                columns={columns}
                data={users}
                selectableRows
                onSelectedRowsChange={handleChange}
                clearSelectedRows={toggledClearRows}
                pagination
                highlightOnHover
            /> */}

            </div>
       
        
    </div>
  )
}

export default RHtable