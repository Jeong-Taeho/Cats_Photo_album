import { changeState, validateBreadcrumb } from '../utils/validation.js';

export default function Breadcrumb({ $target, initialState, onBreadcrumbClick }) {
  const $breadcrumb = document.createElement('nav');
  $breadcrumb.className = 'Breadcrumb';
  $target.appendChild($breadcrumb);

  validateBreadcrumb(initialState);
  this.state = initialState;

  this.setState = (nextState) => {
    validateBreadcrumb(nextState);
    if (changeState(this.state, nextState)) {
      this.state = nextState;
      this.render();
    }
  };

  this.render = () => {
    $breadcrumb.innerHTML = `
            <div class="Breadcrumb__item">Root</div>
            ${this.state
              .map(
                ({ id, name }) => `
                <div class="Breadcrumb__item" data-id="${id}">${name}</div>
                `,
              )
              .join('')}
        `;
  };

  this.render();

  $breadcrumb.addEventListener('click', (e) => {
    const $breadcrumbItem = e.target.closest('.Breadcrumb__item');

    const { id } = $breadcrumbItem.dataset;
    onBreadcrumbClick(id);
  });
}
