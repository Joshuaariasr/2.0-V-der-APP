import React from 'react'

const VirtualKeyboard = ({ onKeyPress, onBackspace, onSpace }) => {
  const keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ]

  const handleKeyClick = (key) => {
    if (onKeyPress) {
      onKeyPress(key)
    }
  }

  const handleBackspace = () => {
    if (onBackspace) {
      onBackspace()
    }
  }

  const handleSpace = () => {
    if (onSpace) {
      onSpace()
    }
  }

  return (
    <div className="virtual-keyboard">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              className="keyboard-key"
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      
      {/* Sista raden med mellanslag och backspace */}
      <div className="keyboard-row">
        <button
          className="keyboard-key space"
          onClick={handleSpace}
        >
          Mellanslag
        </button>
        <button
          className="keyboard-key backspace"
          onClick={handleBackspace}
        >
          ⌫
        </button>
      </div>
    </div>
  )
}

export default VirtualKeyboard
