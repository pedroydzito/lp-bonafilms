export interface WorkVideo {
  id: string;
  title: string;
  client: string;
  type: string;
  src: string;
  poster: string;
}

// Os arquivos reais ficam em /public/videos com estes nomes exatos.
// Caminhos com espaços/símbolos são codificados via encodeURI no consumo.
export const HERO_VIDEO = "/videos/Mkof Konstanz Winter.mp4";

export const WORKS: WorkVideo[] = [
  {
    id: "v3",
    title: "Sams Club",
    client: "Zandonai × Sam's Club",
    type: "Comercial",
    src: "/videos/Zandonai-Sams Club.mp4",
    poster: "/images/work-03-poster.png",
  },
  {
    id: "v2",
    title: "Konstanz",
    client: "MKOF Konstanz",
    type: "Making-of editorial",
    src: "/videos/Mkof Konstanz Winter.mp4",
    poster: "/images/work-02-poster.png",
  },
  {
    id: "v4",
    title: "Caxiense",
    client: "Autoral",
    type: "Institucional",
    src: "/videos/Img 8526.mp4",
    poster: "/images/showreel-poster.png",
  },
  {
    id: "v1",
    title: "Olivas Shortcut",
    client: "Olivas de Gramado",
    type: "Campanha",
    src: "/videos/Olivas Shortcut.mp4",
    poster: "/images/work-01-poster.png",
  },
];

export const WA_HREF =
  "https://wa.me/5554997227310?text=Oi%20Gustavo%2C%20vim%20pelo%20site%20da%20Bona%20Films!";
export const INSTAGRAM_HREF = "https://instagram.com/gbonadeu_";
export const INSTAGRAM_HANDLE = "@gbonadeu_";
