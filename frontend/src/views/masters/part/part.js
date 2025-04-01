import React, { useState } from 'react';
import './part.css';
import { useNavigate } from 'react-router-dom';
import { Form } from "react-bootstrap";

const Part = () => {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust items per page as needed

    const navigate = useNavigate();

    // Sample data (Replace with API data if needed)
    const vendors = [
        { vendor: "ADAMS AVIATION", code: 34, address: "UNKNOWN" },
        { vendor: "AEROSPARES", code: 32, address: "NEW DELHI" },
        { vendor: "AEROSTRUCTURE, TAAL", code: 17, address: "UNKNOWN" },
        { vendor: "ASSD", code: 24, address: "HOSUR" },
        { vendor: "BUSINESS JET INDIA PVT LTD", code: 30, address: "HYDERABAD" }
    ];

    // Filter data based on search input
    const filteredVendors = vendors.filter(v =>
        v.vendor.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination Logic
    const totalPages = Math.ceil(filteredVendors.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentVendors = filteredVendors.slice(startIndex, endIndex);

    return (
        <div className="container mt-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3 border p-2 rounded shadow bg-card-color card-border">
                <h4 className="text-white fw-bold">Part List</h4>
                <div>
                    <button className="btn btn-primary me-2" onClick={() => navigate("/addAta")}>Add New</button>
                    <button className="btn btn-outline-danger">Close</button>
                </div>
            </div>

            {/* Table */}
            <div className="table-responsive border p-4 rounded shadow bg-card-color">
                <div className='row my-2'>
                    <h6 className="btn-bg-color text-white p-2 mx-2 btn-border1">Advanced Search</h6>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 col-xxl-1'>
                        <Form.Group >
                            <label className='mt-3 fw-bold'>Part No</label>
                        </Form.Group>
                        <Form.Group >
                            <label className='mt-3 fw-bold'>Description</label>
                        </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                        <Form.Group className='mt-2'>
                            <input type="text" name='partNo' className='form-control input-border' placeholder="Search Here" />
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <input type="text" name='description' className='form-control input-border' placeholder="Search Here" />
                        </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 col-xxl-1'>
                        <Form.Group >
                            <label className='mt-3 fw-bold'>Category</label>
                        </Form.Group>
                        <Form.Group >
                            <label className='mt-3 fw-bold'>Unit</label>
                        </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                        <Form.Group className='mt-2'>
                            <input type="text" name='category' className='form-control input-border' placeholder="Search Here" />
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <input type="text" name='unit' className='form-control input-border' placeholder="Search Here" />
                        </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 col-xxl-1'>
                        <Form.Group >
                            <label className='mt-3 fw-bold'>location</label>
                        </Form.Group>
                        <Form.Group >
                            <label className='mt-3 fw-bold'>Serialized Status</label>
                        </Form.Group>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                        <Form.Group className='mt-2'>
                            <input type="text" name='location' className='form-control input-border' placeholder="Search Here" />
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <input type="text" name='status' className='form-control input-border' placeholder="Search Here" />
                        </Form.Group>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        {/* Search Bar */}
                        <input 
                            type="text" hidden
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
                            <th>Part No</th>
                            <th>Description</th>
                            <th>Part Type</th>
                            <th>Location</th>
                            <th>Min Stock Level</th>
                            <th>Rate</th>
                            <th>Unit</th>
                            <th>Category</th>
                            <th>Serialized Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentVendors.length > 0 ? (
                            currentVendors.map((vendor, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-primary text-white border p-2 rounded" : "bg-light"}>
                                    <td>{vendor.vendor}</td>
                                    <td>{vendor.code}</td>
                                    <td>{vendor.vendor}</td>
                                    <td>{vendor.code}</td>
                                    <td>{vendor.vendor}</td>
                                    <td>{vendor.code}</td>
                                    <td>{vendor.vendor}</td>
                                    <td>{vendor.code}</td>
                                    <td><input type='checkbox' name='status' /></td>
                                    <td>
                                        <div className='d-flex justify-content-center'>
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
                                <td colSpan="3" className="text-center text-danger">No Records Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="d-flex justify-content-between mt-3">
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
                </div>
            </div>
        </div>
    );
}

export default Part;
