export interface Contacto {
  nombre: string;
  email: string;
  direccion: string;
  poblacion: string;
  telefonos: string;
  redesSociales?: string;
  web?: string;
}

export interface TrabajoDestacado {
  titulo: string;
  tipo: string;
  cargo: string;
  pais: string;
  anio: number | string | null;
  urlTrailer?: string;
}

export interface CatalogItem {
  tipoRegistro: string;
  empresa: string;
  categoriaEmpresa: string[];
  contacto: Contacto;
  trabajosDestacados: TrabajoDestacado[];
}

export interface PaginatedResult<T> {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: T[];
}
