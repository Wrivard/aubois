---
name: Preview image timing
description: Why immediate visual previews can show missing imagery even when image URLs work
---

Immediate preview screenshots can capture a page before several large eagerly loaded images finish decoding. This may show an apparently black hero or partly painted logo despite successful image responses.

**Why:** A working image URL and clean browser console did not guarantee that the first screenshot showed loaded media; using lightweight image formats, lazy loading below-the-fold assets, and preloading the hero and logo produced a complete first capture.

**How to apply:** If the preview briefly looks blank while images are loading, distinguish a timing problem from a broken image URL before changing layout or content. Keep above-the-fold images prioritized and avoid competing eager downloads.