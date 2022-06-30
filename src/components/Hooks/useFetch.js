import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIspending] = useState(true);
  useEffect(() => {
      setTimeout(() => {
          fetch(url)
          .then(res => {
              return res.json();
          })
          .then(data => {
              setBlogs(data);
              setIspending(false);
          })
          .catch(err => {
              console.log(err);
          })
      }, 1000);
  },[url]);

  return { blogs, isPending};
}
 
export default useFetch;