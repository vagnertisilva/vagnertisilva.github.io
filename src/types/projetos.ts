export type CategoriaProjeto = 'Front End' | 'Back End' | 'Full Stack';
import imgFinancas from '../assets/img04.png';
import imgRotas from '../assets/img03.png';
import imgSite from '../assets/img02.png';
import imgApp from '../assets/img01.png';

export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  categoria: CategoriaProjeto;
  imagemUrl: string;
  linkUrl?: string;
}

// dados simulados
export const projetosMock: Projeto[] = [
  {
    id: 1,
    titulo: 'ROTAS DE NAVEGAÇÃO',
    descricao: 'Aplicativo desenvolvido em React Native com foco nos principais padrões de navegação, incluindo Stack, Tab e Drawer Navigation.',
    categoria: 'Front End',
    imagemUrl: imgRotas,
    linkUrl: 'https://github.com/vagnertisilva/ReactNavigation/'
  },
  {
    id: 2,
    titulo: '+100 Projetos Web',
    descricao: 'Mais de 100 projetos desenvolvidos para praticar e aprimorar habilidades em desenvolvimento web. Utilizando HTML, CSS, JavaScript e alguns projetos com React Native.',
    categoria: 'Front End',
    imagemUrl: imgSite,
    linkUrl: 'https://github.com/vagnertisilva/'
  },
  {
    id: 3,
    titulo: 'APP ORGANIZADOR DE DESPESAS',
    descricao: 'Aplicativo criado para o gerenciamento de despesas pessoais. O projeto utiliza React Native, TypeScript, SQLite e AsyncStorage, servindo como um exemplo completo de integração com banco de dados em aplicações mobile.',
    categoria: 'Back End',
    imagemUrl: imgApp,
    linkUrl: 'https://vagnertisilva.github.io/meusgastos/'
  },
  {
    id: 4,
    titulo: 'SISTEMA DE FINANÇAS',
    descricao: 'Meu principal projeto: um sistema de gestão financeira desenvolvido para facilitar o controle de receitas e despesas. Possui dashboards interativos, gráficos, fluxo de caixa detalhado e categorização inteligente para uma visão completa das finanças.',
    categoria: 'Full Stack',
    imagemUrl: imgFinancas,
    linkUrl: 'https://vagnersistemas.com.br/'
  }
];