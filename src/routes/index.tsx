import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Portifolio from '../pages/Portifolio';
import Projetos from '../pages/Projetos';
const Laboratorio = lazy(() => import('../pages/Laboratorio'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Portifolio />} />
      {/* Adicione a rota dos projetos aqui: */}
      <Route path="/projetos" element={<Projetos />} /> 
      <Route path="/laboratorio" element={
        <Suspense fallback={<main className="portfolio-section"><p role="status">Carregando exemplos…</p></main>}>
          <Laboratorio />
        </Suspense>
      } />
      
      {/* Rota para páginas não encontradas (404) */}
      <Route path="*" element={<h1>Página não encontrada!</h1>} />
    </Routes>
  );
}
