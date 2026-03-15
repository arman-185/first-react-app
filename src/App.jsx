
import './App.css'
import Counter from './counter';
import Batsman from './Batsman';


function App() {

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

        <Batsman></Batsman>
        
        <Counter></Counter>

        {/* <button >Click Me</button><br /> */}
        <button onClick={handelClick}>Click Me</button><br /><br />
        <button onClick={handelClick3}>Click Me 3</button><br /><br />
        <button onClick={function handelClick2() {
          alert('What the hack?')
        }}>Click Me 2</button><br /><br />

        <button onClick={() => alert('I am clcik 4')}>Clcik Me 4</button>

      </div>
    </>
  )
}

export default App
