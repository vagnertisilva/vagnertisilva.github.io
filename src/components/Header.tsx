import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const { hash } = useLocation();

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  // Fecha o menu com a tecla ESC
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Lógica para rolar até à secção correta quando muda de rota
  useEffect(() => {
    if (hash) {
      const elemento = document.getElementById(hash.replace("#", ""));
      if (elemento) {
        setTimeout(() => {
          elemento.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <header
      ref={headerRef}
      className={`header ${menuOpen ? "is-open" : ""}`}
      id="header"
      aria-label="Cabeçalho"
    >
      <div className="header-container">
        <h1>VAGNER SILVA</h1>

        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        <nav className="nav-menu">
          <ul className="header-menu">
            <li>
              <Link to="/#inicio" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/#sobre-mim" onClick={closeMenu}>Sobre mim</Link>
            </li>
            <li>
              <Link to="/#experiencia" onClick={closeMenu}>Resumo</Link>
            </li>
            <li>
              <Link to="/#formacao" onClick={closeMenu}>Formação</Link>
            </li>
            <li>
              <Link to="/projetos" onClick={closeMenu}>Projetos</Link>
            </li>
            <li>
              <Link to="/#contato" onClick={closeMenu}>Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}