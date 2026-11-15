import Image from "next/image";
import { illustrationAlt, type IllustrationId } from "@/data/portfolio";
import { AnimatedIllustration } from "@/components/animated-illustration";

export function Illustration({ id, dark = false }: { id: IllustrationId; dark?: boolean }) {
  if (id === "automation-card-player" || id === "sales-bank-comparison") {
    return <AnimatedIllustration id={id} />;
  }
  const isPortrait = id === "about-docker-engineer";
  return (
    <div className={`art-frame${dark ? " art-frame--dark" : ""}`}>
      <picture className="illustration-picture">
        <source media="(max-width: 767px)" srcSet={`/assets/illustrations/${id}-640.webp`} />
        <Image
          src={`/assets/illustrations/${id}-1200.webp`}
          alt={illustrationAlt[id]}
          width={isPortrait ? 1024 : 1200}
          height={isPortrait ? 1536 : 1200}
          sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 640px, 580px"
          className="illustration"
          data-source="Generated with OpenAI image model"
          data-subject={id}
        />
      </picture>
    </div>
  );
}
