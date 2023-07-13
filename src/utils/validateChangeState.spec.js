import { changeState } from './validation.js';

describe('changeState', () => {
  test('state와 nextState가 다를 때', () => {
    expect(changeState(1, 2)).toBe(true);
  });

  test('state와 nextState가 같을 때', () => {
    expect(changeState(1, 1)).toBe(false);
  });

  test('배열: state와 nextState가 다를 때', () => {
    expect(changeState([1, 'string', true], [1, 'number', false])).toBe(true);
  });

  test('배열: state와 nextState가 같을 때', () => {
    expect(changeState([1, 'string', true], [1, 'string', true])).toBe(false);
  });

  test('객체: state와 nextState가 다를 때', () => {
    expect(
      changeState(
        {
          id: '1',
          name: 'string',
          type: 'FILE',
        },
        {
          id: '1',
          name: 'string',
          type: 'DIRECTORY',
        },
      ),
    ).toBe(true);
  });

  test('객체: state와 nextState가 같을 때', () => {
    expect(
      changeState(
        {
          id: '1',
          name: 'string',
          type: 'FILE',
        },
        {
          id: '1',
          name: 'string',
          type: 'FILE',
        },
      ),
    ).toBe(false);
  });
});
