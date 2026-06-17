import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes'; // Por chamar 'index.tsx', o Vite já reconhece automaticamente apontando para a pasta

export default function App() {
  return (
    <BrowserRouter>
      <Header /> 
      
      <AppRoutes />
    </BrowserRouter>
  );
}