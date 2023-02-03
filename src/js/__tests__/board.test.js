import { expect, test } from '@jest/globals';
import board from '../board';

test('test board change', () => {
  document.body.innerHTML = '<div class="container"></div>';
  board(4);
  const cells = document.getElementsByClassName('cell');
  expect(cells.length).toBe(16);
  expect(document.querySelector('.board')).toBeTruthy();
});
