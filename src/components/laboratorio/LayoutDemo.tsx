import { useState } from 'react';

export default function LayoutDemo() {
  const [mode, setMode] = useState<'flex' | 'grid'>('flex');
  const [justify, setJustify] = useState('center');
  const [align, setAlign] = useState('center');

  return (
    <div className="lab-layout-demo">
      <div className="lab-controls">
        <label>Layout<select value={mode} onChange={(event) => setMode(event.target.value as 'flex' | 'grid')}><option value="flex">Flexbox</option><option value="grid">Grid</option></select></label>
        <label>Horizontal<select value={justify} onChange={(event) => setJustify(event.target.value)}><option value="flex-start">Início</option><option value="center">Centro</option><option value="flex-end">Final</option><option value="space-between">Espaço entre</option></select></label>
        <label>Vertical<select value={align} onChange={(event) => setAlign(event.target.value)}><option value="start">Início</option><option value="center">Centro</option><option value="end">Final</option></select></label>
      </div>
      <div className="lab-layout-stage" style={{ display: mode, justifyContent: justify, alignItems: align, gridTemplateColumns: mode === 'grid' ? 'repeat(3, 56px)' : undefined }} aria-label={`Exemplo de posicionamento com ${mode === 'flex' ? 'Flexbox' : 'Grid'}`}>
        {['A', 'B', 'C'].map((letter) => <div className="lab-layout-item" key={letter}>{letter}</div>)}
      </div>
      <pre className="lab-live-code" aria-label="CSS do posicionamento"><code>{`display: ${mode};\njustify-content: ${justify};\nalign-items: ${align};${mode === 'grid' ? '\ngrid-template-columns: repeat(3, 56px);' : ''}`}</code></pre>
    </div>
  );
}
