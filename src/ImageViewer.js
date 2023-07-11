export default function ImageViewer({ $target, onImageClose }) {
	const $imageViewer = document.createElement("div");
	$imageViewer.className = "ImageViewer Modal";
	$target.appendChild($imageViewer);

	this.state = {
		selectedImageUrl: null,
	};

	this.setState = nextState => {
		this.state = nextState;
		this.render();
	};

	this.render = () => {
		const { selectedImageUrl } = this.state;

		$imageViewer.style.display = selectedImageUrl ? "block" : "none";

		$imageViewer.innerHTML = `
            <div class="content">
                <img src="${selectedImageUrl}" />
            </div>
        `;
	};

	this.render();

	window.addEventListener("keyup", e => {
		if (e.key === "Delete") {
			onImageClose();
		}
	});

	$imageViewer.addEventListener("click", e => {
		if (Array.from(e.target.classList).includes("Modal")) {
			onImageClose();
		}
	});
}
