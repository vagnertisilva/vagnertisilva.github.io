import{a as e,c as t,i as n,l as r,o as i,r as a,s as o,t as s}from"./index-BrIkw5X7.js";var c=r(t(),1),l=e();function u(){let[e,t]=(0,c.useState)(!1),[n,r]=(0,c.useState)({email:``,password:``}),[i,a]=(0,c.useState)(!1);function o(e){e.preventDefault();let n=e.currentTarget,i=n.elements.namedItem(`email`),o=n.elements.namedItem(`password`),s={email:i.validity.valid?``:`Informe um email válido.`,password:o.value.length>=6?``:`Use pelo menos 6 caracteres.`};if(r(s),a(!1),s.email||s.password){(s.email?i:o).focus();return}n.reset(),t(!1),a(!0)}return(0,l.jsxs)(`div`,{className:`lab-login`,children:[(0,l.jsx)(`h3`,{children:`Boas-vindas`}),(0,l.jsx)(`p`,{children:`Uma tela de acesso para experimentar.`}),(0,l.jsxs)(`form`,{noValidate:!0,onSubmit:o,onInput:()=>a(!1),children:[(0,l.jsx)(`label`,{htmlFor:`demo-email`,children:`Email`}),(0,l.jsx)(`input`,{id:`demo-email`,name:`email`,type:`email`,placeholder:`voce@exemplo.com`,required:!0,autoComplete:`off`,"aria-invalid":!!n.email,"aria-describedby":n.email?`email-error`:void 0}),n.email&&(0,l.jsx)(`p`,{className:`lab-error`,id:`email-error`,children:n.email}),(0,l.jsx)(`label`,{htmlFor:`demo-password`,children:`Senha`}),(0,l.jsxs)(`div`,{className:`lab-password`,children:[(0,l.jsx)(`input`,{id:`demo-password`,name:`password`,type:e?`text`:`password`,placeholder:`Pelo menos 6 caracteres`,required:!0,minLength:6,autoComplete:`off`,"aria-invalid":!!n.password,"aria-describedby":n.password?`password-error`:void 0}),(0,l.jsxs)(`button`,{type:`button`,"aria-pressed":e,onClick:()=>t(e=>!e),children:[e?`Ocultar`:`Mostrar`,(0,l.jsx)(`span`,{className:`lab-sr-only`,children:` senha`})]})]}),n.password&&(0,l.jsx)(`p`,{className:`lab-error`,id:`password-error`,children:n.password}),(0,l.jsx)(`button`,{className:`lab-button`,type:`submit`,children:`Testar acesso`}),(0,l.jsx)(`p`,{className:`lab-status`,role:`status`,children:i?`Tudo certo! Demonstração concluída; nenhuma conta foi acessada.`:``})]}),(0,l.jsx)(`p`,{className:`lab-note`,children:`Use dados fictícios. Este formulário é apenas uma demonstração.`})]})}function d(){let[e,t]=(0,c.useState)(`flex`),[n,r]=(0,c.useState)(`center`),[i,a]=(0,c.useState)(`center`);return(0,l.jsxs)(`div`,{className:`lab-layout-demo`,children:[(0,l.jsxs)(`div`,{className:`lab-controls`,children:[(0,l.jsxs)(`label`,{children:[`Layout`,(0,l.jsxs)(`select`,{value:e,onChange:e=>t(e.target.value),children:[(0,l.jsx)(`option`,{value:`flex`,children:`Flexbox`}),(0,l.jsx)(`option`,{value:`grid`,children:`Grid`})]})]}),(0,l.jsxs)(`label`,{children:[`Horizontal`,(0,l.jsxs)(`select`,{value:n,onChange:e=>r(e.target.value),children:[(0,l.jsx)(`option`,{value:`flex-start`,children:`Início`}),(0,l.jsx)(`option`,{value:`center`,children:`Centro`}),(0,l.jsx)(`option`,{value:`flex-end`,children:`Final`}),(0,l.jsx)(`option`,{value:`space-between`,children:`Espaço entre`})]})]}),(0,l.jsxs)(`label`,{children:[`Vertical`,(0,l.jsxs)(`select`,{value:i,onChange:e=>a(e.target.value),children:[(0,l.jsx)(`option`,{value:`start`,children:`Início`}),(0,l.jsx)(`option`,{value:`center`,children:`Centro`}),(0,l.jsx)(`option`,{value:`end`,children:`Final`})]})]})]}),(0,l.jsx)(`div`,{className:`lab-layout-stage`,style:{display:e,justifyContent:n,alignItems:i,gridTemplateColumns:e===`grid`?`repeat(3, 56px)`:void 0},"aria-label":`Exemplo de posicionamento com ${e===`flex`?`Flexbox`:`Grid`}`,children:[`A`,`B`,`C`].map(e=>(0,l.jsx)(`div`,{className:`lab-layout-item`,children:e},e))}),(0,l.jsx)(`pre`,{className:`lab-live-code`,"aria-label":`CSS do posicionamento`,children:(0,l.jsx)(`code`,{children:`display: ${e};\njustify-content: ${n};\nalign-items: ${i};${e===`grid`?`
grid-template-columns: repeat(3, 56px);`:``}`})})]})}var f=[{image:n,title:`Sistema de finanças`,description:`Uma interface para organizar receitas e despesas.`},{image:a,title:`Rotas de navegação`,description:`Um estudo dos padrões de navegação em React Native.`},{image:s,title:`Organizador de despesas`,description:`Uma aplicação voltada ao controle financeiro pessoal.`}];function p(){let[e,t]=(0,c.useState)(0),n=(0,c.useRef)(null),r=f[e],i=e=>t(t=>(t+e+f.length)%f.length);return(0,l.jsxs)(`div`,{className:`lab-carousel`,role:`region`,"aria-roledescription":`carrossel`,"aria-label":`Imagens dos projetos`,tabIndex:0,onKeyDown:e=>{(e.key===`ArrowLeft`||e.key===`ArrowRight`)&&(e.preventDefault(),i(e.key===`ArrowLeft`?-1:1))},onPointerDown:e=>{e.pointerType!==`touch`||e.target.closest(`button`)||(n.current=e.clientX,e.currentTarget.setPointerCapture(e.pointerId))},onPointerUp:e=>{if(n.current===null)return;let t=e.clientX-n.current;n.current=null,Math.abs(t)>45&&i(t<0?1:-1)},onPointerCancel:()=>{n.current=null},children:[(0,l.jsxs)(`figure`,{className:`lab-slide`,children:[(0,l.jsx)(`img`,{src:r.image,alt:`Interface: ${r.title}`,width:`1366`,height:`768`,draggable:!1}),(0,l.jsxs)(`figcaption`,{children:[(0,l.jsx)(`h3`,{children:r.title}),(0,l.jsx)(`p`,{children:r.description})]})]},e),(0,l.jsxs)(`div`,{className:`lab-carousel-controls`,children:[(0,l.jsx)(`button`,{type:`button`,className:`lab-secondary`,onClick:()=>i(-1),"aria-label":`Imagem anterior`,children:`←`}),(0,l.jsx)(`div`,{className:`lab-carousel-dots`,role:`group`,"aria-label":`Escolher imagem`,children:f.map((n,r)=>(0,l.jsx)(`button`,{type:`button`,onClick:()=>t(r),"aria-label":`Mostrar ${n.title}`,"aria-pressed":r===e,children:(0,l.jsx)(`span`,{})},n.title))}),(0,l.jsx)(`button`,{type:`button`,className:`lab-secondary`,onClick:()=>i(1),"aria-label":`Próxima imagem`,children:`→`})]}),(0,l.jsxs)(`p`,{className:`lab-note`,role:`status`,children:[e+1,` de `,f.length,`. Use as setas do teclado ou deslize no celular.`]})]})}var m=[`Com imagem`,`Perfil`,`Expansível`];function h(){let[e,t]=(0,c.useState)(`Com imagem`),[n,r]=(0,c.useState)(!1),[i,a]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{className:`lab-cards-demo`,children:[(0,l.jsx)(`div`,{className:`lab-choice`,role:`group`,"aria-label":`Formato do card`,children:m.map(n=>(0,l.jsx)(`button`,{type:`button`,"aria-pressed":e===n,onClick:()=>{t(n),a(!1)},children:n},n))}),(0,l.jsx)(`div`,{className:`lab-card-stage`,children:(0,l.jsxs)(`article`,{className:`lab-example-card`,children:[e===`Com imagem`&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`img`,{className:`lab-card-image`,src:`/assets/img02-DU5LwXBm.png`,width:`1366`,height:`768`,alt:`Ilustração de desenvolvimento front-end`}),(0,l.jsxs)(`div`,{className:`lab-card-body`,children:[(0,l.jsx)(`h3`,{children:`Interfaces em prática`}),(0,l.jsx)(`p`,{children:`Um card com imagem, descrição e uma ação que muda de estado.`}),(0,l.jsx)(`button`,{className:`lab-button`,type:`button`,"aria-pressed":n,onClick:()=>r(e=>!e),children:n?`Favoritado`:`Favoritar exemplo`}),(0,l.jsx)(`p`,{className:`lab-sr-only`,role:`status`,children:n?`Exemplo adicionado aos favoritos desta demonstração.`:``})]})]}),e===`Perfil`&&(0,l.jsxs)(`div`,{className:`lab-card-body`,children:[(0,l.jsx)(`div`,{className:`lab-avatar`,"aria-hidden":`true`,children:`VS`}),(0,l.jsx)(`h3`,{children:`Vagner Silva`}),(0,l.jsx)(`p`,{children:`Desenvolvedor web e mobile.`}),(0,l.jsx)(`button`,{type:`button`,className:`lab-button`,"aria-expanded":i,"aria-controls":`profile-skills`,onClick:()=>a(e=>!e),children:i?`Ocultar habilidades`:`Ver habilidades`}),(0,l.jsx)(`p`,{id:`profile-skills`,hidden:!i,children:`React, TypeScript, React Native e CSS.`})]}),e===`Expansível`&&(0,l.jsxs)(`div`,{className:`lab-card-body`,children:[(0,l.jsx)(`h3`,{children:`Pequenos detalhes`}),(0,l.jsx)(`p`,{children:`Experimente revelar mais informações sem sair do card.`}),(0,l.jsx)(`button`,{type:`button`,className:`lab-button`,"aria-expanded":i,"aria-controls":`card-details`,onClick:()=>a(e=>!e),children:i?`Recolher detalhes`:`Expandir detalhes`}),(0,l.jsx)(`div`,{id:`card-details`,hidden:!i,children:(0,l.jsx)(`p`,{children:`O estado é controlado pelo React. A mesma interação funciona por clique, toque e teclado.`})})]})]},e)}),(0,l.jsx)(`p`,{className:`lab-note`,children:`Passe o mouse sobre o card ou navegue pelas ações usando Tab.`})]})}var g=[`Entrada`,`Onda`,`Digitação`];function _(){let[e,t]=(0,c.useState)(`Vagner Silva`),[n,r]=(0,c.useState)(`Entrada`),[i,a]=(0,c.useState)(0),o=e.trim()||`Seu nome`,s=n===`Entrada`?`entry`:n===`Onda`?`wave`:`typing`;return(0,l.jsxs)(`div`,{className:`lab-name-demo`,children:[(0,l.jsx)(`label`,{htmlFor:`animated-name`,children:`Digite um nome`}),(0,l.jsx)(`input`,{id:`animated-name`,value:e,maxLength:24,onChange:e=>t(e.target.value),placeholder:`Seu nome`,autoComplete:`off`}),(0,l.jsx)(`div`,{className:`lab-choice`,role:`group`,"aria-label":`Efeito do texto`,children:g.map(e=>(0,l.jsx)(`button`,{type:`button`,"aria-pressed":n===e,onClick:()=>r(e),children:e},e))}),(0,l.jsx)(`div`,{className:`lab-name-stage`,role:`img`,"aria-label":`Prévia do nome: ${o}`,children:(0,l.jsx)(`div`,{className:`lab-name-text lab-name-${s}`,style:{"--name-length":Array.from(o).length},"aria-hidden":`true`,children:n===`Digitação`?(0,l.jsx)(`span`,{className:`lab-typing-line`,children:o}):Array.from(o).map((e,t)=>(0,l.jsx)(`span`,{className:`lab-letter`,style:{"--letter-delay":`${t*45}ms`},children:e===` `?`\xA0`:e},t))},`${o}-${n}-${i}`)}),(0,l.jsx)(`button`,{type:`button`,className:`lab-button`,onClick:()=>a(e=>e+1),children:`Repetir animação`}),(0,l.jsx)(`p`,{className:`lab-note`,children:`Os efeitos respeitam a preferência de movimento reduzido do seu dispositivo.`})]})}var v=[{id:`login`,title:`Tela de login`,summary:`Formulário e validação`,description:`Teste os campos, revele a senha e experimente as mensagens de validação.`,component:u,source:`import { useState } from 'react';
import type { FormEvent } from 'react';

export default function LoginDemo() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [success, setSuccess] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.namedItem('email') as HTMLInputElement;
    const password = form.elements.namedItem('password') as HTMLInputElement;
    const next = {
      email: email.validity.valid ? '' : 'Informe um email válido.',
      password: password.value.length >= 6 ? '' : 'Use pelo menos 6 caracteres.',
    };
    setErrors(next);
    setSuccess(false);
    if (next.email || next.password) {
      (next.email ? email : password).focus();
      return;
    }
    form.reset();
    setShowPassword(false);
    setSuccess(true);
  }

  return (
    <div className="lab-login">
      <h3>Boas-vindas</h3>
      <p>Uma tela de acesso para experimentar.</p>
      <form noValidate onSubmit={submit} onInput={() => setSuccess(false)}>
        <label htmlFor="demo-email">Email</label>
        <input id="demo-email" name="email" type="email" placeholder="voce@exemplo.com" required autoComplete="off" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
        {errors.email && <p className="lab-error" id="email-error">{errors.email}</p>}
        <label htmlFor="demo-password">Senha</label>
        <div className="lab-password">
          <input id="demo-password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Pelo menos 6 caracteres" required minLength={6} autoComplete="off" aria-invalid={!!errors.password} aria-describedby={errors.password ? 'password-error' : undefined} />
          <button type="button" aria-pressed={showPassword} onClick={() => setShowPassword((value) => !value)}>{showPassword ? 'Ocultar' : 'Mostrar'}<span className="lab-sr-only"> senha</span></button>
        </div>
        {errors.password && <p className="lab-error" id="password-error">{errors.password}</p>}
        <button className="lab-button" type="submit">Testar acesso</button>
        <p className="lab-status" role="status">{success ? 'Tudo certo! Demonstração concluída; nenhuma conta foi acessada.' : ''}</p>
      </form>
      <p className="lab-note">Use dados fictícios. Este formulário é apenas uma demonstração.</p>
    </div>
  );
}
`},{id:`posicionamento`,title:`Posicionamento`,summary:`Flexbox e Grid`,description:`Mude o layout e os alinhamentos. O CSS acompanha cada escolha em tempo real.`,component:d,source:`import { useState } from 'react';

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
      <div className="lab-layout-stage" style={{ display: mode, justifyContent: justify, alignItems: align, gridTemplateColumns: mode === 'grid' ? 'repeat(3, 56px)' : undefined }} aria-label={\`Exemplo de posicionamento com \${mode === 'flex' ? 'Flexbox' : 'Grid'}\`}>
        {['A', 'B', 'C'].map((letter) => <div className="lab-layout-item" key={letter}>{letter}</div>)}
      </div>
      <pre className="lab-live-code" aria-label="CSS do posicionamento"><code>{\`display: \${mode};\\njustify-content: \${justify};\\nalign-items: \${align};\${mode === 'grid' ? '\\ngrid-template-columns: repeat(3, 56px);' : ''}\`}</code></pre>
    </div>
  );
}
`},{id:`carrossel`,title:`Carrossel`,summary:`Imagens e navegação`,description:`Navegue por imagens dos projetos usando botões, indicadores, teclado ou gestos.`,component:p,source:`import { useRef, useState } from 'react';
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
        <img src={slide.image} alt={\`Interface: \${slide.title}\`} width="1366" height="768" draggable={false} />
        <figcaption><h3>{slide.title}</h3><p>{slide.description}</p></figcaption>
      </figure>
      <div className="lab-carousel-controls">
        <button type="button" className="lab-secondary" onClick={() => move(-1)} aria-label="Imagem anterior">←</button>
        <div className="lab-carousel-dots" role="group" aria-label="Escolher imagem">
          {slides.map((item, position) => <button type="button" key={item.title} onClick={() => setIndex(position)} aria-label={\`Mostrar \${item.title}\`} aria-pressed={position === index}><span /></button>)}
        </div>
        <button type="button" className="lab-secondary" onClick={() => move(1)} aria-label="Próxima imagem">→</button>
      </div>
      <p className="lab-note" role="status">{index + 1} de {slides.length}. Use as setas do teclado ou deslize no celular.</p>
    </div>
  );
}
`},{id:`cards`,title:`Cards interativos`,summary:`Formatos e estados`,description:`Explore um card com imagem, um perfil e um card com detalhes expansíveis.`,component:h,source:`import { useState } from 'react';
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
`},{id:`nomes`,title:`Texto animado`,summary:`Seu nome em movimento`,description:`Digite um nome, escolha um efeito e repita a animação quando quiser.`,component:_,source:`import { useState } from 'react';
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
      <div className="lab-name-stage" role="img" aria-label={\`Prévia do nome: \${displayName}\`}>
        <div key={\`\${displayName}-\${effect}-\${replay}\`} className={\`lab-name-text lab-name-\${effectClass}\`} style={{ '--name-length': Array.from(displayName).length } as CSSProperties} aria-hidden="true">
          {effect === 'Digitação' ? <span className="lab-typing-line">{displayName}</span> : Array.from(displayName).map((letter, index) => <span className="lab-letter" key={index} style={{ '--letter-delay': \`\${index * 45}ms\` } as CSSProperties}>{letter === ' ' ? '\\u00a0' : letter}</span>)}
        </div>
      </div>
      <button type="button" className="lab-button" onClick={() => setReplay((current) => current + 1)}>Repetir animação</button>
      <p className="lab-note">Os efeitos respeitam a preferência de movimento reduzido do seu dispositivo.</p>
    </div>
  );
}
`}];function y(){let[e,t]=o(),n=(0,c.useRef)(null),r=v.find(t=>t.id===e.get(`exemplo`))??v[0],a=r.component;(0,c.useEffect)(()=>{let e=document.title;return document.title=`Laboratório Front-end | Vagner Silva`,window.scrollTo({top:0,behavior:`instant`}),()=>{document.title=e}},[]);function s(e){t({exemplo:e},{replace:!0,preventScrollReset:!0})}function u(e){let t=v.indexOf(r),i;if(e.key===`ArrowRight`||e.key===`ArrowDown`)i=(t+1)%v.length;else if(e.key===`ArrowLeft`||e.key===`ArrowUp`)i=(t-1+v.length)%v.length;else if(e.key===`Home`)i=0;else if(e.key===`End`)i=v.length-1;else return;e.preventDefault(),s(v[i].id),n.current?.querySelectorAll(`[role="tab"]`)[i].focus()}return(0,l.jsx)(`main`,{className:`lab-page`,children:(0,l.jsxs)(`div`,{className:`lab-container`,children:[(0,l.jsx)(i,{className:`lab-back`,to:`/projetos`,children:`← Voltar aos projetos`}),(0,l.jsxs)(`header`,{className:`lab-intro`,children:[(0,l.jsx)(`h1`,{children:`Laboratório Front-end`}),(0,l.jsx)(`p`,{children:`Pequenos projetos para explorar interfaces, layouts e animações. Escolha um exemplo e experimente.`})]}),(0,l.jsxs)(`div`,{className:`lab-workspace`,children:[(0,l.jsx)(`div`,{className:`lab-examples`,ref:n,role:`tablist`,"aria-label":`Exemplos front-end`,onKeyDown:u,children:v.map(e=>(0,l.jsxs)(`button`,{type:`button`,role:`tab`,id:`tab-${e.id}`,"aria-selected":r.id===e.id,"aria-controls":`lab-demo-panel`,tabIndex:r.id===e.id?0:-1,onClick:()=>s(e.id),children:[(0,l.jsx)(`span`,{children:e.title}),(0,l.jsx)(`span`,{children:e.summary})]},e.id))}),(0,l.jsxs)(`section`,{className:`lab-panel`,id:`lab-demo-panel`,role:`tabpanel`,"aria-labelledby":`tab-${r.id}`,tabIndex:0,children:[(0,l.jsxs)(`div`,{className:`lab-panel-heading`,children:[(0,l.jsx)(`h2`,{children:r.title}),(0,l.jsx)(`p`,{children:r.description})]}),(0,l.jsx)(`div`,{className:`lab-demo`,"data-ui":!0,children:(0,l.jsx)(a,{})},r.id),(0,l.jsxs)(`details`,{className:`lab-source`,children:[(0,l.jsx)(`summary`,{children:`Ver código React`}),(0,l.jsxs)(`p`,{children:[`Este é o componente usado nesta demonstração. Os estilos ficam em `,(0,l.jsx)(`code`,{children:`src/styles/laboratorio.css`}),`.`]}),(0,l.jsx)(`pre`,{tabIndex:0,"aria-label":`Código React: ${r.title}`,children:(0,l.jsx)(`code`,{children:r.source})})]},`source-${r.id}`)]})]}),(0,l.jsxs)(`footer`,{className:`lab-footer`,children:[(0,l.jsx)(`p`,{children:`Feito com React, TypeScript e CSS.`}),(0,l.jsx)(i,{to:`/`,children:`Conhecer o portfólio`})]})]})})}export{y as default};