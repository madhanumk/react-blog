import React from 'react';
import { useSearchParams } from 'react-router-dom'
import axios from "axios";
import configData from "../config.json";
import  { useState ,useEffect} from "react";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";

function Search() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState([]);
    console.log(searchParams.get('title'));
   

    useEffect(() => {     
        axios.get(configData.SERVER_URL+'search/'+searchParams+'/')
            .then(response => {
            //setBlog(response.data.blog);
            //setRelatedBlogs(response.data.related_blogs);      
            })
            .catch((error) => { // error is handled in catch block
                if (error.response) { // status code out of the range of 2xx
                  setError( error.response.status);                  
                } else if (error.request) { // The request was made but no response was received                  
                  setError(error.request);
                } else {// Error on setting up the request
                  setError(error.message);
                }
              });
    },[]);



    if (blogs.length > 0){
        return(
            <div className='row'>
                   <div className="col-lg-8 ">     
                        <h1>{blogs.title}</h1>
                        <div className="vcard mb-1">                
                            <span className="date-read"> {blogs.post_date}, {blogs.read_time} min read <span class="icon-star2"></span></span>
                        </div>
                
                        <p className="mb-1">
                            <img src={blogs.thumbnail_url} alt={blogs.title} class="img-fluid card"/>                    
                        </p> 
    
                        <div className="mb-1">
                            <p>{parse(''+blogs.content)}</p>
                        </div>          
                    </div>          
                   
            </div>  
         
          )

    }
    else{
        return(
            <div className='row'>
                <div className="col-lg-12 text-center"> 
                     <h3>Comming Soon</h3>
                </div>
               

            </div>
        )
    }
     

                        
 
  }

  export default Search;
