import React, { useEffect, useState } from 'react'


function Admin() {
    const [categories, setCategories] = useState([]);

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
    return (
        <div className="container" id='home'>
            <h2 className="my-4">Category List</h2>
            <table className="table table-striped table-dark table-responsive-sm table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Sequence</th>
                        <th>Created Date</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin