import type { CSSProperties } from "react";

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
      <code>
        {codeLines.map((line, index) => {
          const style = {
            "--characters": Math.max(1, line.length),
            "--typing-delay": `${280 + index * 360}ms`,
          } as CSSProperties;

          return <span key={index} style={style}>{line}</span>;
        })}
      </code>
    </pre>
  );
}
