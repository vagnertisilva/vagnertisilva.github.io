import { useEffect, useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import LoginDemo from '../components/laboratorio/LoginDemo';
import LayoutDemo from '../components/laboratorio/LayoutDemo';
import CarouselDemo from '../components/laboratorio/CarouselDemo';
import CardsDemo from '../components/laboratorio/CardsDemo';
import AnimatedNameDemo from '../components/laboratorio/AnimatedNameDemo';
import loginSource from '../components/laboratorio/LoginDemo.tsx?raw';
import layoutSource from '../components/laboratorio/LayoutDemo.tsx?raw';
import carouselSource from '../components/laboratorio/CarouselDemo.tsx?raw';
import cardsSource from '../components/laboratorio/CardsDemo.tsx?raw';
import nameSource from '../components/laboratorio/AnimatedNameDemo.tsx?raw';
import '../styles/laboratorio.css';

const examples = [
  { id: 'login', title: 'Tela de login', summary: 'Formulário e validação', description: 'Teste os campos, revele a senha e experimente as mensagens de validação.', component: LoginDemo, source: loginSource },
  { id: 'posicionamento', title: 'Posicionamento', summary: 'Flexbox e Grid', description: 'Mude o layout e os alinhamentos. O CSS acompanha cada escolha em tempo real.', component: LayoutDemo, source: layoutSource },
  { id: 'carrossel', title: 'Carrossel', summary: 'Imagens e navegação', description: 'Navegue por imagens dos projetos usando botões, indicadores, teclado ou gestos.', component: CarouselDemo, source: carouselSource },
  { id: 'cards', title: 'Cards interativos', summary: 'Formatos e estados', description: 'Explore um card com imagem, um perfil e um card com detalhes expansíveis.', component: CardsDemo, source: cardsSource },
  { id: 'nomes', title: 'Texto animado', summary: 'Seu nome em movimento', description: 'Digite um nome, escolha um efeito e repita a animação quando quiser.', component: AnimatedNameDemo, source: nameSource },
];

export default function Laboratorio() {
  const [params, setParams] = useSearchParams();
  const tabsRef = useRef<HTMLDivElement>(null);
  const active = examples.find((example) => example.id === params.get('exemplo')) ?? examples[0];
  const Demo = active.component;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Laboratório Front-end | Vagner Silva';
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => { document.title = previousTitle; };
  }, []);

  function select(id: string) {
    setParams({ exemplo: id }, { replace: true, preventScrollReset: true });
  }

  function navigateTabs(event: KeyboardEvent<HTMLDivElement>) {
    const index = examples.indexOf(active);
    let next: number;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % examples.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + examples.length) % examples.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = examples.length - 1;
    else return;
    event.preventDefault();
    select(examples[next].id);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next].focus();
  }

  return (
    <main className="lab-page">
      <div className="lab-container">
        <Link className="lab-back" to="/projetos">← Voltar aos projetos</Link>
        <header className="lab-intro">
          <h1>Laboratório Front-end</h1>
          <p>Pequenos projetos para explorar interfaces, layouts e animações. Escolha um exemplo e experimente.</p>
        </header>

        <div className="lab-workspace">
          <div className="lab-examples" ref={tabsRef} role="tablist" aria-label="Exemplos front-end" onKeyDown={navigateTabs}>
            {examples.map((example) => (
              <button type="button" role="tab" id={`tab-${example.id}`} aria-selected={active.id === example.id} aria-controls="lab-demo-panel" tabIndex={active.id === example.id ? 0 : -1} key={example.id} onClick={() => select(example.id)}>
                <span>{example.title}</span><span>{example.summary}</span>
              </button>
            ))}
          </div>

          <section className="lab-panel" id="lab-demo-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} tabIndex={0}>
            <div className="lab-panel-heading"><h2>{active.title}</h2><p>{active.description}</p></div>
            <div className="lab-demo" key={active.id} data-ui><Demo /></div>
            <details className="lab-source" key={`source-${active.id}`}>
              <summary>Ver código React</summary>
              <p>Este é o componente usado nesta demonstração. Os estilos ficam em <code>src/styles/laboratorio.css</code>.</p>
              <pre tabIndex={0} aria-label={`Código React: ${active.title}`}><code>{active.source}</code></pre>
            </details>
          </section>
        </div>

        <footer className="lab-footer"><p>Feito com React, TypeScript e CSS.</p><Link to="/">Conhecer o portfólio</Link></footer>
      </div>
    </main>
  );
}
