const changeState = (state, nextState) => {
  return JSON.stringify(state) !== JSON.stringify(nextState);
};

const validateComponent = (isNew) => {
  if (!isNew) {
    throw new Error('컴포넌트에 new 키워드를 붙여주세요');
  }
};

// Nodes.js의 state : { isRoot : boolean, nodes : [{id : string, name : string, type : string(FILE, DIRECTORY)}] }
const validateNodeData = ({ isRoot, nodes }) => {
  if (typeof isRoot !== 'boolean') {
    throw new Error('Nodes의 isRoot 값은 불리언 형식이어야 합니다!');
  }
  if (!Array.isArray(nodes)) {
    throw new Error('Nodes 데이터가 배열 데이터가 아닙니다!');
  } else {
    nodes.forEach(({ id, name, type }) => {
      if (!id || typeof id !== 'string') {
        throw new Error('nodes의 id를 확인해주세요!');
      }
      if (!name || typeof name !== 'string') {
        throw new Error('nodes의 name을 확인해주세요!');
      }
      if (!type || typeof type !== 'string') {
        throw new Error('nodes의 type을 확인해주세요!');
      }
    });
  }
};

//Loading.js의 state -> boolean
const validateLoading = (isLoading) => {
  if (typeof isLoading !== 'boolean') {
    throw new Error('Loading 상태는 불리언 형태여야 합니다!');
  }
};

//ImageViewer.js의 state -> {selectedImageUrl : string}
const validateImageViewer = ({ selectedImageUrl }) => {
  if (typeof selectedImageUrl !== 'string') {
    throw new Error('이미지 경로는 문자열이어야 합니다!');
  }
};

//Breadcrumb.js의 state -> [{id : string, name : string, type : string(FILE, DIRECTORY)}]
const validateBreadcrumb = (paths) => {
  if (!Array.isArray(paths)) {
    throw new Error('경로를 배열 형태로 만들어주세요!');
  } else {
    paths.forEach(({ id, name, type }) => {
      if (!id || typeof id !== 'string') {
        throw new Error('path의 id를 확인해주세요!');
      }
      if (!name || typeof name !== 'string') {
        throw new Error('path의 name을 확인해주세요!');
      }
      if (!type || typeof type !== 'string') {
        throw new Error('path의 type을 확인해주세요!');
      }
    });
  }
};

export { changeState, validateComponent, validateNodeData, validateBreadcrumb, validateLoading, validateImageViewer };
