// Only approved floating objects move; the artwork beneath them remains still.
const floatingArt = [...document.querySelectorAll("[data-floating-art]")];
if (floatingArt.length) {
  const visibleArt = new Set();
  const decodedArt = new Set();
  const pendingArt = new Map();
  const reducedArtMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const decodeArtImage = (image) => {
    if (image.complete) return image.decode();
    return new Promise((resolve, reject) => {
      const cleanup = () => {
        image.removeEventListener("load", loaded);
        image.removeEventListener("error", failed);
      };
      const loaded = () => { cleanup(); image.decode().then(resolve, reject); };
      const failed = () => { cleanup(); reject(new Error("Artwork could not load")); };
      image.addEventListener("load", loaded, { once: true });
      image.addEventListener("error", failed, { once: true });
    });
  };
  const prepareArt = (art) => {
    if (decodedArt.has(art) || pendingArt.has(art)) return;
    const pending = (async () => {
      // Paint the complete original first, then enable its clipped copies together.
      await decodeArtImage(art.querySelector(".art-stationary img"));
      art.dataset.preparing = "true";
      await new Promise(requestAnimationFrame);
      await Promise.all([...art.querySelectorAll("img")].map(decodeArtImage));
      decodedArt.add(art);
      art.dataset.prepared = "true";
      art.dataset.preparing = "false";
      syncArt();
    })().catch(() => {
      // Keep the complete still illustration if a browser cannot decode a layer.
      art.dataset.preparing = "false";
      art.dataset.prepared = "false";
      pendingArt.delete(art);
    });
    pendingArt.set(art, pending);
  };
  const syncArt = () => {
    floatingArt.forEach((art) => {
      const active = visibleArt.has(art) && !document.hidden && !reducedArtMotion.matches;
      art.dataset.floating = String(active && decodedArt.has(art));
      if (active) prepareArt(art);
    });
  };
  const artObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visibleArt.add(entry.target);
      else visibleArt.delete(entry.target);
    });
    syncArt();
  }, { threshold: 0.1 });
  floatingArt.forEach((art) => artObserver.observe(art));
  document.addEventListener("visibilitychange", syncArt);
  reducedArtMotion.addEventListener("change", syncArt);
  syncArt();
}
