import React, { useState } from 'react'

export const SearchBar = ({ setResults }) => {

    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            const result = data.filter((user) => {
                return (
                    value && user && user.name && user.name.toLowerCase().includes(value)
                );
            });

            setResults(result);
        })
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

  return (
    <>
    <div className="input-wrapper">
        <div className="logo"><i className='fas fa-magnifying-glass'></i></div>
        <input 
        type="text" 
        placeholder='Type to search...' 
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        />
    </div>
    </>
  )
}
