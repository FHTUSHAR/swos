import { RouterProvider } from 'react-router-dom';
import { router } from './pages/router/router';

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
