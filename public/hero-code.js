const heroCode = document.querySelector(".hero-code");
const codeToggle = document.querySelector(".hero-code-toggle");

if (heroCode && codeToggle && typeof heroCode.animate === "function" && "IntersectionObserver" in window) {
  const reducedCodeMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const codeRows = [...heroCode.querySelectorAll("code > span")];
  const typingStart = 280;
  const lineInterval = 360;
  const lineDuration = 320;
  const typingEnd = typingStart + (codeRows.length - 1) * lineInterval + lineDuration;
  const fadeStart = typingEnd + 1050;
  const cycleDuration = fadeStart + 400;
  let animations = [];
  let inView = false;
  let pausedByUser = false;

  const startCodeLoop = () => {
    const timing = { duration: cycleDuration, iterations: Infinity };
    const hiddenLine = "inset(0 100% 0 0)";
    const typedLine = "inset(0 0% 0 0)";

    codeRows.forEach((row, index) => {
      if (!row.textContent.trim()) return;
      const start = typingStart + index * lineInterval;
      animations.push(row.animate([
        { clipPath: hiddenLine, opacity: 1, offset: 0 },
        { clipPath: hiddenLine, opacity: 1, offset: start / cycleDuration, easing: `steps(${row.textContent.length}, end)` },
        { clipPath: typedLine, opacity: 1, offset: (start + lineDuration) / cycleDuration },
        { clipPath: typedLine, opacity: 1, offset: fadeStart / cycleDuration },
        { clipPath: typedLine, opacity: 0, offset: 1 },
      ], timing));
    });
  };

  const syncCodeLoop = () => {
    const still = reducedCodeMotion.matches || document.documentElement.dataset.motion === "off";
    codeToggle.hidden = still;
    if (still) {
      animations.forEach((animation) => animation.cancel());
      animations = [];
      return;
    }

    const running = inView && !document.hidden && !pausedByUser;
    if (running && !animations.length) startCodeLoop();
    animations.forEach((animation) => {
      if (running && animation.playState === "paused") animation.play();
      if (!running && animation.playState === "running") animation.pause();
    });
  };

  codeToggle.addEventListener("click", () => {
    pausedByUser = !pausedByUser;
    codeToggle.setAttribute("aria-pressed", String(pausedByUser));
    codeToggle.title = pausedByUser ? "Resume background typing" : "Pause background typing";
    syncCodeLoop();
  });
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    syncCodeLoop();
  }).observe(heroCode);
  document.addEventListener("visibilitychange", syncCodeLoop);
  reducedCodeMotion.addEventListener("change", syncCodeLoop);
  syncCodeLoop();
}
