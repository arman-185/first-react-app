import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const handelSingles = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handelFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns)
    }
    const handelSix = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns);
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            { runs > 50 && <p>Congratulation!! Your Score is 50.🤯</p>
            }
            <h1 >Score : {runs}</h1>
            <button onClick={handelSingles}>Singles</button>
            <button onClick={handelFour}>Four</button>
            <button onClick={handelSix}>Six</button>
        </div>
    )
}