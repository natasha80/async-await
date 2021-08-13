/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
import GameSavingLoader from './GameSavingLoader';

(async () => {
  // Your code here with await
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch (error) {
    console.log(error);
  }
})();