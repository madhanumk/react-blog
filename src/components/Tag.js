import React from 'react';
import axios from "axios";
import configData from "../config.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Tag() {
  const [tags, setData] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    axios.get(configData.SERVER_URL + "tag/")
      .then(response => {
        setData(response.data);
      })
      .catch((error) => { // error is handled in catch block
        if (error.response) { // status code out of the range of 2xx
          setError(error.response.status);
        } else if (error.request) { // The request was made but no response was received                  
          setError(error.request);
        } else {// Error on setting up the request
          setError(error.message);
        }
      });

  }, []);

  if (tags.length !== 0) {

    return (
      <div className="row">
        <div className="col-lg-9">
          <div className="section-title">
            <span className="caption d-block ">Tags</span>
            {tags.map((dataObj, index) => {
              return (
                <div>
                  <h2><Link to={'/tag/' + dataObj.name} className='capitalize'>{dataObj.name} ({dataObj.blog_count})</Link></h2>  <hr></hr>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    );

  }

  else if (error.length !== 0) {
    return (
      <div className='row'>
        <div className="col-lg-12 text-center">
          <h3>{error}</h3>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='row'>
        <div className="col-lg-12 mt-2">
          <h3>Loading..!</h3>
        </div>
      </div>
    )

  }

}
export default Tag;
