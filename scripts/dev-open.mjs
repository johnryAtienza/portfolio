import { spawn } from "node:child_process";

const port = process.env.PORT ?? "4100";
const browserUrl = `http://localhost:${port}`;
const healthUrl = `http://127.0.0.1:${port}`;
const vinextCommand = process.platform === "win32" ? "vinext.cmd" : "./node_modules/.bin/vinext";

const server = spawn(vinextCommand, ["dev", "--port", port], {
  stdio: "inherit",
  shell: process.platform === "win32",
  env: {
    ...process.env,
    WRANGLER_LOG_PATH: ".wrangler/wrangler.log",
  },
});

let browserOpened = false;

function openBrowser() {
  if (browserOpened) return;
  browserOpened = true;

  const [command, args] = process.platform === "darwin"
    ? ["open", [browserUrl]]
    : process.platform === "win32"
      ? ["cmd", ["/c", "start", "", browserUrl]]
      : ["xdg-open", [browserUrl]];

  const browser = spawn(command, args, { detached: true, stdio: "ignore" });
  browser.unref();
}

async function waitForServer() {
  while (!browserOpened) {
    try {
      await fetch(healthUrl);
      openBrowser();
      return;
    } catch {
      if (server.exitCode !== null) return;
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
}

let serverExitCode = null;

server.on("exit", (code, signal) => {
  if (!browserOpened && code !== 0) {
    console.error(`Development server exited with ${signal ?? `code ${code}`}.`);
  }
  serverExitCode = code;
});

process.on("SIGINT", () => server.kill("SIGINT"));
process.on("SIGTERM", () => server.kill("SIGTERM"));

await waitForServer();

if (serverExitCode !== null) {
  process.exitCode = serverExitCode;
}
