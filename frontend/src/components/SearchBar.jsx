import React, { useState } from 'react'
import VirtualKeyboard from './VirtualKeyboard'

const SearchBar = ({ onSearch, loading }) => {
  const [inputValue, setInputValue] = useState('')
  const [showKeyboard, setShowKeyboard] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onSearch(inputValue.trim())
    }
  }

  const handleKeyPress = (key) => {
    setInputValue(prev => prev + key)
  }

  const handleBackspace = () => {
    setInputValue(prev => prev.slice(0, -1))
  }

  const handleSpace = () => {
    setInputValue(prev => prev + ' ')
  }

  const toggleKeyboard = () => {
    setShowKeyboard(!showKeyboard)
  }

  return (
    <div className="search-container">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sök stad..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setShowKeyboard(true)}
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
      
      {/* Knapp för att visa/dölja tangentbord (endast synlig på mobil) */}
      <button 
        className="keyboard-toggle"
        onClick={toggleKeyboard}
        type="button"
      >
        {showKeyboard ? 'Dölj tangentbord' : 'Visa tangentbord'}
      </button>
      
      {/* Virtual Keyboard - visas endast på mobil */}
      {showKeyboard && <VirtualKeyboard 
        onKeyPress={handleKeyPress}
        onBackspace={handleBackspace}
        onSpace={handleSpace}
      />}
    </div>
  )
}

export default SearchBar
