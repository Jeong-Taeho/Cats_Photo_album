import Nodes from './components/Nodes.js';
import { request } from './api/api.js';
import ImageViewer from './components/ImageViewer.js';
import Loading from './components/Loading.js';
import Breadcrumb from './components/Breadcrumb.js';
import { VITE_API_END_POINT } from './api/api.js';

export default function App({ $target }) {
  console.log(import.meta.env);
  this.state = {
    isRoot: true,
    isLoading: false,
    nodes: [],
    paths: [],
    selectedImageUrl: '',
  };

  const loading = new Loading({
    $target,
  });

  const breadcrumb = new Breadcrumb({
    $target,
    initialState: this.state.paths,
    onBreadcrumbClick: async (id) => {
      //선택한 경로 외에 남은 paths를 날려주는 처리를 해야한다.
      if (id) {
        const nextPaths = [...this.state.paths];
        const movePathIndex = nextPaths.findIndex((path) => id === path.id);
        this.setState({
          ...this.state,
          paths: nextPaths.slice(0, movePathIndex + 1),
        });
      } else {
        this.setState({
          ...this.state,
          paths: [],
        });
      }

      await fetchNodes(id);
    },
  });

  const nodes = new Nodes({
    $target,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    },
    onClick: async (node) => {
      if (node.type === 'DIRECTORY') {
        fetchNodes(node.id);
        this.setState({
          ...this.state,
          paths: [...this.state.paths, node],
        });
      }

      if (node.type === 'FILE') {
        this.setState({
          ...this.state,
          selectedImageUrl: `${VITE_API_END_POINT}/static${node.filePath}`,
        });
      }
    },
    onPrevClick: async () => {
      const nextPaths = [...this.state.paths];
      nextPaths.pop();
      this.setState({
        ...this.state,
        paths: nextPaths,
      });

      if (nextPaths.length === 0) {
        await fetchNodes();
      } else {
        await fetchNodes(nextPaths[nextPaths.length - 1].id);
      }
    },
  });

  const imageViewer = new ImageViewer({
    $target,
    onImageClose: () => {
      this.setState({
        ...this.state,
        selectedImageUrl: '',
      });
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;

    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });

    imageViewer.setState({
      selectedImageUrl: this.state.selectedImageUrl,
    });

    loading.setState(this.state.isLoading);

    breadcrumb.setState(this.state.paths);
  };

  const fetchNodes = async (id) => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    const nodes = await request(id ? `/${id}` : '/');

    this.setState({
      ...this.state,
      nodes,
      isRoot: id ? false : true,
      isLoading: false,
    });
  };

  fetchNodes();
}
