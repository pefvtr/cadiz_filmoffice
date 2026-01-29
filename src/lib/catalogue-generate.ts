// import XLSX from "xlsx";
// import fs from "fs";
// import path from "path";

// /* =========================
//    TIPOS
// ========================= */
// export interface Produccion {
//   titulo: string;
//   tipo: string;
//   cargo: string;
//   pais: string;
//   anio: string | number | null;
//   urlTrailer: string;
// }

// export interface Contacto {
//   nombre: string;
//   email: string;
//   direccion: string;
//   poblacion: string;
//   telefonos: string;
//   redesSociales: string;
//   web: string;
// }

// export interface PersonaCatalogo {
//   tipoRegistro: string;
//   empresa: string;
//   categoriaEmpresa: string[];
//   contacto: Contacto;
//   trabajosDestacados: Produccion[];
// }

// type RowODS = Record<string, string | number | null>;

// /* =========================
//    CONFIGURACIÓN INTERNA
// ========================= */
// const CONFIG = {
//   producciones: [
//     {
//       titulo: "TÍTULO DE LA PRODUCCIÓN",
//       tipo: "Tipo de producción",
//       cargo: "Cargo",
//       pais: "País de la producción",
//       anio: "Año",
//       trailer: "URL Trailer",
//     },
//     {
//       titulo: "TÍTULO DE LA PRODUCCIÓN 2",
//       tipo: "Tipo de producción_1",
//       cargo: "Cargo_1",
//       pais: "País de la producción_1",
//       anio: "Año_1",
//       trailer: "URL Trailer_1",
//     },
//     {
//       titulo: "TÍTULO DE LA PRODUCCIÓN 3",
//       tipo: "Tipo de producción_2",
//       cargo: "Cargo_2",
//       pais: "País de la producción_2",
//       anio: "Año_2",
//       trailer: "URL Trailer_2",
//     },
//   ],
//   categorias: {
//     produccion: [
//       "PRODUCCIÓN [Ayudante Producción]",
//       "PRODUCCIÓN [Coordinación/Dirección de producción]",
//       "PRODUCCIÓN [Localizador/a]",
//       "PRODUCCIÓN [Producción]",
//       "PRODUCCIÓN [Auxiliar Producción]",
//       "PRODUCCIÓN [Fila 6]",
//     ],
//     guionDireccion: [
//       "GUION Y DIRECCIÓN [Guionista/Adaptador]",
//       "GUION Y DIRECCIÓN [Auxiliar Dirección]",
//       "GUION Y DIRECCIÓN [Ayudante Dirección/Script]",
//       "GUION Y DIRECCIÓN [Ayudante de Realización TV]",
//       "GUION Y DIRECCIÓN [Dirección/Realización TV]",
//       "GUION Y DIRECCIÓN [Dirección de Casting]",
//     ],
//     fotografiaIluminacion: [
//       "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Auxiliar Cámara Cine]",
//       "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Ayudante Cámara Cine]",
//       "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Cámara Cine]",
//       "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Dirección Fotografía/Iluminador TV]",
//       "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Operador/a Cámara TV]",
//       "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Operador/a Cámaras especiales (Steady, dron, acuática)]",
//       "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Foto-fija]",
//       "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Eléctrico/Maquinista]",
//     ],
//     maquillajePeluqueria: [
//       "MAQUILLAJE/PELUQUERÍA [Maquillaje para Cine]",
//       "MAQUILLAJE/PELUQUERÍA [Peluquería para Cine]",
//       "MAQUILLAJE/PELUQUERÍA [Caracterización FX]",
//     ],
//     sonidoMusica: [
//       "SONIDO/MÚSICA [Ayudante de Sonido]",
//       "SONIDO/MÚSICA [Técnico Sonido Directo]",
//       "SONIDO/MÚSICA [Técnico Sonido Estudio]",
//       "SONIDO/MÚSICA [Mezclador/Editor Sonido]",
//       "SONIDO/MÚSICA [Doblaje/Dirección Doblaje]",
//       "SONIDO/MÚSICA [Compositor/a]",
//     ],
//     comunicacion: [
//       "COMUNICACIÓN [Fotografía]",
//       "COMUNICACIÓN [Redacción/Jefatura de Prensa]",
//       "COMUNICACIÓN [Diseño Gráfico]",
//       "COMUNICACIÓN [Community Manager]",
//       "COMUNICACIÓN [Making Off]",
//     ],
//     varios: [
//       "VARIOS [Actor/Actriz/Especialista]",
//       "VARIOS [Coreógrafía/Bailarin/a]",
//       "VARIOS [Documentalista]",
//       "VARIOS [Traducción/Interpretación]",
//       "VARIOS [Diseño Videojuegos]",
//       "VARIOS [Vestuario/Atrezzo]",
//       "VARIOS [Servicios Aéreos]",
//       "VARIOS [Efectos Especiales]",
//       "VARIOS [Filmmaker]",
//     ],
//     empresas: [
//       " [Agencias de Colocación]",
//       " [Alojamientos / Restauración]",
//       " [Animación / Modelado 3D]",
//       " [Asistencia Sanitaria / Seguros RC]",
//       " [Cámara / Grip]",
//       " [Catering]",
//       " [Distribución]",
//       " [Efectos Especiales]",
//       " [Escenografía / Decorados]",
//       " [Grúas / Plataformas]",
//       " [Laboratorios / Edición]",
//       " [Material de Producción]",
//       " [Película / Fotografía]",
//       " [Productora / Productora Asociada]",
//       " [Servicios de Localización]",
//       " [Transporte]",
//       " [Productora Visual]",
//       " [Animales]",
//       " [Asesoría / Contabilidad]",
//       " [Asociaciones]",
//       " [Casting]",
//       " [Centros de Formación]",
//       " [Eco-Friendly / Sostenible]",
//       " [Embarcaciones]",
//       " [Estudios / Platós]",
//       " [Iluminaciones / Grupos]",
//       " [Limpieza]",
//       " [Maquillaje / Peluquería]",
//       " [Post-Producción / VFX]",
//       " [Servicios Aéreos]",
//       " [Sonido]",
//       " [Vestuario / Atrezzo]",
//       " [Fila 33]",
//       " [Fila 34]",
//       " [Fila 33]_1",
//     ],
//   },
// };

