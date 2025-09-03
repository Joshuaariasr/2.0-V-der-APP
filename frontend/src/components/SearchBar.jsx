import React, { useState } from 'react'

const SearchBar = ({ onSearch, loading }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onSearch(inputValue.trim())
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Sök stad..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={loading}
        className="search-input"
      />
      <button 
        type="submit" 
        disabled={loading || !inputValue.trim()}
        className="search-button"
      >
        {loading ? 'Söker...' : 'Sök'}
      </button>
    </form>
  )
}

export default SearchBar
