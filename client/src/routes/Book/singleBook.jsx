import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function singleBook() {
   
    const [data, setData] = useState([]);
    const urlSlug= useParams(); 
    const baseUrl = `http://localhost:8000/api/books/${urlSlug.slug}`;

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(baseUrl);
                if (!response.ok) {
                    throw new Error("Failed to fetch data.")
                }
                const jsonData = await response.json();
                setData(jsonData);
             
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);






  return (
    <div>
        <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}

export default singleBook;