// /* =========================
//    HELPERS PRIVADOS
// ========================= */
// function extraerCategorias(row: RowODS): string[] {
//   const categorias: string[] = [];
//   const todas = Object.values(CONFIG.categorias).flat();

//   todas.forEach((campo) => {
//     const valor = row[campo];
//     if (
//       valor &&
//       valor.toString().trim() !== "" &&
//       valor.toString().trim() !== "Elija una o varias opciones"
//     ) {
//       const match = campo.match(/\[([^\]]+)\]/);
//       categorias.push(match ? match[1] : campo.trim());
//     }
//   });
//   return categorias;
// }

// /* =========================
//    FUNCIÓN EXPORTABLE
// ========================= */
// export function generarCatalogoJSON() {
//   try {
//     const odsPath = path.resolve("src/data/datos-catalogo.ods");
//     const jsonOutputPath = path.resolve("src/data/catalogo.json");

//     const workbook = XLSX.readFile(odsPath);
//     const sheet = workbook.Sheets[workbook.SheetNames[0]];
//     const rows = XLSX.utils.sheet_to_json<RowODS>(sheet, { defval: null });

//     const catalogo: PersonaCatalogo[] = rows.map((row) => {
//       const trabajosDestacados: Produccion[] = [];

//       CONFIG.producciones.forEach((p) => {
//         const titulo = row[p.titulo]?.toString().trim() ?? "";
//         if (titulo) {
//           const rawYear = row[p.anio]?.toString().trim() ?? "";
//           trabajosDestacados.push({
//             titulo,
//             tipo: row[p.tipo]?.toString().trim() ?? "",
//             cargo: row[p.cargo]?.toString().trim() ?? "",
//             pais: row[p.pais]?.toString().trim() ?? "",
//             anio: /^\d{4}$/.test(rawYear) ? Number(rawYear) : rawYear || null,
//             urlTrailer: row[p.trailer]?.toString().trim() ?? "",
//           });
//         }
//       });

