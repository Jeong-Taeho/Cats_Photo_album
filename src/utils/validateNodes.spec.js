import { validateNodeData } from './validation.js';

describe('validateNodeData', () => {
  test('isRoot가 boolean 타입이 아닐 때 오류 발생', () => {
    expect(() => {
      validateNodeData({ isRoot: 'not a boolean', nodes: [] });
    }).toThrow('Nodes의 isRoot 값은 불리언 형식이어야 합니다!');
  });

  test('nodes 데이터가 배열이 아닐 때 오류 발생', () => {
    expect(() => {
      validateNodeData({ isRoot: true, nodes: {} });
    }).toThrow('Nodes 데이터가 배열 데이터가 아닙니다!');
  });

  test('nodes 배열 데이터 안에 객체 id 속성이 문자열이 아닐 때 오류 발생', () => {
    expect(() => {
      validateNodeData({ isRoot: true, nodes: [{ id: 1, name: 'Node 1', type: 'FILE' }] });
    }).toThrow('nodes의 id를 확인해주세요!');
  });

  test('nodes 배열 데이터 안에 객체 name 속성이 문자열이 아닐 때 오류 발생', () => {
    expect(() => {
      validateNodeData({ isRoot: true, nodes: [{ id: '1', name: null, type: 'FILE' }] });
    }).toThrow('nodes의 name을 확인해주세요!');
  });

  test('nodes 배열 데이터 안에 객체 type 속성이 문자열이 아닐 때 오류 발생', () => {
    expect(() => {
      validateNodeData({ isRoot: true, nodes: [{ id: '1', name: 'Node 1', type: undefined }] });
    }).toThrow('nodes의 type을 확인해주세요!');
  });

  test('nodes의 속성이 모두 유효할 때 예외를 발생시키지 않는지 검사', () => {
    expect(() => {
      validateNodeData({ isRoot: true, nodes: [{ id: '1', name: 'Node 1', type: 'FILE' }] });
    }).not.toThrow();
  });
});
