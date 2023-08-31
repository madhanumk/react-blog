import React from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import configData from "../config.json";
import { useState, useEffect } from "react";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";

function Blog() {
    const blogSlug = useParams();
    const [blog, setBlog] = useState([]);
    const [error, setError] = useState([]);
    const [relatedBlogs, setRelatedBlogs] = useState([]);


    useEffect(() => {
        axios.get(configData.SERVER_URL + 'blog/' + blogSlug.blogSlug + '/')
            .then(response => {
                setBlog(response.data.blog);
                setRelatedBlogs(response.data.related_blogs);
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
    }, [blogSlug]);


    if (blog && relatedBlogs.length !== 0) {
        return (
            <div className='row'>
                <div className="col-lg-8 ">
                    <h1>{blog.title}</h1>
                    <div className="vcard mb-1">
                        <span className="date-read"> {blog.post_date}, {blog.read_time} min read <span class="icon-star2"></span></span>
                    </div>
                    <p className="mb-1">
                        <img src={blog.thumbnail_url} alt={blog.title} class="img-fluid card" />
                    </p>
                    <div className="mb-1">
                        <p>{parse('' + blog.content)}</p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="section-title">
                        <h2>Related Posts</h2>
                    </div>
                    {relatedBlogs.map((dataObj, index) => {
                        return (
                            <div class="trend-entry d-flex">
                                <div class="number align-self-start">{index + 1}</div>
                                <div class="trend-contents">
                                    <h2><Link to={'/blog/' + dataObj.slug}>{dataObj.title}</Link></h2>
                                    <div class="post-meta">
                                        <span class="date-read">{dataObj.post_date} minutes <span class="mx-1">&bullet;</span> {dataObj.read_time} min read <span class="icon-star2"></span></span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )

    }
    else if (blog.length !== 0) {
        return (
            <div className='row'>
                <div className="col-lg-12 ">
                    <h1>{blog.title}</h1>
                    <div className="vcard mb-1">
                        <span className="date-read"> {blog.post_date}, {blog.read_time} min read <span class="icon-star2"></span></span>
                    </div>
                    <p className="mb-1">
                        <img src={blog.thumbnail_url} alt={blog.title} class="img-fluid card" />
                    </p>
                    <div className="mb-1">
                        <p>{parse('' + blog.content)}</p>
                    </div>
                </div>
            </div>
        )
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
export default Blog;
