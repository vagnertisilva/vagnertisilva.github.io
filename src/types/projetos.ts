export type CategoriaProjeto = 'Front End' | 'Back End' | 'Full Stack';
import imgFinancas from '../assets/imgid04.png';

export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  categoria: CategoriaProjeto;
  imagemUrl: string;
}

// dados simulados
export const projetosMock: Projeto[] = [
  {
    id: 1,
    titulo: 'Portfolio Open Source',
    descricao: 'Este é um portfólio desenvolvido para beneficiar desenvolvedores que ainda não têm seu portfólio.',
    categoria: 'Front End',
    imagemUrl: 'https://via.placeholder.com/400x200/5A4FCF/FFFFFF?text=Imagem+do+Projeto'
  },
  {
    id: 2,
    titulo: 'YRprey',
    descricao: 'Um site modelo que simula diversas vulnerabilidades e falhas de segurança.',
    categoria: 'Front End',
    imagemUrl: 'https://via.placeholder.com/400x200/1A1A1A/FF0000?text=YRprey'
  },
  {
    id: 3,
    titulo: 'User crud',
    descricao: 'Este é um crud de usuário que visa facilitar o acesso com funcionalidades básicas.',
    categoria: 'Back End',
    imagemUrl: 'https://via.placeholder.com/400x200/0A192F/00D8FF?text=API'
  },
  {
    id: 4,
    titulo: 'SISTEMA DE FINANÇAS',
    descricao: 'Plataforma de controle financeiro desenvolvida para facilitar a tomada de decisão. Conta com dashboards interativos, gráficos de despesas, fluxo de caixa detalhado e categorização inteligente de gastos e receitas.',
    categoria: 'Full Stack',
    imagemUrl: imgFinancas
  }
];