//       return {
//         tipoRegistro:
//           row["EMPRESAS"]?.toString().trim() === "EMPRESAS"
//             ? "EMPRESAS"
//             : "PROFESIONALES",
//         empresa: row["Nombre de la Empresa"]?.toString().trim() ?? "",
//         categoriaEmpresa: extraerCategorias(row),
//         contacto: {
//           nombre: row["Nombre y apellidos"]?.toString().trim() ?? "",
//           email: row["E-mail"]?.toString().trim() ?? "",
//           direccion: row["Dirección Postal"]?.toString().trim() ?? "",
//           poblacion: row["Población"]?.toString().trim() ?? "",
//           telefonos: [row["Teléfono 1"], row["Teléfono 2"]]
//             .map((t) => t?.toString().trim())
//             .filter(Boolean)
//             .join(" - "),
//           redesSociales: row["Redes Sociales"]?.toString().trim() ?? "",
//           web: row["Web"]?.toString().trim() ?? "",
//         },
//         trabajosDestacados,
//       };
//     });

//     fs.writeFileSync(
//       jsonOutputPath,
//       JSON.stringify(catalogo, null, 2),
//       "utf-8",
//     );

//     console.log(
//       `✅ Catálogo generado con éxito: ${catalogo.length} registros.`,
//     );
//     return catalogo;
//   } catch (error) {
//     console.error("❌ Error generando el catálogo:", error);
//     throw error;
//   }
// }



import XLSX from "xlsx";
import fs from "fs";
import path from "path";

/* =========================
   TIPOS
========================= */
export interface Produccion {
  titulo: string;
  tipo: string;
  cargo: string;
  pais: string;
  anio: string | number | null;
  urlTrailer: string;
}

export interface Contacto {
  nombre: string;
  email: string;
  direccion: string;
  poblacion: string;
  telefonos: string;
  redesSociales: string;
  web: string;
}

export interface PersonaCatalogo {
  tipoRegistro: string;
  empresa: string;
  categoriaEmpresa: string[];
  contacto: Contacto;
  trabajosDestacados: Produccion[];
}

type RowODS = Record<string, string | number | null>;

