import { changeState, validateImageViewer } from '../utils/validation.js';

export default function ImageViewer({ $target, onImageClose }) {
  const $imageViewer = document.createElement('div');
  $imageViewer.className = 'ImageViewer Modal';
  $target.appendChild($imageViewer);

  this.state = {
    selectedImageUrl: '',
  };
  validateImageViewer(this.state);

  this.setState = (nextState) => {
    validateImageViewer(nextState);
    if (changeState(this.state, nextState)) {
      this.state = nextState;
      this.render();
    }
  };

  this.render = () => {
    const { selectedImageUrl } = this.state;

    $imageViewer.style.display = selectedImageUrl ? 'block' : 'none';

    $imageViewer.innerHTML = `
            <div class="content">
                <img src="${selectedImageUrl}" />
            </div>
        `;
  };

  this.render();

  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      onImageClose();
    }
  });

  $imageViewer.addEventListener('click', (e) => {
    if (Array.from(e.target.classList).includes('Modal')) {
      onImageClose();
    }
  });
}
