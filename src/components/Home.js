import React from 'react';
import axios from "axios";
import configData from "../config.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [blogs, setData] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {

    axios.get(configData.SERVER_URL + "home/")
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

  if (blogs.length !== 0) {
    return (
      <div className="col-lg-9">
        {blogs.map((dataObj, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-4">
                <img className="img-fluid rounded border" src={dataObj.thumbnail_url}
                  alt={dataObj.title} />
              </div>
              <div className="col-8">
                <h2 className="h5"><Link to={'blog/' + dataObj.slug}>{dataObj.title}</Link></h2>

                <div className="post-meta">
                  <span className="d-block"><a>{dataObj.author}</a> in <Link to={'category/' + dataObj.category}>{dataObj.category}</Link></span>
                  <span className="date-read">{dataObj.post_date} <span className="mx-1">•</span> {dataObj.read_time} min read
                  </span>
                </div>
              </div>

              <div className="col-12">
                <hr />
              </div>
            </div>
          );
        })}

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

export default Home;
