export type Article = {
  id: string;
  title: string;
  date?: string;
  image?: string;
  video?: string;
  externalUrl?: string;
  content?: string[];
};

export const articles: Article[] = [
  {
    id: "1",
    title: "5 razões pelas quais um oceano saudável está ligado aos direitos humanos",
    externalUrl: "https://share.google/cFJ7Fwz05M4I6Z067",
    content: [
      "Resumo: Relação entre saúde dos oceanos e direitos humanos.",
      "Introdução breve e pontos principais do artigo.",
    ],
    image: "/artigo1.jpeg",
  },
  {
    id: "2",
    title: "7 formas de combatermos a degradação do mar",
    externalUrl: "https://share.google/JbK7CVyFb8jNGXs3N",
    content: [
      "Resumo: Estratégias práticas para reduzir a degradação marinha.",
      "Ações comunitárias, políticas públicas e iniciativas de conservação.",
    ],
    image: "/artigo2.png",
  },
  {
    id: "3",
    title:
      "Combate à poluição: práticas para minimizar os impactos ao meio ambiente - Neoenergia",
    externalUrl: "https://share.google/KoDLv3fixOYSuGdJY",
    content: [
      "Resumo: Medidas para minimizar a poluição e proteger ecossistemas.",
      "Tecnologias, regulamentações e exemplos de casos de sucesso.",
    ],
    image: "/artigo3.jpg",
  },
  {
    id: "4",
    title: "18 ações práticas para você agir na Preservação do Meio Ambiente - Renapsi",
    externalUrl: "https://share.google/ZyFGmfljeMsYKrpDA",
    content: [
      "Resumo: Lista de ações cotidianas para preservar o meio ambiente.",
      "Dicas simples e efetivas que qualquer pessoa pode aplicar hoje.",
    ],
    image: "/artigo4.png",
  },
  {
    id: "5",
    title:
      "Água e surf: a importância da preservação dos oceanos para a nossa comunidade - Longboard Paradise",
    externalUrl: "https://share.google/yZZLJgJwa5cba0kuO",
    content: [
      "Resumo: Conexão entre cultura do surf e conservação marinha.",
      "Como comunidades locais podem proteger praias e ecossistemas costeiros.",
    ],
    image: "/artigo5.webp",
  },
  {
    id: "6",
    title: "25 factos chocantes sobre a poluição da água - Saber Surf",
    externalUrl: "https://share.google/DhIl8ASJ7adNIUEu0",
    content: [
      "Resumo: Fatos e estatísticas sobre a poluição hídrica global.",
      "Impactos sobre a saúde humana, vida marinha e economia local.",
    ],
    image: "/artigo6.jpg",
  },
  {
    id: "7",
    title:
      "O que aconteceria com a Terra se não existissem os oceanos? | National Geographic",
    externalUrl: "https://share.google/rui9xrUfnpUP4MA4s",
    content: [
      "Resumo: Cenário hipotético dos efeitos da ausência dos oceanos.",
      "Discussão sobre clima, biodiversidade e sobrevivência humana.",
    ],
    image: "/artigo7.webp",
  },
  {
    id: "8",
    title: "Outro artigo de referência",
    externalUrl: "https://share.google/pKiGNrsMnGbu0fveA",
    content: [
      "Resumo: Referência adicional sobre conservação e boas práticas.",
      "Sugestões de leitura complementar e recursos úteis.",
    ],
    image: "/artigo8.jpg",
  },
];