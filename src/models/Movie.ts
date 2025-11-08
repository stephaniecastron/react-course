import type { Categoria } from "./Categoria";
import type { Censura } from "./Censura";

export interface Movie {
  id: number;
  src: string;
  alt: string;
  titulo: string;
  categoria: Categoria;
  censura: Censura;
  genero: string;
  duracao: number;
}