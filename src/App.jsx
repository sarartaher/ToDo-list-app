import React, {useEffect, useState} from 'react';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {console.log(tasks)}, [tasks]);

    function handleAdd(e) {
        e.preventDefault();
        if (input.trim() === "") return;
        setTasks([...tasks, input] );
        setInput("");
    }
    function handleRemove(index) {

        const updatedTasks =tasks.filter((_,i)=>i!==index);
        setTasks(updatedTasks);
    }
    return (
        <>
            <h1 className='text-center text-5xl my-4'>ToDO List </h1>
            <form onSubmit={handleAdd} className= 'flex justify-center gap-2'>
                <input value={input} className='border p-2' placeholder="Enter a Task" onChange={(e)=>setInput(e.target.value)}/>
                <button type="submit" className='bg-blue-500 text-white px-4 rounded' onClick={handleAdd}>Add</button>
            </form>
            <ol className='mt-4 mx-auto border-2 rounded-2xl p-8'>
                {tasks.map((task, index) => (
                <li className='px-6 my-3 text-2xl' key={index}>
                    {index + 1}. {task}
                    <button className='bg-red-500 text-white px-2 rounded mx-4' onClick={()=>handleRemove(index)}>Remove</button>
                </li>))}
            </ol>
        </>
    );
};

export default App;