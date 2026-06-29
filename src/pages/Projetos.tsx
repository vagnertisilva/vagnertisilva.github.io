import { useState } from 'react';
// Certifique-se de que o caminho de importação aponta para o arquivo correto dos tipos/mocks
import { projetosMock } from '../types/projetos'; // ou '../projetos' dependendo da sua pasta

const categoriasAbas = ['Todos Os Projetos', 'Front End', 'Back End', 'Full Stack'];

export default function Projetos() {
  // Lógica de estado para controlar a aba selecionada
  const [abaAtiva, setAbaAtiva] = useState<string>('Todos Os Projetos');

  // Lógica de filtragem dos projetos
  const projetosFiltrados = abaAtiva === 'Todos Os Projetos'
    ? projetosMock
    : projetosMock.filter(projeto => projeto.categoria === abaAtiva);

  return (
    <main>
      <section className="portfolio-section" style={{ paddingBottom: 50 }}>
        <div className="titulo-wrapper">
          <span className="titulo-fundo">PROJETOS</span>
          <h2 className="subtitulo">Meus Projetos</h2>
        </div>

        {/* Navegação de Abas */}
        <nav className="abas-container">
          {categoriasAbas.map((categoria) => (
            <button
              key={categoria}
              className={`aba-botao ${abaAtiva === categoria ? 'ativa' : ''}`}
              onClick={() => setAbaAtiva(categoria)}
            >
              {categoria}
            </button>
          ))}
        </nav>

        {/* Grid de Projetos */}
        <div className="grid-projetos">
          {projetosFiltrados.map((projeto) => (
            <article key={projeto.id} className="cartao-projeto card">

              {/* Tag/Badge da Categoria */}
              <span className="badge-categoria">
                {projeto.categoria.toUpperCase()}
              </span>

              <div className="imagem-container">
                <img src={projeto.imagemUrl} alt={`Capa do projeto ${projeto.titulo}`} />
              </div>

              <div className="conteudo-cartao">
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                
                {projeto.linkUrl && (
                  <a
                    href={projeto.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-acessar-projeto"
                  >
                    Acessar Sistema
                  </a>
                )}

              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}