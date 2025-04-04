import React,{useState, useEffect} from 'react'
import './Ads.css'
import { useNavigate, useParams } from 'react-router-dom';
import useFetch  from '../customHooks/UseFetch'
import { Link } from 'react-router-dom';
import { useQuery , useQueryClient ,useMutation, Mutation} from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from 'axios';
import { base_url } from '../../../constant/url';


const AdsTable = () => {

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust items per page as needed
    const navigate = useNavigate();
    const {id} = useParams();
    const queryClient = useQueryClient();

    //Fetch data From Flight Log Details
   
    const{data:data,isLoading:asiloading} = useQuery({
        queryKey:["asidatakey"],
        queryFn: async()=>{
          const response = await axios.get(`${base_url}/api/assembly/getads`)
          return response.data
    
        }
    
    })
    // if(loading){
    //     return <div>Loading...</div>
    // }
    // if(!data){
    //     return <div>No Data Found</div>
    // }
                  const deleteAirframe = async ({deleteid}) => {
                    const response = await axios.delete(`${base_url }/api/assembly/deleteAsd/${deleteid}`);
                    return response.data;
                    };
                
                    
                
                    const useDeleteAirframe = useMutation( {
                        mutationFn : deleteAirframe,
                        onSuccess: () => {
                            Swal.fire("Deleted!", "The airframe has been deleted.", "success");
                            queryClient.invalidateQueries("asidatakey"); 
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
                <h4 className="text-white fw-bold">Assembly Directive  Status</h4>
                <div>
                    <button className="btn btn-primary me-2" onClick={() => navigate("/ADSFORM")}>Add New</button>
                    
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
                            <th>Ref</th>
                            <th>ATA</th>
                            <th>Description</th>
                            <th>Done On</th>
                            <th>Order No</th>
                            <th>Remark</th>
                            <th>Done On Value</th>
                            <th>Current</th>
                            <th>Elapsed</th>
                            <th>Due At</th>
                            <th>Remaining</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data && data.length > 0 ? (
                        data.map((item, index) => ( // ✅ Use "item" instead of "data"
                            <tr key={item._id} className={index % 2 === 0 ? "bg-primary text-white border p-2 rounded" : "bg-light"}>
                                <td>{item.DirectiveType}</td>
                                <td>{item.ATAChapter}</td>
                                <td>{item.description}</td>
                                <td>{item.airframeFrequency}</td>
                                <td>{item.WorkOrderNo}</td>
                                <td>{item.remarks}</td>
                                <td>{item.doneon}</td>
                                <td>{item.remarks}</td>
                                <td>{item.airframeElapsedValue}</td>
                                <td>{item.airframeRemaining}</td>
                                <td>{item.Remainingdays}</td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <Link to={`/editAIS/${item._id}`}>
                                        <button className="btn btn-light mx-2">
                                            <i className="bi bi-pencil-square mx-2"></i>
                                        </button>
                                    </Link>  
                                    <button className="btn btn-light" onClick={()=> handleDelete(item._id)}>
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

export default AdsTable