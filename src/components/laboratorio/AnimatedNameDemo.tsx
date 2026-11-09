import { useState } from 'react';
import type { CSSProperties } from 'react';

const effects = ['Entrada', 'Onda', 'Digitação'] as const;

export default function AnimatedNameDemo() {
  const [name, setName] = useState('Vagner Silva');
  const [effect, setEffect] = useState<typeof effects[number]>('Entrada');
  const [replay, setReplay] = useState(0);
  const displayName = name.trim() || 'Seu nome';
  const effectClass = effect === 'Entrada' ? 'entry' : effect === 'Onda' ? 'wave' : 'typing';

  return (
    <div className="lab-name-demo">
      <label htmlFor="animated-name">Digite um nome</label>
      <input id="animated-name" value={name} maxLength={24} onChange={(event) => setName(event.target.value)} placeholder="Seu nome" autoComplete="off" />
      <div className="lab-choice" role="group" aria-label="Efeito do texto">
        {effects.map((item) => <button type="button" key={item} aria-pressed={effect === item} onClick={() => setEffect(item)}>{item}</button>)}
      </div>
      <div className="lab-name-stage" role="img" aria-label={`Prévia do nome: ${displayName}`}>
        <div key={`${displayName}-${effect}-${replay}`} className={`lab-name-text lab-name-${effectClass}`} style={{ '--name-length': Array.from(displayName).length } as CSSProperties} aria-hidden="true">
          {effect === 'Digitação' ? <span className="lab-typing-line">{displayName}</span> : Array.from(displayName).map((letter, index) => <span className="lab-letter" key={index} style={{ '--letter-delay': `${index * 45}ms` } as CSSProperties}>{letter === ' ' ? '\u00a0' : letter}</span>)}
        </div>
      </div>
      <button type="button" className="lab-button" onClick={() => setReplay((current) => current + 1)}>Repetir animação</button>
      <p className="lab-note">Os efeitos respeitam a preferência de movimento reduzido do seu dispositivo.</p>
    </div>
  );
}
