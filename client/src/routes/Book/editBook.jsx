import React,{useState,useEffect} from 'react';
import {Link,useNavigate,useParams} from 'react-router-dom';
import NoImageSelected from "../../assets/no-image-selcted.jpg";

function editBook  () {

    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [stars, setStars] = useState(0);
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);
    const [submitted, setSubmitted] = useState("");
    const [image, setImage] = useState(NoImageSelected)

  return (
    <div>
   

    </div>
  )
}

export default editBook;