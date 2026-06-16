export interface WorkVideo {
  id: string;
  title: string;
  client: string;
  type: string;
  year: string;
  src: string;
  poster: string;
}

// Os arquivos reais ficam em /public/videos com estes nomes exatos.
// Caminhos com espaços/símbolos são codificados via encodeURI no consumo.
export const HERO_VIDEO = "/videos/Mkof Konstanz Winter.mp4";

export const WORKS: WorkVideo[] = [
  {
    id: "v1",
    title: "Vídeo 1",
    client: "Olivas de Gramado",
    type: "Cobertura de Evento",
    year: "2024",
    src: "/videos/Olivas Shortcut.mp4",
    poster: "/images/work-01-poster.png",
  },
  {
    id: "v2",
    title: "Vídeo 2",
    client: "MKOF Konstanz",
    type: "Filme de Viagem",
    year: "2024",
    src: "/videos/Mkof Konstanz Winter.mp4",
    poster: "/images/work-02-poster.png",
  },
  {
    id: "v3",
    title: "Vídeo 3",
    client: "Zandonai × Sam's Club",
    type: "Comercial",
    year: "2025",
    src: "/videos/Zandonai+Sams Club.mp4",
    poster: "/images/work-03-poster.png",
  },
  {
    id: "v4",
    title: "Vídeo 4",
    client: "Autoral",
    type: "Reel",
    year: "2025",
    src: "/videos/Img 8526.mp4",
    poster: "/images/showreel-poster.png",
  },
];

export const WA_HREF =
  "https://wa.me/5554997227310?text=Oi%20Gustavo%2C%20vim%20pelo%20site%20da%20Bona%20Films!";
export const INSTAGRAM_HREF = "https://instagram.com/gbonadeu_";
export const INSTAGRAM_HANDLE = "@gbonadeu_";
