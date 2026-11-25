import { BrowserRouter } from 'react-router-dom';
import DemoARoutes from './demos/demo-a/routes';

export default function App() {
  return (
    <BrowserRouter>
      <DemoARoutes />
    </BrowserRouter>
  );
}
