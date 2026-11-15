import layerData from "../../assets/layers/experience-art.json";

interface ArtLayer {
  id: string;
  duration: number;
  delay: number;
  points: string;
}

interface ArtScene {
  width: number;
  height: number;
  layers: ArtLayer[];
}

export const experienceArt = layerData satisfies Record<string, ArtScene>;
export type ExperienceArtId = keyof typeof experienceArt;