/* =========================
   CONFIGURACIÓN INTERNA
========================= */
const CONFIG = {
  producciones: [
    {
      titulo: "TÍTULO DE LA PRODUCCIÓN",
      tipo: "Tipo de producción",
      cargo: "Cargo",
      pais: "País de la producción",
      anio: "Año",
      trailer: "URL Trailer",
    },
    {
      titulo: "TÍTULO DE LA PRODUCCIÓN 2",
      tipo: "Tipo de producción_1",
      cargo: "Cargo_1",
      pais: "País de la producción_1",
      anio: "Año_1",
      trailer: "URL Trailer_1",
    },
    {
      titulo: "TÍTULO DE LA PRODUCCIÓN 3",
      tipo: "Tipo de producción_2",
      cargo: "Cargo_2",
      pais: "País de la producción_2",
      anio: "Año_2",
      trailer: "URL Trailer_2",
    },
  ],
  categorias: {
    produccion: [
      "PRODUCCIÓN [Ayudante Producción]",
      "PRODUCCIÓN [Coordinación/Dirección de producción]",
      "PRODUCCIÓN [Localizador/a]",
      "PRODUCCIÓN [Producción]",
      "PRODUCCIÓN [Auxiliar Producción]",
      "PRODUCCIÓN [Fila 6]",
    ],
    guionDireccion: [
      "GUION Y DIRECCIÓN [Guionista/Adaptador]",
      "GUION Y DIRECCIÓN [Auxiliar Dirección]",
      "GUION Y DIRECCIÓN [Ayudante Dirección/Script]",
      "GUION Y DIRECCIÓN [Ayudante de Realización TV]",
      "GUION Y DIRECCIÓN [Dirección/Realización TV]",
      "GUION Y DIRECCIÓN [Dirección de Casting]",
    ],
    fotografiaIluminacion: [
      "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Auxiliar Cámara Cine]",
      "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Ayudante Cámara Cine]",
      "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Cámara Cine]",
      "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Dirección Fotografía/Iluminador TV]",
      "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Operador/a Cámara TV]",
      "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Operador/a Cámaras especiales (Steady, dron, acuática)]",
      "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Foto-fija]",
      "FOTOGRAFÍA/ILUMINACIÓN/MAQUINARIA [Eléctrico/Maquinista]",
    ],
    maquillajePeluqueria: [
      "MAQUILLAJE/PELUQUERÍA [Maquillaje para Cine]",
      "MAQUILLAJE/PELUQUERÍA [Peluquería para Cine]",
      "MAQUILLAJE/PELUQUERÍA [Caracterización FX]",
    ],
    sonidoMusica: [
      "SONIDO/MÚSICA [Ayudante de Sonido]",
      "SONIDO/MÚSICA [Técnico Sonido Directo]",
      "SONIDO/MÚSICA [Técnico Sonido Estudio]",
      "SONIDO/MÚSICA [Mezclador/Editor Sonido]",
      "SONIDO/MÚSICA [Doblaje/Dirección Doblaje]",
      "SONIDO/MÚSICA [Compositor/a]",
    ],
    comunicacion: [
      "COMUNICACIÓN [Fotografía]",
      "COMUNICACIÓN [Redacción/Jefatura de Prensa]",
      "COMUNICACIÓN [Diseño Gráfico]",
      "COMUNICACIÓN [Community Manager]",
      "COMUNICACIÓN [Making Off]",
    ],
    varios: [
      "VARIOS [Actor/Actriz/Especialista]",
      "VARIOS [Coreógrafía/Bailarin/a]",
      "VARIOS [Documentalista]",
      "VARIOS [Traducción/Interpretación]",
      "VARIOS [Diseño Videojuegos]",
      "VARIOS [Vestuario/Atrezzo]",
      "VARIOS [Servicios Aéreos]",
      "VARIOS [Efectos Especiales]",
      "VARIOS [Filmmaker]",
    ],
    empresas: [
      " [Agencias de Colocación]",
      " [Alojamientos / Restauración]",
      " [Animación / Modelado 3D]",
      " [Asistencia Sanitaria / Seguros RC]",
      " [Cámara / Grip]",
      " [Catering]",
      " [Distribución]",
      " [Efectos Especiales]",
      " [Escenografía / Decorados]",
      " [Grúas / Plataformas]",
      " [Laboratorios / Edición]",
      " [Material de Producción]",
      " [Película / Fotografía]",
      " [Productora / Productora Asociada]",
      " [Servicios de Localización]",
      " [Transporte]",
      " [Productora Visual]",
      " [Animales]",
      " [Asesoría / Contabilidad]",
      " [Asociaciones]",
      " [Casting]",
      " [Centros de Formación]",
      " [Eco-Friendly / Sostenible]",
      " [Embarcaciones]",
      " [Estudios / Platós]",
      " [Iluminaciones / Grupos]",
      " [Limpieza]",
      " [Maquillaje / Peluquería]",
      " [Post-Producción / VFX]",
      " [Servicios Aéreos]",
      " [Sonido]",
      " [Vestuario / Atrezzo]",
      " [Fila 33]",
      " [Fila 34]",
      " [Fila 33]_1",
    ],
  },
};

