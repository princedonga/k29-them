import React, { useState } from 'react';

function Upload() { 
    const [img, setImg] = useState('');

    function handleImageChange(e) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImg(reader.result);
        };
        reader.onerror = (error) => {
            console.log(error);
        };
    }

    function api() {
        fetch('https://www.demo603.amrithaa.com/camdell/appapi/uploadimage.php', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                // userid: id
                base64: img
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error('Error:', error));
    }

    return (
        <div>
            <input type='file' className='form-control' accept='image/*' onChange={handleImageChange} />
            {img && (
                <img src={img} width="10%" height="100%" alt='' />
            )}
            <button onClick={api}>Submit</button>
        </div>
    );
}

export default Upload;
