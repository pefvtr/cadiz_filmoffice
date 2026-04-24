# GSAP Skills (oficiales de GreenSock)

Carpeta con las **8 skills oficiales** del repo [`greensock/gsap-skills`](https://github.com/greensock/gsap-skills) descargadas localmente.

Son guías Markdown con buenas prácticas oficiales para usar GSAP correctamente. Sirven como referencia tanto para humanos como para agentes de IA.

## Contenido

| Carpeta | Contenido |
|---|---|
| [`core/`](./core/SKILL.md) | API base: `gsap.to()`, `from()`, easings, stagger, `matchMedia()`, `prefers-reduced-motion` |
| [`timeline/`](./timeline/SKILL.md) | Sequencing, position parameter, labels, defaults |
| [`scrolltrigger/`](./scrolltrigger/SKILL.md) | Scroll-linked, pinning, scrub, `batch()`, `containerAnimation` |
| [`plugins/`](./plugins/SKILL.md) | Draggable, Flip, SplitText, MorphSVG, etc. |
| [`react/`](./react/SKILL.md) | `useGSAP()`, `gsap.context()` (no usado en este proyecto Astro) |
| [`frameworks/`](./frameworks/SKILL.md) | Vue, Svelte, Nuxt (referencia) |
| [`performance/`](./performance/SKILL.md) | `quickTo()`, transforms vs layout, `will-change` |
| [`utils/`](./utils/SKILL.md) | `clamp`, `mapRange`, `wrap`, `interpolate`, etc. |
| [`llms.txt`](./llms.txt) | Resumen para modelos de lenguaje |

## Actualizar a la última versión

```bash
BASE="https://raw.githubusercontent.com/greensock/gsap-skills/main/skills"
for s in core frameworks performance plugins react scrolltrigger timeline utils; do
  curl -fsSL "$BASE/gsap-$s/SKILL.md" -o "docs/gsap-skills/$s/SKILL.md"
done
curl -fsSL "$BASE/llms.txt" -o "docs/gsap-skills/llms.txt"
```

## Licencia

Las skills son MIT, propiedad de GreenSock.
