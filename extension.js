/**
 * FAAAAH Error Sound Extension
 * Plays a sound when commands fail in VS Code
 *
 * Author: Sajjad Hossain
 * Website: https://sajjad-hossain.netlify.app/
 * Repository: https://github.com/sajjadhossain67/faah.git
 * License: MIT
 */

const vscode = require("vscode");
const { exec } = require("child_process");
const path = require("path");

let lastPlayed = 0;

function activate(context) {
  const soundPath = path.join(context.extensionPath, "media", "faah.mp3");

  function playSound() {
    const config = vscode.workspace.getConfiguration("faah");
    const enabled = config.get("enable");
    const cooldown = config.get("cooldown");

    if (!enabled) {
      console.log("FAAAAH: Sound disabled in settings");
      return;
    }

    const now = Date.now();
    if (now - lastPlayed < cooldown) {
      console.log("FAAAAH: Still in cooldown");
      return;
    }
    lastPlayed = now;

    console.log("FAAAAH: Playing sound!", soundPath);

    const platform = process.platform;

    if (platform === "darwin") {
      exec(`afplay "${soundPath}"`, (error) => {
        if (error) console.error("FAAAAH Error:", error);
      });
    } else if (platform === "win32") {
      // Use PowerShell Add-Type to play MP3 files
      const psScript = `Add-Type -AssemblyName presentationCore; $player = New-Object System.Windows.Media.MediaPlayer; $player.Open([System.Uri]::new('${soundPath.replace(/\\/g, "/")}', [System.UriKind]::Absolute)); $player.Play(); Start-Sleep -Seconds 3`;
      exec(`powershell -c "${psScript}"`, (error) => {
        if (error) console.error("FAAAAH Error:", error);
      });
    } else {
      exec(`mpg123 "${soundPath}"`, (error) => {
        if (error) console.error("FAAAAH Error:", error);
      });
    }
  }

  // 🔹 Detect terminal failure (when terminal closes)
  context.subscriptions.push(
    vscode.window.onDidCloseTerminal((terminal) => {
      console.log("FAAAAH: Terminal closed", terminal.exitStatus);
      if (terminal.exitStatus && terminal.exitStatus.code !== 0) {
        console.log(
          "FAAAAH: Terminal failed with code:",
          terminal.exitStatus.code,
        );
        playSound();
      }
    }),
  );

  // 🔹 Detect command failures (with shell integration)
  if (vscode.window.onDidEndTerminalShellExecution) {
    context.subscriptions.push(
      vscode.window.onDidEndTerminalShellExecution((event) => {
        console.log("FAAAAH: Command executed", event.exitCode);
        if (event.exitCode && event.exitCode !== 0) {
          console.log("FAAAAH: Command failed with code:", event.exitCode);
          playSound();
        }
      }),
    );
  } else {
    console.log(
      "FAAAAH: Shell integration not available - only terminal exit detection will work",
    );
  }

  // 🔹 Detect task failure
  context.subscriptions.push(
    vscode.tasks.onDidEndTaskProcess((event) => {
      console.log("FAAAAH: Task ended", event.exitCode);
      if (event.exitCode && event.exitCode !== 0) {
        console.log("FAAAAH: Task failed with code:", event.exitCode);
        playSound();
      }
    }),
  );

  // 🔹 Detect diagnostics errors
  context.subscriptions.push(
    vscode.languages.onDidChangeDiagnostics(() => {
      const diagnostics = vscode.languages.getDiagnostics();

      const hasErrors = diagnostics.some(([_, diag]) =>
        diag.some((d) => d.severity === vscode.DiagnosticSeverity.Error),
      );

      if (hasErrors) {
        console.log("FAAAAH: Diagnostic errors detected");
        playSound();
      }
    }),
  );

  console.log("FAAAAH Extension Activated");
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
