import React, { useState } from 'react';
import './speechBubble.css';

const SpeechBubble = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="speech-bubble">
      <p> 
        Hi my name is:
        </p>
      <textarea 
        className="speech-bubble__input"
        value={inputText}
        onChange={handleInputChange}
      />
      
      <div className="speech-bubble__arrow"></div>
      <button onClick={handleInputChange}>Submit</button>
    </div>
  );
};

export default SpeechBubble;