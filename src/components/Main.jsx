import React,{useState} from 'react'
import Card from './Main/Card'
import useFetch from './Hooks/useFetch'
const Main = () => {
    const [carddata, setCarddata] = useState([
        {
            id:1,
            title: "New Title",
            subtitle: "New Subtitle",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quod ab non nihil dolore, ut odit tempore minus iure blanditiis aliquid placeat architecto facilis et quaerat veritatis voluptates numquam nostrum."
        },
        {
            id: 2,
            title: "Day1",
            subtitle: "home to day doh no to live",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quod ab non nihil dolore, ut odit tempore minus iure blanditiis aliquid placeat architecto facilis et quaerat veritatis voluptates numquam nostrum."
        },
        {
            id: 3,
            title: "Day1",
            subtitle: "home to day doh no to live",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quod ab non nihil dolore, ut odit tempore minus iure blanditiis aliquid placeat architecto facilis et quaerat veritatis voluptates numquam nostrum."
        }
    ])

    const handleDelete = (id) => {
        const newCarddata = carddata.filter(blog => blog.id !== id);
        setCarddata(newCarddata);
    }

    const [name, setName] = useState("Mario")
    // const handleName = () => {
    //     setName("karan");
    // }

    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIspending] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogs')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setBlogs(data);
    //             setIspending(false);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    //     }, 1000);
    //     // console.log("runn once"); 
    // },[]);

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
            {(!isPending) && <Card blogs={blogs} handleDelete={handleDelete} />  }
            <button onClick={()=>setName("karan")}>Name change</button>
            <p>{name}</p>
        </>
    )
}

export default Main