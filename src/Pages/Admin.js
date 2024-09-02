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
        <div className="container">
            <ul className="list-group">
                {categories.map(category => (
                    <li className="list-group-item d-flex align-items-center" key={category.id}>
                        <img src={`https://www.demo603.amrithaa.com/camdell/public/images/${category.icon}`} alt={category.name} className="me-3" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                        <span>{category.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Admin