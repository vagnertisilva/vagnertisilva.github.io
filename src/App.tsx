import { useEffect, useRef, useState } from "react";
import FotoPerfil from "./assets/vagner-logo.png";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaArrowRight
} from "react-icons/fa";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  // Fecha com ESC
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Fecha clicando fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <>
      <header
        ref={headerRef}
        className={`header ${menuOpen ? "is-open" : ""}`}
        id="header"
        aria-label="Cabeçalho"
      >
        <div className="header-container">
          <h1>VAGNER SILVA</h1>

          <div className="menu-toggle" onClick={toggleMenu} >
            ☰
          </div>

          <nav>
            <ul className="header-menu">
              <li>
                <a href="#inicio" onClick={closeMenu}>
                  Home
                </a>
              </li>

              <li>
                <a href="#sobre-mim" onClick={closeMenu}>
                  Sobre mim
                </a>
              </li>

              <li>
                <a href="#experiencia" onClick={closeMenu}>
                  Resumo
                </a>
              </li>

              <li>
                <a href="#formacao" onClick={closeMenu}>
                  Formação
                </a>
              </li>

              <li>
                <a href="#contato" onClick={closeMenu}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <span className="inicio" id="inicio" aria-label="Home"></span>
      <main className="principal" id="principal" aria-label="Introdução-Inicial">
        <div className="principal-container">
          <div className="conteudo">
            <h2>DESENVOLVEDOR FULL STACK</h2>

            <h1>
              Olá, meu nome é <br />
              Vagner Silva
            </h1>

            <a
              className="btn-contato"
              href="https://github.com/vagnertisilva"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contato
            </a>

            <a
              className="btn-curriculo"
              href="./arquivos/Curriculo-vagner-silva.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Curriculo-Vagner-Silva.pdf"
            >
              Baixar Currículo
            </a>
          </div>

          <div className="container-foto">
            <img
              src={FotoPerfil}
              alt="Foto de perfil do Vagner Silva"
              className="foto-perfil-animada"
            />
          </div>
        </div>
      </main>

      <section className="sobre-mim" id="sobre-mim" aria-label="Sobre Mim">
        <div className="titulo-wrapper">
          <span className="titulo-fundo">SOBRE MIM</span>
          <h2 className="subtitulo">Um pouco sobre mim</h2>
        </div>


        <div className="sobre-texto">
          <p>
            <strong>Eu sou Vagner Silva, desenvolvedor web e mobile.</strong>
            <br /><br />
            Sou graduado em Análise e Desenvolvimento de Sistemas, com especialização em Engenharia da Computação e Gestão em Redes de Computadores.
            Atuo na área de TI como auxiliar técnico em uma empresa de sistemas comerciais, onde adquiri experiência prática com banco de dados e suporte a aplicações.
            <br /><br />
            Possuo conhecimentos em desenvolvimento web e mobile, utilizando tecnologias como PHP, TypeScript,
            React Native e bancos de dados, com experiência na criação de aplicações pessoais.
            <br /><br />
            Sou proativo, tenho facilidade de aprendizado e estou em constante evolução,
            desenvolvendo projetos próprios voltados a controle financeiro, sistemas comerciais e aplicativos mobile.
          </p>
        </div>

      </section>

      <section className="experiencia" id="experiencia" aria-label="Experiência">

        <div className="titulo-wrapper">
          <span className="titulo-fundo">RESUMO</span>
          <h2 className="subtitulo">Aonde já trabalhei/Trabalho</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Atual</div>
            <div className="timeline-content card">
              <h4>Auxiliar Técnico em Informática</h4>
              <p className="empresa">Inforsys Informática e Sistemas LTDA</p>
              <ul>
                <li><FaArrowRight /> Suporte técnico (remoto e presencial) e Atendimento ao cliente.</li>
                <li><FaArrowRight /> Banco de dados (SQL, backup e recuperação).</li>
                <li><FaArrowRight /> Gestão de Redes e hardware.</li>
                <li><FaArrowRight /> Atuação com Sistemas ERP.</li>
              </ul>
            </div>
          </div>
        </div>


        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2017 - 2021</div>
            <div className="timeline-content card">
              <h4>Cartazista</h4>
              <p className="empresa">Rancho Supermercado</p>
              <ul>
                <li><FaArrowRight /> confecção de cartazes promocionais</li>
                <li><FaArrowRight /> Caligrafia profissional</li>
                <li><FaArrowRight /> Treinamento e capacitação de novos cartazistas</li>
              </ul>
            </div>
          </div>
        </div>


        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2014 - 2017</div>
            <div className="timeline-content card">
              <h4>Cartazista</h4>
              <p className="empresa">Mateus Supermercado</p>
              <ul>
                <li><FaArrowRight /> confecção de cartazes promocionais, informativos e de precificação</li>
                <li><FaArrowRight /> Caligrafia profissional</li>
              </ul>
            </div>
          </div>
        </div>

      </section>


      <section className="formacao" id="formacao" aria-label="Formação" >

        <div className="titulo-wrapper">
          <span className="titulo-fundo">FORMAÇÃO</span>
          <h2 className="subtitulo">Académicas e Certificações</h2>
        </div>


        <div className="formacao-container">

          <div>
            <p className="formacao-texto">
              Minha mais recente experiência acadêmica foi a{" "}
              <strong>Pós-Graduação</strong> em{" "}
              <strong>Redes de Computadores</strong>. Além disso,
              me mantenho sempre atualizado com cursos intensivos online.
            </p>

            <ul className="faculdade-lista">
              <li className="faculdade card">
                <span className="faculdade-tipo">Tecnólogo</span>

                <h3 className="faculdade-curso">
                  Análise e Desenvolvimento de Sistemas
                </h3>

                <span className="faculdade-instituicao">
                  Uninter
                </span>
              </li>

              <li className="faculdade card">
                <span className="faculdade-tipo">
                  Pós-Graduação
                </span>

                <h3 className="faculdade-curso">
                  Engenharia da Computação
                </h3>

                <span className="faculdade-instituicao">
                  Uninter
                </span>
              </li>

              <li className="faculdade card">
                <span className="faculdade-tipo">
                  Pós-Graduação
                </span>

                <h3 className="faculdade-curso">
                  Redes de Computadores
                </h3>

                <span className="faculdade-instituicao">
                  Uninter
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer>

        <div className="footer" id="contato" aria-label="Contato">

          <div className="titulo-wrapper">
            <span className="titulo-fundo">CONTATO</span>
            <h2 className="subtitulo">Fale comigo</h2>
          </div>

          <div className="footer-container">
            <p className="footer-texto">
              Estou disponível para novos projetos no momento.
              Entre em contato comigo e marcamos uma conversa.
            </p>

            <div className="icone-contato">
              <FaPhoneAlt size={25} />
              <FaWhatsapp size={28} />
              <p>+55 99 99202-5628</p>
            </div>

            <div className="icone-contato">
              <FaEnvelope size={25} />
              <p>vagnertisilva18@gmail.com</p>
            </div>

            <p>SIGA-ME</p>
            <div className="redes-sociais">

              <a
                href="https://github.com/vagnersilva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={35} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={35} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={35} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={35} />
              </a>
            </div>

          </div>

        </div>

        <div className="footer-copy" id="footer-copy">
          <p>
            Copyright © 2026 <strong>Vagner Silva.</strong> Todos os direitos reservados.
          </p>
        </div>

      </footer>
    </>
  );
}