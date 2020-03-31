import { N_SIZE } from './const';
import { contains } from './contains';

export const win = (clicked, turn) => {
  const memberOf = clicked.className.split(/\s+/);
  for (let i = 0; i < memberOf.length; i++) {
    const testClass = '.' + memberOf[i];
    const items = contains('#tictactoe ' + testClass, turn);
    if (items.length == N_SIZE) {
      return true;
    }
  }
  return false;
};
