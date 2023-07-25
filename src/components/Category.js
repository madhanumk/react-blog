import React from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import configData from "../config.json";
import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Category() {
  

  const [categories, setData] = useState([]);

  useEffect(() => {
      
    axios.get(configData.SERVER_URL+"category/")
            .then(response => {
              setData(response.data);
              console.log(response.data);                
            })

          },[]);

      return (
        <div className="row">
            <div className="col-lg-9">
                <div className="section-title">
                    <span className="caption d-block ">Categories</span>

                        {categories.map((dataObj, index) => {
                            return (
                                <div>
                                    <h2><Link to={'/category/'+dataObj.name} className='capitalize'>{dataObj.name} ({dataObj.blog_count})</Link></h2>  <hr></hr>
                                </div>
                                
                                
                                                       
                                );
                        })}  

                    


                </div>
            </div>
            <div className="col-lg-3"></div>
        </div>
        );
 
  }

  export default Category;
