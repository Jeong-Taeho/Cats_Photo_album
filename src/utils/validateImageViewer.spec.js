import { validateImageViewer } from './validation.js';

describe('validateImageViewer', () => {
  test('selectedImageUrl이 유효하지 않을 때 발생하는 오류', () => {
    expect(() => {
      validateImageViewer({ selectedImageUrl: undefined });
    }).toThrow('이미지 경로는 문자열이어야 합니다!');

    expect(() => {
      validateImageViewer({ selectedImageUrl: true });
    }).toThrow('이미지 경로는 문자열이어야 합니다!');

    expect(() => {
      validateImageViewer({ selectedImageUrl: 123 });
    }).toThrow('이미지 경로는 문자열이어야 합니다!');

    expect(() => {
      validateImageViewer({ selectedImageUrl: {} });
    }).toThrow('이미지 경로는 문자열이어야 합니다!');

    expect(() => {
      validateImageViewer({ selectedImageUrl: [] });
    }).toThrow('이미지 경로는 문자열이어야 합니다!');
  });

  test('selectedImageUrl이 유효할 때 예외를 발생시키지 않는지 검사', () => {
    expect(() => {
      validateImageViewer({ selectedImageUrl: 'https://' });
    }).not.toThrow();
  });
});
