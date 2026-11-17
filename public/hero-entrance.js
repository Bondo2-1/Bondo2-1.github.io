import "/assets/taste/motion/motion.js";

const heroEntrance = document.querySelector(".hero[data-enter]");

if (heroEntrance) {
  const softenDetails = () => {
    if (heroEntrance.classList.contains("is-entered")) {
      observer.disconnect();
      return;
    }
    if (!heroEntrance.classList.contains("is-entering")) return;
    observer.disconnect();

    const style = getComputedStyle(heroEntrance);
    const duration = Number(style.getPropertyValue("--hero-detail-enter-ms"));
    const easing = style.getPropertyValue("--hero-detail-enter-ease").trim();
    if (!duration || !easing) return;

    for (const detail of heroEntrance.querySelectorAll(".hero-name, .hero__lead, .hero-bottom .btn")) {
      for (const animation of detail.getAnimations()) {
        const effect = animation.effect;
        if (!effect || effect.getTiming().fill !== "both") continue;

        const [start, end] = effect.getKeyframes();
        if (start?.transform === "translateY(12px)" && end?.transform === "none") {
          effect.setKeyframes([{ transform: "translateY(7px)" }, { transform: "none" }]);
        } else if (start?.opacity !== "0" || end?.opacity !== "1") {
          continue;
        }
        effect.updateTiming({ duration, easing });
      }
    }
  };

  // The kit adds the class and creates its animations in the same task.
  const observer = new MutationObserver(softenDetails);
  observer.observe(heroEntrance, { attributes: true, attributeFilter: ["class"] });
  softenDetails();
}
