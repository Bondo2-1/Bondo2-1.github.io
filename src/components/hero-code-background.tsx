import { PauseIcon, PlayIcon } from "@phosphor-icons/react/ssr";

const codeLines = [
  'import { queue } from "./queue";',
  'import { processJob } from "./jobs";',
  "",
  "export async function runWorkflow(job) {",
  "  const result = await processJob(job);",
  "",
  "  if (result.ready) {",
  "    await queue.publish(result);",
  "  }",
  "  return result;",
  "}",
];

export function HeroCodeBackground() {
  return (
    <>
      <pre className="hero-code" aria-hidden="true">
        <code>{codeLines.map((line, index) => <span key={index}>{line}</span>)}</code>
      </pre>
      <button className="hero-code-toggle" type="button" aria-label="Pause background typing" aria-pressed="false" title="Pause background typing" hidden>
        <PauseIcon className="hero-code-pause" size={16} weight="regular" aria-hidden="true" />
        <PlayIcon className="hero-code-play" size={16} weight="regular" aria-hidden="true" />
      </button>
    </>
  );
}
