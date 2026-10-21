export type Estudio = {
  id: string;
  titulo: string
  institucion: string;
  periodo: string;
  descripcion: string;
  icon: 'school' | 'book' | 'code-slash';
};

export const perfil = {
  nombre: 'Aaron Selepec Ribeiro',
  rol: 'Estudiante de programacion',
  escuela: 'E.E.S.T. N°2 "Manuel Mateo"',
  grado: 'Septimo año - Tecnicatura en Programacion',
  foto: require('../../assets/img/perfil.png'),
  presentacion:
    'Hola soy Aaron estoy en septimo año de la carrera de programacion en la E.E.S.T. N°2 "Manuel Mateo".',
  cvUrl: 'https://example.com/cv-aaron-selepec-ribeiro.pdf',
  email: 'aaronselepec2020@gmail.com',
};

export const estudios: Estudio[] = [
  {
    id: '1',
    titulo: 'Septimo año - Tecnicatura en Programacion',
    institucion: 'E.E.S.T. N°2 "Manuel Mateo"',
    periodo: '2019-2026 (en curso)',
    descripcion:
      'Secundario con orientacion en programacion.',
    icon: 'school',
  },
  {
    id: '2',
    titulo: 'Lenguajes De Programacion: HTML, CSS y JavaScript',
    institucion: 'En la Escuela',
    periodo: '2019 - 2026',
    descripcion:
      'Aprendi en base a tareas en la escuela.',
    icon: 'book',
  },
  {
    id: '3',
    titulo: 'React, React Native y SQL',
    institucion: 'Proyectos de la escuela',
    periodo: '2019 - 2026',
    descripcion:
      'Mi primera vez haciendo una pagina en React Native.',
    icon: 'code-slash',
  },
];

export const habilidadesTecnicas = [
  { id: '1', nombre: 'HTML y CSS', nivel: 50 },
  { id: '2', nombre: 'JavaScript', nivel: 25 },
  { id: '3', nombre: 'React / React Native', nivel: 25 },
  { id: '4', nombre: 'Bases de datos (SQL)', nivel: 50 },
];

export const habilidadesBlandas = [
  { id: '1', nombre: 'Ganas de aprender' },
  { id: '2', nombre: 'Trabajo en equipo' },
  { id: '3', nombre: 'Comunicacion' },
  { id: '4', nombre: 'Paciencia para resolver problemas' },
];
