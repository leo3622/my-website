# Portfolio visual direction

Design-taste-frontend settings: variance 7, motion 5, density 4.

The existing blue identity and `leo.` wordmark are preserved. The page uses a sculptural hero, offset current-work panels, expandable experience and skill details, and a large contact composition. Motion introduces content in reading order and provides interaction feedback. CSS and the browser animation API handle motion without additional dependencies.

## Optical study

- Asset: `public/images/optical-study.png`
- Created with the built-in image generation tool.
- This is conceptual artwork, not a photograph of the owner's research or equipment.
- Next.js Image and sharp serve responsive optimized versions; the original remains local.

Generation prompt:

> Use case: stylized-concept. Asset type: hero artwork for a sophisticated personal portfolio of a computer vision and hardware engineer. Create a premium photorealistic 3D studio sculpture: a large sculptural optical lens assembly, consisting of three floating concentric thick translucent icy blue glass rings around a luminous but non-neon deep blue optical glass center, with precisely machined satin silver edges. Seen from a strong three-quarter angle, diagonal axis from lower left to upper right. The parts are separated slightly in an elegant exploded assembly. Beautiful thick glass refraction, crisp caustics, convincing physical materials. Minimal seamless very pale cool gray studio background #eef2f6, soft directional studio light, subtle grounding shadows. Object fills 80 percent of a square image, all edges fully within frame. This is abstract optical art, not a branded camera or actual research device. Gallery quality art direction, restrained color palette of ice blue, marine blue and silver. No text, no lettering, no labels, no watermarks, no interface elements, no grids, no stars, no purple, no lens flare.

## Favicon

`app/icon.tsx` generates a 64px PNG with a simplified `l.` companion to the existing wordmark. It uses Next.js ImageResponse and requires no external image service or new package.
