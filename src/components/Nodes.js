import { validateComponent, validateNodeData, changeState } from '../utils/validation.js';

// Nodes가 디렉토리인지 파일인지 확인하여 렌더링하는 역할
export default function Nodes({ $target, initialState, onClick, onPrevClick }) {
  validateComponent(new.target);

  const $nodes = document.createElement('div');
  $target.appendChild($nodes);
  $nodes.classList.add('Nodes');

  validateNodeData(initialState);
  this.state = initialState;

  this.setState = (nextState) => {
    validateNodeData(nextState);
    if (changeState(this.state, nextState)) {
      this.state = nextState;
      this.render();
    }
  };

  this.render = () => {
    const { isRoot, nodes } = this.state;
    $nodes.innerHTML = `
			${
        isRoot
          ? ''
          : `
					<div class="Node">
						<img src="https://cdn.roto.codes/images/prev.png">
					</div>
				`
      }
				${nodes
          .map(
            (node) => `
					<div class="Node" data-id="${node.id}">
						<img src="${
              node.type === 'DIRECTORY'
                ? 'https://cdn.roto.codes/images/directory.png'
                : 'https://cdn.roto.codes/images/file.png'
            }" />
						${node.name}
					</div>
				`,
          )
          .join('')}
			`;
  };

  this.render();

  $nodes.addEventListener('click', (e) => {
    const $node = e.target.closest('.Node');
    const { id } = $node.dataset;

    const node = this.state.nodes.find((node) => node.id === id);

    if (node) {
      onClick(node);
    } else {
      onPrevClick();
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.key === 'Backspace' && !this.state.isRoot) {
      onPrevClick();
    }
  });
}
