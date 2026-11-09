import { useState } from 'react';
import illustration from '../../assets/img02.png';

const variants = ['Com imagem', 'Perfil', 'Expansível'] as const;

export default function CardsDemo() {
  const [variant, setVariant] = useState<typeof variants[number]>('Com imagem');
  const [saved, setSaved] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="lab-cards-demo">
      <div className="lab-choice" role="group" aria-label="Formato do card">
        {variants.map((item) => <button type="button" key={item} aria-pressed={variant === item} onClick={() => { setVariant(item); setExpanded(false); }}>{item}</button>)}
      </div>
      <div className="lab-card-stage">
        <article className="lab-example-card" key={variant}>
          {variant === 'Com imagem' && <>
            <img className="lab-card-image" src={illustration} width="1366" height="768" alt="Ilustração de desenvolvimento front-end" />
            <div className="lab-card-body"><h3>Interfaces em prática</h3><p>Um card com imagem, descrição e uma ação que muda de estado.</p><button className="lab-button" type="button" aria-pressed={saved} onClick={() => setSaved((value) => !value)}>{saved ? 'Favoritado' : 'Favoritar exemplo'}</button><p className="lab-sr-only" role="status">{saved ? 'Exemplo adicionado aos favoritos desta demonstração.' : ''}</p></div>
          </>}
          {variant === 'Perfil' && <div className="lab-card-body">
            <div className="lab-avatar" aria-hidden="true">VS</div><h3>Vagner Silva</h3><p>Desenvolvedor web e mobile.</p>
            <button type="button" className="lab-button" aria-expanded={expanded} aria-controls="profile-skills" onClick={() => setExpanded((value) => !value)}>{expanded ? 'Ocultar habilidades' : 'Ver habilidades'}</button>
            <p id="profile-skills" hidden={!expanded}>React, TypeScript, React Native e CSS.</p>
          </div>}
          {variant === 'Expansível' && <div className="lab-card-body">
            <h3>Pequenos detalhes</h3><p>Experimente revelar mais informações sem sair do card.</p>
            <button type="button" className="lab-button" aria-expanded={expanded} aria-controls="card-details" onClick={() => setExpanded((value) => !value)}>{expanded ? 'Recolher detalhes' : 'Expandir detalhes'}</button>
            <div id="card-details" hidden={!expanded}><p>O estado é controlado pelo React. A mesma interação funciona por clique, toque e teclado.</p></div>
          </div>}
        </article>
      </div>
      <p className="lab-note">Passe o mouse sobre o card ou navegue pelas ações usando Tab.</p>
    </div>
  );
}
