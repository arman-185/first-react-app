import { use } from "react"
import Post from "./post";

export default function Posts({ postsPromise }) {
    const posts = use(postsPromise)
    console.log(postsPromise)
    return (
        <div className="cards">
            <h2>All Post Are Here: {posts.length}</h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}