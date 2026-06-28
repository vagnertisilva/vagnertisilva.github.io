import { Routes, Route } from 'react-router-dom';
import Portifolio from '../pages/Portifolio';
import Projetos from '../pages/Projetos';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Portifolio />} />
      {/* Adicione a rota dos projetos aqui: */}
      <Route path="/projetos" element={<Projetos />} /> 
      
      {/* Rota para páginas não encontradas (404) */}
      <Route path="*" element={<h1>Página não encontrada!</h1>} />
    </Routes>
  );
}