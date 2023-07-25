import React from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import configData from "../config.json";
import  { useState ,useEffect} from "react";
import parse from 'html-react-parser';
import Category from './Category';
import { Link } from "react-router-dom";





function CategoryFilter() {

  
    let { categorySlug } = useParams();
    const [blogs, setData] = useState([]);


    useEffect(() => {
        axios.get(configData.SERVER_URL+'category/'+categorySlug+'/')
                .then(response => {
                    console.log(response.data);
              
                    setData(response.data);
                    
                    
                })
    
            },[]);
  


    
       

            return (
                <div className="col-lg-9">
                  {blogs.map((dataObj, index) => {
                            return (                                  
                                <div className="row" key={index}>
                                 <div className="col-4">
                                  <img className="img-fluid rounded border" src={dataObj.thumbnail_url}
                                    alt={dataObj.title}/>
                                </div>
                                <div className="col-8">
                                  <h2 className="h5"><Link to={'/blog/'+dataObj.slug}>{dataObj.title}</Link></h2>
        
                                    <div className="post-meta">
                                      <span className="d-block"><a href="#">{dataObj.author}</a> in <a href="/category/whatsapp">{dataObj.category}</a></span>
                                      <span className="date-read">{dataObj.post_date} <span className="mx-1">•</span> {dataObj.read_time} min read
                                      </span>
                                    </div>
                                </div>
        
                                <div className="col-12">
                                  <hr/>
                                </div>
        
        
        
        
        
                              </div>
        
        
                            );
                          })}
        
        
        
        
        
                  </div>
        
                   );

  

                        
 
  }

  export default CategoryFilter;
