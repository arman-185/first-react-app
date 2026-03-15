
import './App.css'
import Counter from './counter';
import Batsman from './Batsman';
import Users from './Users';
import Posts from './Posts';
import Friends from './Friends';
import { Suspense } from 'react';


const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())

// const fetchFriends = async()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json();
// } 

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}

function App() {

  const postsPromise = fetchPosts();

  function handelClick() {
    alert('I am clicked')
  }

  const handelClick3 = () => {
    alert('cholo bondu gurte jai')
  }

  return (
    <>
      <div>
        <h3>Get started</h3>

        <Suspense fallback={<h3>Post Are Coming.....</h3>}>
          <Posts postsPromise = {postsPromise}></Posts>
        </Suspense>

        {/* <Suspense fallback={<h3>Loading...</h3>}>
          <Users fetchUsers={fetchUsers}></Users>
        </Suspense> */}



        {/* <Suspense fallback= {<h3>Friends are coming for ...</h3>}>
          
        </Suspense> */}
        {/* <Batsman></Batsman> */}

        {/* <Counter></Counter> */}

        {/* <button >Click Me</button><br /> */}
        {/* <button onClick={handelClick}>Click Me</button><br /><br /> */}
        {/* <button onClick={handelClick3}>Click Me 3</button><br /><br /> */}
        {/* <button onClick={function handelClick2() {
          alert('What the hack?')
        }}>Click Me 2</button><br /><br /> */}

        {/* <button onClick={() => alert('I am clcik 4')}>Clcik Me 4</button> */}

      </div>
    </>
  )
}

export default App
