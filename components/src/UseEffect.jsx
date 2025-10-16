import { useState, useEffect } from "react"

// 1. useEffect(() => {})  // Runs after every re-render
// 2. useEffect(() => {}, [])  // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');

    useEffect (() => {
        document.title = `Count: ${count} ${color}`
    }, [count, color])

    function addCount () {
        setCount (count => count + 1);
    }

    function subtractCount () {
        setCount (count => count - 1);
    }

    function changeColor () {
        setColor (c => c === 'green' ? 'red' : 'green')
    }

    return (
        <div className="flex-row justify-center gap-5 text-center mt-17">
            <p className="text-3xl mb-5" style={{color: color}}>count: {count}</p>
            <button onClick={addCount} className="w-auto text-2xl bg-blue-500 mb-4 px-9 py-4 rounded-sm">Add</button>

            <button onClick={subtractCount} className="w-auto text-2xl bg-red-600 ml-3 mb-4 px-9 py-4 rounded-sm">Subtract</button> <br />

            <button onClick={changeColor} className="w-auto text-2xl bg-cyan-600 px-9 py-4 rounded-sm">Subtract</button>
        </div>
    )
}

export default UseEffect