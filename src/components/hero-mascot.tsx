import Image from "next/image";
import { heroMascot } from "@/data/portfolio";

export function HeroMascot() {
  return (
    <div className="hero-mascot" data-hero-mascot data-enter-media>
      <div className="mascot-art" role="img" aria-label={heroMascot.description}>
        <picture>
          <source media="(max-width: 1023px)" srcSet={heroMascot.smallImage} />
          <Image
            src={heroMascot.image}
            width={1024}
            height={1536}
            alt=""
            className="mascot-body"
            loading="eager"
            fetchPriority="high"
            data-source="Generated with OpenAI image model"
          />
        </picture>
        <span className="mascot-eye mascot-eye--left" aria-hidden="true"><span className="mascot-eyelid"><span className="mascot-pupil" /></span></span>
        <span className="mascot-eye mascot-eye--right" aria-hidden="true"><span className="mascot-eyelid"><span className="mascot-pupil" /></span></span>
        <Image src={heroMascot.logo} width={480} height={96} alt="" className="mascot-logo" />
      </div>
    </div>
  );
}
