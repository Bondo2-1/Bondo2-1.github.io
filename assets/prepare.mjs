import { cp, mkdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const source = import.meta.dirname;
const destination = path.resolve(source, "../public/assets");
const manifest = JSON.parse(await readFile(path.join(source, "manifest.json"), "utf8"));
await mkdir(path.join(destination, "illustrations"), { recursive: true });

for (const folder of ["fonts", "resume", "brands", "taste/motion", "taste/moments"]) {
  await cp(path.join(source, folder), path.join(destination, folder), { recursive: true });
}

for (const asset of manifest.illustrations) {
  const original = path.join(source, asset.original);
  const originalInfo = await stat(original);
  for (const width of asset.widths ?? [640, 1200]) {
    const output = path.join(destination, "illustrations", `${asset.id}-${width}.webp`);
    const outputInfo = await stat(output).catch(() => null);
    if (outputInfo && outputInfo.mtimeMs >= originalInfo.mtimeMs) continue;
    const image = sharp(original);
    if (!asset.preserveCanvas) image.trim({ threshold: 10 });
    await image.resize({ width, withoutEnlargement: true })
      .webp({ quality: 83, alphaQuality: 95 }).toFile(output);
  }
}

console.log(`Prepared ${manifest.illustrations.length} illustrations and the public assets.`);
