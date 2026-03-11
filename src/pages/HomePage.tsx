import { useState } from "react";
import axios from "axios";
import "./HomePage.css";

export function HomePage() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [math, setMath] = useState("");
  const [result, setResult] = useState("");

  async function handleAdd() {
    try {
      const response = await axios.post(import.meta.env.VITE_API_URL, {
        num1: num1,
        num2: num2,
        math: math,
      });
      setResult(response.data.body);
    } catch (error) {
      console.log(error);
      setResult("API Error");
    }
  }

  return (
    <>
      <title>AWS Calculator</title>
      <div className="main-title">
        <div>AWS Calclator</div>
      </div>

      <div className="main">
        <div className="input-boxes-container">
          <input
            className="input-box"
            type="number"
            placeholder="Number 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />

          <select
            className="input-box"
            value={math}
            onChange={(e) => setMath(e.target.value)}
          >
            <option>+</option>
            <option>-</option>
            <option>/</option>
            <option>*</option>
          </select>

          <input
            className="input-box"
            value={num2}
            placeholder="Number 2"
            onChange={(e) => setNum2(e.target.value)}
            type="number"
          />
        </div>

        <div className="get-result-button-container">
          <button className="get-result-button" onClick={handleAdd}>
            Get Result
          </button>
        </div>

        <div className="result-container">
          <h2>Result: {result}</h2>
        </div>
      </div>
    </>
  );
}
