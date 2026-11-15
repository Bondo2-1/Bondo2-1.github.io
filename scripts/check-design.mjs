import { spawnSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import { existsSync } from "node:fs";

const skill = process.env.TASTE_SKILL_PATH || path.join(os.homedir(), ".codex/skills/taste-skill");
if (!existsSync(skill)) throw new Error("Set TASTE_SKILL_PATH to the installed design-taste-frontend skill.");
const page = "out/index.html";
const profile = ".taste-skill/chrome-qa";
const quick = process.argv.includes("--quick");
const commands = [
  ["scripts/copy-lint.mjs", page, "--kind", "service"],
  ["scripts/consistency.mjs", page, "--root", "out", "--widths", quick ? "1440,390" : "1440,1024,820,768,390", "--rhythm-widths", quick ? "1440,390" : "1440,820,768,390", "--profile", profile, "--page", "service", "--category", "automation developer portfolio", "--primary", "Download Resume", "--out", ".taste-skill/consistency-final", ...(quick ? ["--quick"] : [])],
  ["assets/layout/check.mjs", "--url", page, "--root", "out", "--profile", profile, "--sizes", "1440x900,1024x768,820x1180,768x1024,390x844,320x844", "--shots", "shots/layout"],
  ["scripts/perf.mjs", page, "--root", "out", "--profile", profile],
  ["scripts/gate.mjs", page, "--root", "out"],
];
let failed = false;
for (const [script, ...args] of commands) {
  const result = spawnSync(process.execPath, [path.join(skill, script), ...args], { stdio: "inherit", timeout: 600_000 });
  if (result.error) console.error(result.error.message);
  if (result.status !== 0) failed = true;
}
process.exitCode = failed ? 1 : 0;
