import React, { useState, useEffect } from 'react';
import TypingBox from './TypingBox';
import { generate } from './utils/words';
import useKeyPress from './hooks/useKeyPress';
import { currentTime } from './utils/time';
import Stats from './Stats';
import Table from './Table';

let initialWords = generate();

function App() {
  // leftPad state keeps current typed character at center of typing line.
  const [leftPad, setLeftPad] = useState(new Array(20).fill(' ').join(''));

  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));
  const [startTime, setStartTime] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [typedChars, setTypedChars] = useState('');
  const [seconds, setSeconds] = useState(60);
  const [active, setIsActive] = useState(false);
  const [saveStats, setSaveStats] = useState(false);

  const resetAll = () => {
    setLeftPad(new Array(20).fill(' ').join(''));
    setOutgoingChars('');
    setCurrentChar(initialWords.charAt(0));
    setIncomingChars(initialWords.substr(1));
    setStartTime(null);
    setWordCount(null);
    setWpm(0);
    setAccuracy(0);
    setTypedChars('');
    setSeconds(60);
    setIsActive(false);
    initialWords = generate();
    setSaveStats(false);
  };

  const saveToLocalStorage = () => {
    const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    localStorage.setItem('date', JSON.stringify(currentDate));
    localStorage.setItem('WPM', JSON.stringify(wpm));
    localStorage.setItem('Accuracy', JSON.stringify(accuracy));
    setSaveStats(true);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('date');
    localStorage.removeItem('WPM');
    localStorage.removeItem('Accuracy');
    resetAll();
  };

  useKeyPress((key) => {
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;

    if (!startTime) {
      setIsActive(true);
      setStartTime(currentTime());
    } else if (seconds === 0) {
      setIsActive(false);
    }

    if (seconds > 0) {
      const updatedTypedChars = typedChars + key;
      setTypedChars(updatedTypedChars);

      if (key === currentChar) {
        if (leftPad.length > 0) {
          setLeftPad(leftPad.substring(1));
        }

        if (incomingChars.charAt(0) === ' ') {
          setWordCount(wordCount + 1);
          const durationInMinutes = (currentTime() - startTime) / 60000.0;

          setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
        }

        updatedOutgoingChars += currentChar;
        setOutgoingChars(updatedOutgoingChars);

        setCurrentChar(incomingChars.charAt(0));

        updatedIncomingChars = incomingChars.substring(1);
        if (updatedIncomingChars.split(' ').length < 10) {
          updatedIncomingChars += ' ' + generate();
        }
        setIncomingChars(updatedIncomingChars);

        setAccuracy(
          (
            (updatedOutgoingChars.length * 100) /
            updatedTypedChars.length
          ).toFixed(2)
        );
      }
    }
  });

  useEffect(() => {
    if (active) {
      seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  }, [seconds, active]);

  return (
    <div className='App font-mono'>
      <TypingBox
        initialWords={initialWords}
        leftPad={leftPad}
        outgoingChars={outgoingChars}
        currentChar={currentChar}
        incomingChars={incomingChars}
        seconds={seconds}
      />
      {seconds === 0 ? (
        <>
          <Stats
            wpm={wpm}
            accuracy={accuracy}
            seconds={seconds}
            resetAll={resetAll}
            saveToLocalStorage={saveToLocalStorage}
          />
          <Table
            clearLocalStorage={clearLocalStorage}
            wpm={wpm}
            accuracy={accuracy}
            saveStats={saveStats}
          />
        </>
      ) : null}
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
