import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;
const BlogDetails = () => {
    const{id}=useParams();
    const{data:blog,isPending,error}=useFetch(`${apiUrl}/getblogs/` + id);
    const history=useHistory();
    const handleClick =()=>{
        fetch(`{apiUrl}/deleteblogs/` +blog._id,{
            method:'DELETE',
        }).then(()=>{
            history.push('/')
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div> Loading . . . . </div>}
            {error && <div> {error} </div>}
            { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
      </div>
     );
}
 
export default BlogDetails;

