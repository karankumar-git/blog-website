import React from 'react'
import {Link} from "react-router-dom"
const Card = ({blogs,handleDelete}) => {
    // const blogs = props.blogs;
    // console.log(blogs);
    // const [head, setHead] = useState("New Header");
    return (
        <div>
            {blogs.map((blog) => (
                <div className="card" key={blog.id} style={{ margin: "30px 100px" }}>
                    <Link className="card-header" to={"blog/" + blog.id}>
                        <h5 >{blog.title}</h5>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{blog.subtitle}</h5>
                        <p className="card-text">{blog.summary}</p>
                        <a onClick={() => handleDelete(blog.id)}className="btn btn-primary">Delete</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card