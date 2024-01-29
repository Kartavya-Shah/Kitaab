import React, { useState, useEffect } from "react";
import { Link ,useParams} from "react-router-dom";


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



function StarRating


  return (
    <div>

<Link to ={"/books"}> Books </Link>
 <div className="bookdetails">
    <div className="col-1">
        <img src={`http://localhost:8000/uploads/${data.thumbnail}`}
         alt={data.title} />
    </div>


 </div>
    </div>
  )
}

export default singleBook;