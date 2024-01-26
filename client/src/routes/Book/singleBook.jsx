import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function singleBook() {
    const baseUrl = "http://localhost:8000/api/books";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(`${baseUrl}${urlSlug.slug}`);
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
    <div>singleBook</div>
  )
}

export default singleBook;