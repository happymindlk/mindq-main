import { BrowserRouter } from 'react-router-dom';
import DemoBRoutes from './demos/demo-b/routes';

export default function App() {
  return (
    <BrowserRouter>
      <DemoBRoutes />
    </BrowserRouter>
  );
}
