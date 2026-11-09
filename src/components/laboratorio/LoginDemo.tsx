import { useState } from 'react';
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
