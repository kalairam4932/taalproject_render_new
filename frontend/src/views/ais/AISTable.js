import React,{useState, useEffect} from 'react'
import './ais.css'
import { useNavigate, useParams } from 'react-router-dom';
import useFetch  from '../customHooks/UseFetch'
import { Link } from 'react-router-dom';
import { base_url } from '../../../constant/url';


const AISTable = () => {

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust items per page as needed
    const navigate = useNavigate();
    const {id} = useParams();

    //Fetch data From Flight Log Details
    const {data, loading } = useFetch(`${base_url}/api/assembly/getAssembly`)
    console.log("Fetched Data:", data); // Check if data is being received correctly


    if(loading){
        return <div>Loading...</div>
    }
    if(!data){
        return <div>No Data Found</div>
    }


    return (
        <div className="container mt-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3 border p-2 rounded shadow bg-card-color card-border">
                <h4 className="text-white fw-bold">Assembly Inspection Status</h4>
                <div>
                    <button className="btn btn-primary me-2" onClick={() => navigate("/aisForm")}>Add New</button>
                    <button className="btn btn-outline-danger">Close</button>
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
                                <td>{item.InspType}</td>
                                <td>{item.ATAChapter}</td>
                                <td>{item.description}</td>
                                <td>{item.airframeFrequency}</td>
                                <td>{item.WorkOrderNo}</td>
                                <td>{item.remarks}</td>
                                <td>{item.doneon}</td>
                                <td>{item.remarks}</td>
                                <td>{item.airframeElapsedValue}</td>
                                <td>{item.airframeRemaining}</td>
                                <td>{item.doneon}</td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <Link to={`/editAIS/${item._id}`}>
                                        <button className="btn btn-light mx-2">
                                            <i className="bi bi-pencil-square mx-2"></i>
                                        </button>
                                    </Link>  
                                    <button className="btn btn-light">
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
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AISTable