import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

function Admin() {
    const [categories, setCategories] = useState([]);
    const [editModalShow, setEditModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [image, setImage] = useState(null); // Use null instead of '' for file object

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.demo603.amrithaa.com/camdell/public/api/getcategory');
                const result = await response.json();
                if (result.success) {
                    setCategories(result.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleEdit = (category) => {
        setSelectedCategory(category);
        setEditedName(category.name);
        setEditModalShow(true);
    };

    const handleDelete = (category) => {
        setSelectedCategory(category);
        setDeleteModalShow(true);
    };

    const handleDeleteConfirm = () => {
        // Remove item from frontend
        setCategories(categories.filter(category => category.id !== selectedCategory.id));
        setDeleteModalShow(false);
    };

    const handleEditConfirm = async () => {
        try {
            const formData = new FormData();
            formData.append('name', editedName);
    
            if (image) {
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onloadend = async () => {
                    const base64String = reader.result.split(',')[1]; // Remove the data:image/jpeg;base64, part
                    formData.append('base64', base64String);
    
                    // Send the API request with the Base64 image
                    const response = await axios.post('https://www.demo603.amrithaa.com/camdell/appapi/uploadimage.php', formData);
    
                    // Log the response to debug
                    console.log('API Response:', response);
    
                    // Update categories state
                    const updatedCategories = categories.map(category =>
                        category.id === selectedCategory.id
                            ? { ...category, name: editedName, icon: image.name } 
                            : category
                    );
                    setCategories(updatedCategories);
                    setEditModalShow(false);
                    console.log('Updated Categories:', updatedCategories);
                };
            } else {
                // If no image, still proceed with the update
                const response = await axios.post('https://www.demo603.amrithaa.com/camdell/appapi/uploadimage.php', formData);
                console.log('API Response:', response);
    
                // Update categories state
                const updatedCategories = categories.map(category =>
                    category.id === selectedCategory.id
                        ? { ...category, name: editedName } 
                        : category
                );
                setCategories(updatedCategories);
                setEditModalShow(false);
                console.log('Updated Categories:', updatedCategories);
            }
            
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };
    
    



    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    return (
        <div className='overflow'>
            <div className="container" id='home'>
                <h2 className="my-4">Category List</h2>
                <table className="table table-striped table-dark table-responsive-sm table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Sequence</th>
                            <th>Created Date</th>
                            <th className='px-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(category => (
                            <tr key={category.id}>
                                <td>{category.name}</td>
                                <td>
                                    <img
                                        src={`https://www.demo603.amrithaa.com/camdell/public/images/${category.icon}`}
                                        alt={category.name}
                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                    />
                                </td>
                                <td className='px-4'>{category.sequence}</td>
                                <td>{new Date(category.created_date).toLocaleDateString()}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        size="sm"
                                        className="mx-2"
                                        onClick={() => handleEdit(category)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDelete(category)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Edit Modal */}
            <Modal show={editModalShow} onHide={() => setEditModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formCategoryName">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formCategoryImage">
                            <Form.Label>Category Image</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setEditModalShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleEditConfirm}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal show={deleteModalShow} onHide={() => setDeleteModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this category?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setDeleteModalShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteConfirm}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Admin;
