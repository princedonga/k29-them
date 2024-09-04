import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function Admin() {
    const [categories, setCategories] = useState([]);
    const [editModalShow, setEditModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [image, setImage] = useState(null);
    const [newImageUrl, setNewImageUrl] = useState('');

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
        setCategories(categories.filter(category => category.id !== selectedCategory.id));
        setDeleteModalShow(false);
    };

    const handleEditConfirm = async () => {
        try {
            let updatedCategory = {
                name: editedName,
                icon: selectedCategory.icon
            };

            if (image) {
                const response = await fetch('https://www.demo603.amrithaa.com/camdell/appapi/uploadimage.php', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify({
                        base64: image
                    })
                });

                const data = await response.json();
                console.log(data);

                if (data.success) {

                    const imageUrl = `https://www.demo603.amrithaa.com/camdell/public/${data.data}`;

                    updatedCategory.icon = imageUrl;
                    
                    setNewImageUrl(imageUrl);
                } else {
                    console.error('Image upload failed:', data.message);
                }
            }

            const updatedCategories = categories.map(category =>
                category.id === selectedCategory.id ? { ...category, ...updatedCategory } : category
            );

            setCategories(updatedCategories);

            setEditModalShow(false);

            setImage(null);

        } catch (error) {
            console.error('Error processing request:', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            setImage(reader.result);
        };

        reader.onerror = (error) => {
            console.log(error);
        };
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
                                    {selectedCategory && selectedCategory.id === category.id && newImageUrl ? (
                                        <img
                                            src={newImageUrl}
                                            alt={category.name}
                                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <img
                                            src={`https://www.demo603.amrithaa.com/camdell/public/images/${category.icon}`}
                                            alt={category.name}
                                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                        />
                                    )}
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
