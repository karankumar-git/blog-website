import React,{useState} from 'react'
import {Link} from "react-router-dom"
const Card = ({ blogs }) => {
    // Likes feature pending
    return (
        <div style={{minWidth:"200px",maxWidth:"70vw"}}>
            {blogs.map((blog) => (
                <div className="card" key={blog.id} style={{ margin: "30px 100px"}}>
                    <Link className="card-header" to={"blog/" + blog.id}>
                        <h5 >{blog.title}</h5>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{blog.subtitle}</h5>
                        <p className="card-text">{blog.summary}</p>
                        <a
                            onClick
                            className="btn btn-primary"
                        >
                            {blog.likes} likes
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card