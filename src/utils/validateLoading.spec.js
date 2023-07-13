import { validateLoading } from './validation.js';

describe('validateLoading', () => {
  test('Loading이 boolean 값이 아닐 때 발생하는 오류', () => {
    expect(() => {
      validateLoading('true');
    }).toThrow('Loading 상태는 불리언 형태여야 합니다!');

    expect(() => {
      validateLoading(null);
    }).toThrow('Loading 상태는 불리언 형태여야 합니다!');

    expect(() => {
      validateLoading(undefined);
    }).toThrow('Loading 상태는 불리언 형태여야 합니다!');

    expect(() => {
      validateLoading(123);
    }).toThrow('Loading 상태는 불리언 형태여야 합니다!');

    expect(() => {
      validateLoading([]);
    }).toThrow('Loading 상태는 불리언 형태여야 합니다!');

    expect(() => {
      validateLoading({});
    }).toThrow('Loading 상태는 불리언 형태여야 합니다!');

    expect(() => {
      validateLoading(true);
    }).not.toThrow();
  });
});
