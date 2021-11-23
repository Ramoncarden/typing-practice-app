import { useState, useEffect } from 'react';

const useKeyPress = (callback) => {
  const [keyPressed, setKeyPressed] = useState();

  useEffect(() => {
    // capture down stroke
    const downHandler = ({ key }) => {
      if (keyPressed !== key && key.length === 1) {
        setKeyPressed(key);
        callback && callback(key);
      }
    };
    // discard previously captured key when upstroke completes
    const upHandler = () => {
      setKeyPressed(null);
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });
  return keyPressed;
};

export default useKeyPress;
