import TypingBox from './TypingBox';
import { generate } from './utils/words';

function App() {
  const initialWords = generate();
  console.log(initialWords);

  return (
    <div className='App'>
      <TypingBox initialWords={initialWords} />
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