/* =========================
   HELPERS PRIVADOS
========================= */
function extraerCategorias(row: RowODS): string[] {
  const categorias: string[] = [];
  const todas = Object.values(CONFIG.categorias).flat();

  todas.forEach((campo) => {
    const valor = row[campo];
    
    // Verificar si el valor existe y es válido
    // El selector múltiple pone "Elija una o varias opciones" cuando está seleccionado
    if (
      valor &&
      valor.toString().trim() !== "" &&
      (
        valor.toString().trim() === "Elija una o varias opciones" ||
        valor.toString().trim() !== "Elija una o varias opciones"
      )
    ) {
      // Extraer el texto entre corchetes [...]
      const match = campo.match(/\[([^\]]+)\]/);
      if (match) {
        const categoria = match[1].trim();
        // Evitar duplicados
        if (!categorias.includes(categoria)) {
          categorias.push(categoria);
        }
      }
    }
  });
  
  return categorias;
}

/* =========================
   FUNCIÓN EXPORTABLE
========================= */
export function generarCatalogoJSON() {
  try {
    const odsPath = path.resolve("src/data/datos-catalogo.ods");
    const jsonOutputPath = path.resolve("src/data/catalogo.json");

    const workbook = XLSX.readFile(odsPath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json<RowODS>(sheet, { defval: null });

    const catalogo: PersonaCatalogo[] = rows.map((row) => {
      const trabajosDestacados: Produccion[] = [];

      CONFIG.producciones.forEach((p) => {
        const titulo = row[p.titulo]?.toString().trim() ?? "";
        if (titulo) {
          const rawYear = row[p.anio]?.toString().trim() ?? "";
          trabajosDestacados.push({
            titulo,
            tipo: row[p.tipo]?.toString().trim() ?? "",
            cargo: row[p.cargo]?.toString().trim() ?? "",
            pais: row[p.pais]?.toString().trim() ?? "",
            anio: /^\d{4}$/.test(rawYear) ? Number(rawYear) : rawYear || null,
            urlTrailer: row[p.trailer]?.toString().trim() ?? "",
          });
        }
      });

      return {
        tipoRegistro:
          row["EMPRESAS"]?.toString().trim() === "EMPRESAS"
            ? "EMPRESAS"
            : "PROFESIONALES",
        empresa: row["Nombre de la Empresa"]?.toString().trim() ?? "",
        categoriaEmpresa: extraerCategorias(row),
        contacto: {
          nombre: row["Nombre y apellidos"]?.toString().trim() ?? "",
          email: row["E-mail"]?.toString().trim() ?? "",
          direccion: row["Dirección Postal"]?.toString().trim() ?? "",
          poblacion: row["Población"]?.toString().trim() ?? "",
          telefonos: [row["Teléfono 1"], row["Teléfono 2"]]
            .map((t) => t?.toString().trim())
            .filter(Boolean)
            .join(" - "),
          redesSociales: row["Redes Sociales"]?.toString().trim() ?? "",
          web: row["Web"]?.toString().trim() ?? "",
        },
        trabajosDestacados,
      };
    });

    fs.writeFileSync(
      jsonOutputPath,
      JSON.stringify(catalogo, null, 2),
      "utf-8",
    );

    console.log(
      `✅ Catálogo generado con éxito: ${catalogo.length} registros.`,
    );
    console.log(`📊 Estadísticas de categorías:`);
    
    // Mostrar algunas estadísticas para verificar
    const conCategorias = catalogo.filter(p => p.categoriaEmpresa.length > 0).length;
    console.log(`   - Registros con categorías: ${conCategorias}/${catalogo.length}`);
    
    return catalogo;
  } catch (error) {
    console.error("❌ Error generando el catálogo:", error);
    throw error;
  }
}
