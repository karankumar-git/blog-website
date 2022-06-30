import React from 'react'
import { Link, useParams } from 'react-router-dom';
import useFetch from './Hooks/useFetch';
const Blog = () => {
    const { id } = useParams();
    const { blogs, isPending } = useFetch('http://localhost:8000/blogs/'+id);
    
    console.log(blogs);
    return (
        <>
            {isPending &&
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {
                blogs &&
                <div class="card text-center" style={{margin:"50px"}}>
                    <div class="card-header">
                        {blogs.title}
                    </div>
                    <div class="card-body" >
                        <h5 class="card-title">{blogs.subtitle}</h5>
                        <p class="card-text">{blogs.content}</p>
                        <Link to="/">
                            <p class="btn btn-primary">Back to Home</p>
                        </Link>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            }
        </>
    )
}


export default Blog