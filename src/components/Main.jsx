import React from 'react'
import Card from './Main/Card'
import useFetch from './Hooks/useFetch'
const Main = () => {
    const { blogs, isPending } = useFetch('http://localhost:8000/blogs');
    return (
        <>
            {isPending &&
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {(!isPending) && <Card blogs={blogs}/> }
        </>
    )
}

export default Main