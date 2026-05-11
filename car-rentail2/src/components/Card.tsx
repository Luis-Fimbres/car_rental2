import { useState } from "react"

export default function Card(){
    //Reacts Hooks
    var cont:number=10
    const [counter, setCounter] = useState(10)

    const increment = () => {
        cont++
        console.log("Hello" + cont)
        setCounter(counter+1)
    }

    return (
    <>
        <h1>Card {counter}</h1>
        <button onClick={increment}>TEST</button>
    </>
    )
}