import Image from "next/image";
import type { CSSProperties } from "react";
import { experienceArt, type ExperienceArtId } from "@/data/experience-art";
import { illustrationAlt } from "@/data/portfolio";

function ArtImage({ id }: { id: ExperienceArtId }) {
  return (
    <>
      <source media="(max-width: 360px)" srcSet={`/assets/illustrations/${id}-480.webp`} />
      <source media="(max-width: 1023px)" srcSet={`/assets/illustrations/${id}-560.webp`} />
      <source media="(max-height: 800px)" srcSet={`/assets/illustrations/${id}-800.webp`} />
      <Image
        src={`/assets/illustrations/${id}-960.webp`}
        alt=""
        width={1254}
        height={1254}
        sizes="(max-width: 767px) calc(100vw - 80px), (max-width: 1023px) 292px, 492px"
        data-source="Generated with OpenAI image model"
      />
    </>
  );
}

export function AnimatedIllustration({ id }: { id: ExperienceArtId }) {
  const scene = experienceArt[id];
  const maskId = `${id}-stationary-mask`;
  return (
    <div className="art-frame animated-art-frame">
      <div className={`art-stage art-stage--${id}`} role="img" aria-label={illustrationAlt[id]} data-floating-art>
        <svg className="art-mask-definitions" width="0" height="0" aria-hidden="true" focusable="false">
          <defs>
            <mask id={maskId} x="0" y="0" width="1" height="1" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox" style={{ maskType: "luminance" }}>
              <rect width="1" height="1" fill="white" />
              {scene.layers.map((layer) => <polygon key={layer.id} points={layer.points} fill="black" />)}
            </mask>
            {scene.layers.map((layer) => (
              <clipPath key={layer.id} id={`${id}-${layer.id}-clip`} clipPathUnits="objectBoundingBox">
                <polygon points={layer.points} />
              </clipPath>
            ))}
          </defs>
        </svg>
        <picture className="art-layer art-stationary" style={{ mask: `url(#${maskId})` }}>
          <ArtImage id={id} />
        </picture>
        {scene.layers.map((layer) => (
          <div
            className="art-layer floating-object"
            key={layer.id}
            data-floating-object={layer.id}
            aria-hidden="true"
            style={{ "--float-duration": `${layer.duration}s`, "--float-delay": `${layer.delay}s` } as CSSProperties}
          >
            <picture className="art-layer" style={{ clipPath: `url(#${id}-${layer.id}-clip)` }}>
              <ArtImage id={id} />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
}
