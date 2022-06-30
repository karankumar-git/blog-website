import React,{useState} from 'react'

const Newpost = () => {
  const { blogtitle,setBlogtitle } = useState("dummy");
  const { subtitle, setSubtitle } = useState(null);
  const { blog, setBlog } = useState(null);


  const handletitle = (x) => {
    setBlogtitle(x);
  }
  // const blogdata = {
  //   title: title,
  //   subtitle: subtitle,
  //   blog: blog
  // }

  return (
    <div>
      <form action="" style={{margin:"5% 20%", padding:"0 10%"}}>
      <div className="input input-group-lg" style={{margin:"15px 0"}}>
        <label htmlFor='title'>Title</label>
          <input type="text" id='title' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
          value={blogtitle}
          onChange={(e) => handletitle(e.target.value)}
          />
        <label htmlFor='subtitle'>Subtitle</label>
          <input type="text" id='subtitle' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
          onChange={(e)=>{setSubtitle(e.target.value)}}
          />
      </div>
      <div className="input" style={{margin:"15px 0"}}>
        <label htmlFor='blog'>Blog</label>
        <textarea className="form-control" aria-label="With textarea" id='blog' onChange={(e)=>{setBlog(e.target.value)}}></textarea>
      </div> 
        <button type="button" style={{margin:"15px 0"}} className="d-grid gap-2 col-3 mx-auto btn btn-primary btn-md">Large button</button>  
      </form>
      <p>{blogtitle}</p>
    </div>
  )
}

export default Newpost