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
    <pre className="hero-code" aria-hidden="true">
      <code>{codeLines.map((line, index) => <span key={index}>{line}</span>)}</code>
    </pre>
  );
}
