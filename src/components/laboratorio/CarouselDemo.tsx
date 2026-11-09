import { useRef, useState } from 'react';
import finance from '../../assets/img04.png';
import navigation from '../../assets/img03.png';
import expenses from '../../assets/img01.png';

const slides = [
  { image: finance, title: 'Sistema de finanças', description: 'Uma interface para organizar receitas e despesas.' },
  { image: navigation, title: 'Rotas de navegação', description: 'Um estudo dos padrões de navegação em React Native.' },
  { image: expenses, title: 'Organizador de despesas', description: 'Uma aplicação voltada ao controle financeiro pessoal.' },
];

export default function CarouselDemo() {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const slide = slides[index];
  const move = (direction: number) => setIndex((current) => (current + direction + slides.length) % slides.length);

  return (
    <div className="lab-carousel" role="region" aria-roledescription="carrossel" aria-label="Imagens dos projetos" tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          move(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}
      onPointerDown={(event) => {
        if (event.pointerType !== 'touch' || (event.target as Element).closest('button')) return;
        touchStart.current = event.clientX;
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerUp={(event) => {
        if (touchStart.current === null) return;
        const delta = event.clientX - touchStart.current;
        touchStart.current = null;
        if (Math.abs(delta) > 45) move(delta < 0 ? 1 : -1);
      }}
      onPointerCancel={() => { touchStart.current = null; }}>
      <figure className="lab-slide" key={index}>
        <img src={slide.image} alt={`Interface: ${slide.title}`} width="1366" height="768" draggable={false} />
        <figcaption><h3>{slide.title}</h3><p>{slide.description}</p></figcaption>
      </figure>
      <div className="lab-carousel-controls">
        <button type="button" className="lab-secondary" onClick={() => move(-1)} aria-label="Imagem anterior">←</button>
        <div className="lab-carousel-dots" role="group" aria-label="Escolher imagem">
          {slides.map((item, position) => <button type="button" key={item.title} onClick={() => setIndex(position)} aria-label={`Mostrar ${item.title}`} aria-pressed={position === index}><span /></button>)}
        </div>
        <button type="button" className="lab-secondary" onClick={() => move(1)} aria-label="Próxima imagem">→</button>
      </div>
      <p className="lab-note" role="status">{index + 1} de {slides.length}. Use as setas do teclado ou deslize no celular.</p>
    </div>
  );
}
