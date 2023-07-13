import { validateBreadcrumb } from './validation.js';

describe('validateBreadcrumb', () => {
  test('paths가 배열 형태가 아닐 때 발생하는 오류', () => {
    expect(() => {
      validateBreadcrumb('array');
    }).toThrow('경로를 배열 형태로 만들어주세요!');
  });

  test('paths 안의 객체 속성 중 id가 없거나 문자열이 아닐 때 발생하는 오류', () => {
    expect(() => {
      validateBreadcrumb([{ id: null, name: 'Folder 1', type: 'DIRECTORY' }]);
    }).toThrow('path의 id를 확인해주세요!');
  });

  test('paths 안의 객체 속성 중 name이 없거나 문자열이 아닐 때 발생하는 오류', () => {
    expect(() => {
      validateBreadcrumb([{ id: '노란색 고양이', name: null, type: 'DIRECTORY' }]);
    }).toThrow('path의 name을 확인해주세요!');
  });

  test('paths 안의 객체 속성 중 type이 없거나 문자열이 아닐 때 발생하는 오류', () => {
    expect(() => {
      validateBreadcrumb([{ id: '노란색 고양이', name: 'Folder 1', type: null }]);
    }).toThrow('path의 type을 확인해주세요!');
  });

  test('paths 속성이 모두 유효할 때 예외를 발생시키지 않는지 확인', () => {
    expect(() => {
      validateBreadcrumb([{ id: 'folder1', name: 'Folder 1', type: 'DIRECTORY' }]);
    }).not.toThrow();
  });
});
