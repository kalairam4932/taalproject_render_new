import React, { useState } from 'react';
import './model.css';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { base_url } from '../../../../constant/url';


const Model = () => {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  
  const navigate = useNavigate();

  const { data: modelnamedata, isLoading, refetch } = useQuery({
    queryKey: ["modelnamekey"],
    queryFn: async () => {
      const res = await fetch(`${base_url}/api/aircraft/getmodelname`);
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (deleteId) => {
      await axios.delete(`${base_url}/api/aircraft/dldmodelname/${deleteId}`);
    },
    onSuccess: () => {
      toast.success("Model deleted successfully");
      setShowModal(false);
      refetch();
    },
    onError: (error) => {
      console.error("Delete error:", error);
      toast.error("Error deleting model");
    }
  });

  const handleDelete = () => {
    if (!deleteId) {
      toast.error("No model selected for deletion");
      return;
    }
    deleteMutation.mutate(deleteId);
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 border p-2 rounded shadow bg-card-color card-border">
        <h4 className="text-white fw-bold">Model List</h4>
        <div>
          <button className="btn btn-primary me-2" onClick={() => navigate("/addModel")}>Add New</button>
          <button className="btn btn-outline-danger" onClick={()=>navigate('/')}>Close</button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive border p-4 rounded shadow bg-card-color">
        <div className='row'>
          <div className='col-3'>
            <input type="text" className="form-control mb-3" placeholder="Search Here" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        <table className="text-center w-100">
          <thead>
            <tr>
              <th>Model Name</th>
              <th>Manufacturer Name</th>
              <th>Primary Model</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (<p>Loading....</p>) : (
              modelnamedata?.length > 0 ? (
                modelnamedata.map((vendor, index) => (
                  <tr key={vendor._id} className={index % 2 === 0 ? "bg-primary text-white border p-2 rounded" : "bg-light"}>
                    <td>{vendor.ModelName}</td>
                    <td>{vendor.Manufacturer}</td>
                    <td>{vendor.primary_modal}</td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        <button className="btn btn-light mx-2" onClick={() => navigate(`/updatemodel/${vendor._id}`)}>
                          <i className="bi bi-pencil-square mx-2"></i>
                        </button>
                        <button className="btn btn-light" onClick={() => { setDeleteId(vendor._id); setShowModal(true); }}>
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
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this model?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Model;
