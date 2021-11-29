import React, { useState } from 'react';
import TypingBox from './TypingBox';
import { generate } from './utils/words';
import useKeyPress from './hooks/useKeyPress';

const initialWords = generate();

function App() {
  // leftPad state keeps current typed character at center of typing line.
  const [leftPad, setLeftPad] = useState(new Array(20).fill(' ').join(''));

  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));

  useKeyPress((key) => {
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;

    if (key === currentChar) {
      if (leftPad.length > 0) {
        setLeftPad(leftPad.substring(1));
      }

      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);

      setCurrentChar(incomingChars.charAt(0));

      updatedIncomingChars = incomingChars.substring(1);
      if (updatedIncomingChars.split(' ').length < 10) {
        updatedIncomingChars += ' ' + generate();
      }
      setIncomingChars(updatedIncomingChars);
    }
  });

  return (
    <div className='App font-mono'>
      <TypingBox
        initialWords={initialWords}
        leftPad={leftPad}
        outgoingChars={outgoingChars}
        currentChar={currentChar}
        incomingChars={incomingChars}
      />
    </div>
  );
}

export default App;

/* 📔 User Stories
1. User can click a 'Start Practice' button to start the practice session.
2. When a practice session starts, the timer starts increasing
3. User is shown a word
4. User can type the word in a text input box
5. If a user enters an incorrect letter, the text input box is cleared
6. If a user enters all letters correctly, then the text input box is cleared and a new word is shown
7. User can click "End Practice" button to end the session.
8. When the session ends, the typing speed is shown (words per minute)

⭐ Bonus features (optional)
1. Text box is not cleared when a wrong letter is typed instead  as the user is writing the word, the correct letters are marked  as green and the incorrect letters are marked as red
2. User can see their statistics across multiple sessions
3. Users can login and see how their score compared with others (leaderboard)
4. Users can compete with others */
