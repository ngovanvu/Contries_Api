import React, { useState } from 'react'

const SearchInput = ({onSearch}) => {
    const [input, setInput] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        onSearch(input)
    }

  return (
      <div>
        <form onSubmit={submitHandler} >
      <input type= 'text'  placeholder='Search a country.....'
        value={input} onChange = {(e) => setInput(e.target.value)}
      />
      </form>
      </div>
      
  )
}

export default SearchInput
