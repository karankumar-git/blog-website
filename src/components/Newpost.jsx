import React, { useState } from 'react';
const Newpost = () => {
  const formStyle = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" };
  const labelStyle = { margin: "10px 3px" };

  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [subtitle, setsubtitle] = useState("");
  const [ispending, setIspending] = useState(false);


  const handlesubmit = (e) => {
    e.preventDefault();
    setIspending(true);
    const blog = {
      title,
      content,
      subtitle,
      summary: content.substring(0, 40),
      likes: 0
    }

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("new blog added");
      setIspending(false);
    })
  }

  return (
    <div className='create'>
      <form onSubmit={handlesubmit} style={formStyle}>
        <label style={labelStyle}>Blog Title
          <input
            type="text"
            required
            style={{ width: "50vw", minWidth: "200px", display: "block" }}
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </label>
        <label style={labelStyle}>Blog Content
          <textarea
            rows="10"
            required
            style={{ width: "50vw", minWidth: "200px", display:"block"}}
            value={content}
            onChange={(e) => setcontent(e.target.value)}
          />
        </label>
        <label style={labelStyle}>
          Blog Subtitle
          <input
            type="text"
            required
            style={{ width: "50vw", minWidth: "200px", display: "block" }}
            value={subtitle}
            onChange={(e) => setsubtitle(e.target.value)}
          />
        </label>
        
        {ispending &&
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }
        {(!ispending) && <button type='submit'>Submit</button> }
      </form>
    </div>
  );
}

export default Newpost
