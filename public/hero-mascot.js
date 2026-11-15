// Keep the artwork server-rendered; pointer events only update the two live eyes.
const mascot = document.querySelector("[data-hero-mascot]");
if (mascot) {
  const face = mascot.querySelector(".mascot-art");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  let visible = false;
  let tracking = false;
  let frame = 0;
  let pointer = null;

  const centerEyes = () => {
    mascot.style.removeProperty("--gaze-x");
    mascot.style.removeProperty("--gaze-y");
  };
  const updateEyes = () => {
    frame = 0;
    if (!pointer) return;
    const bounds = face.getBoundingClientRect();
    const eyeX = bounds.left + bounds.width * 0.5;
    const eyeY = bounds.top + bounds.height * 0.162;
    const dx = pointer.x - eyeX;
    const dy = pointer.y - eyeY;
    const distance = Math.hypot(dx, dy);
    const strength = Math.min(distance / Math.max(bounds.width, 1), 1);
    // Keep both eyes inside the new robot's face screen.
    mascot.style.setProperty("--gaze-x", String(distance ? (dx / distance) * strength * 0.55 : 0));
    mascot.style.setProperty("--gaze-y", String(distance ? (dy / distance) * strength * 0.22 : 0));
  };
  const followPointer = (event) => {
    if (event.pointerType === "touch") return;
    pointer = { x: event.clientX, y: event.clientY };
    if (!frame) frame = requestAnimationFrame(updateEyes);
  };
  const resetPointer = () => {
    pointer = null;
    cancelAnimationFrame(frame);
    frame = 0;
    centerEyes();
  };
  const syncMotion = () => {
    const awake = visible && !document.hidden && !reducedMotion.matches;
    mascot.dataset.awake = String(awake);
    const shouldTrack = awake && finePointer.matches;
    if (shouldTrack !== tracking) {
      tracking = shouldTrack;
      if (tracking) {
        window.addEventListener("pointermove", followPointer, { passive: true });
        document.addEventListener("pointerleave", resetPointer);
        window.addEventListener("blur", resetPointer);
      } else {
        window.removeEventListener("pointermove", followPointer);
        document.removeEventListener("pointerleave", resetPointer);
        window.removeEventListener("blur", resetPointer);
        resetPointer();
      }
    }
  };
  reducedMotion.addEventListener("change", syncMotion);
  finePointer.addEventListener("change", syncMotion);
  document.addEventListener("visibilitychange", syncMotion);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    syncMotion();
  }, { threshold: 0.1 }).observe(mascot);
  syncMotion();
}
