import catalogData from "@/data/catalogo.json";
import type { CatalogItem, PaginatedResult } from "@/types/catalogue-types";

export function getPaginatedCatalog(
  page: number = 1,
  perPage: number = 20,
): PaginatedResult<CatalogItem> {
  const total = catalogData.length;
  const totalPages = Math.ceil(total / perPage);

  // Asegurarse de que la página esté dentro del rango
  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const data = catalogData.slice(start, end) as CatalogItem[];

  return { page, perPage, total, totalPages, data };
}
