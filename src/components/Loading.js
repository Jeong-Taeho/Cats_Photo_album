import { changeState, validateLoading } from '../utils/validation.js';

export default function Loading({ $target }) {
  const $loading = document.createElement('div');

  $loading.className = 'Loading Modal';
  $target.appendChild($loading);

  this.state = false;
  validateLoading(this.state);

  this.setState = (nextState) => {
    validateLoading(nextState);
    if (changeState(this.state, nextState)) {
      this.state = nextState;
      this.render();
    }
  };

  this.render = () => {
    $loading.style.display = this.state ? 'block' : 'none';

    $loading.innerHTML = `
			<div class="content">
				<img width="100%"; src="https://cdn.roto.codes/images/nyan-cat.gif" alt="Loading..." />
			</div>
		`;
  };

  this.render();
}
