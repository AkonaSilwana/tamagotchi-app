import React, { useState } from 'react';
import './speechBubble.css';

function SpeechBubble() {
  const [inputText, setInputText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    // do something with the inputText, e.g. submit it to a backend service
    console.log('User input:', inputText);
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted && (
        <div className="speech-bubble">
          <p> Hi my name is: </p>
          <textarea 
            className="speech-bubble__input"
            value={inputText}
            onChange={handleInputChange}
          />
          <div className="speech-bubble__arrow"></div>
           <button onClick={handleButtonClick}>Submit</button> 
        </div>
      )}
      {submitted && <div className="text-display">{inputText}</div>}
    </div>
  );
}

export default SpeechBubble;
