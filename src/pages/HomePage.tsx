import { useState } from "react"
import axios from "axios"
import "./HomePage.css"

export function HomePage() {
    const[num1, setNum1] = useState("")
    const[num2, setNum2] = useState("")
    const [result, setResult] = useState("")


    async function handleAdd() {
        try {
            const response = await axios.post (
                import.meta.env.VITE_API_URL,
                {
                    num1: num1,
                    num2: num2,
                    math: "+"
                }
            )
            setResult(response.data.body)
        } catch (error) {
            console.log(error)
            setResult("API Error")
        }
    }
    
    
    return (
        <>
        <div className="main">
            <input
            type = "number"
            placeholder="Number 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            />
            

            <input
            value = {num2}
            placeholder="Number 2"
            onChange={(e) => setNum2(e.target.value)}
            type = "number"
            />
            <button onClick={handleAdd}>
                Get Result
            </button>

            <h2>Result: {result}</h2>
        </div>
        </>
    )
}