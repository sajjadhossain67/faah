# 🎵 FAAAAH Extension - Quick Start Guide

## ✅ Status: Extension Ready!

Your FAAAAH sound extension is set up and ready to test!

## 📋 What's Been Created

```
faaah/
├── extension.js          ← Main extension code
├── package.json          ← Extension manifest
├── README.md             ← Documentation
├── CHANGELOG.md          ← Version history
├── .gitignore            ← Git ignore rules
├── .vscodeignore         ← Package ignore rules
├── media/
│   └── README.md         ← **ADD YOUR faah.mp3 HERE**
├── .vscode/
│   ├── launch.json       ← Debug configuration
│   └── tasks.json        ← Test tasks
└── test-error.js         ← Test file for errors
```

## 🎯 Next Steps

### 1️⃣ **CRITICAL: Add Your Sound File**

Place a file named **`faah.mp3`** in the `media/` folder.

You can:

- Download a sound from freesound.org or zapsplat.com
- Use any MP3 scream or funny sound
- Record your own "FAAAAH" sound

### 2️⃣ **Test the Extension**

Press **F5** in VS Code to launch Extension Development Host.

In the new window, try these tests:

#### Test 1: Terminal Failure

```bash
exit 1
```

→ Should play sound! 🔊

#### Test 2: Invalid Command

```bash
npm install fakefakefakepackage
```

→ Should play sound! 🔊

#### Test 3: Syntax Error

Open `test-error.js` and uncomment the line:

```javascript
const x = ;
```

→ Should play sound! 🔊

#### Test 4: Task Failure

Run Task: Terminal → Run Task → "fail-task"
→ Should play sound! 🔊

### 3️⃣ **Configure Settings**

In the Extension Development Host window:

- Go to: File → Preferences → Settings
- Search: "FAAAAH"
- Adjust:
  - `faah.enable` - Turn on/off
  - `faah.cooldown` - Adjust cooldown (default: 2000ms)

### 4️⃣ **Package for Installation** (Optional)

Install packaging tool:

```bash
npm install -g @vscode/vsce
```

Create VSIX package:

```bash
npx vsce package
```

This creates: `faah-error-sound-0.0.1.vsix`

Install it:

```bash
code --install-extension faah-error-sound-0.0.1.vsix
```

Or: Extensions → ... → Install from VSIX

## 🔧 How It Works

The extension listens for three types of failures:

1. **Terminal Exits** - `vscode.window.onDidCloseTerminal`
   - Checks if exit code ≠ 0
2. **Task Failures** - `vscode.tasks.onDidEndTaskProcess`
   - Checks if exit code ≠ 0
3. **Diagnostic Errors** - `vscode.languages.onDidChangeDiagnostics`
   - Checks if any file has Error severity diagnostics

When detected → plays `media/faah.mp3` with platform-specific command:

- **Windows**: PowerShell Media.SoundPlayer
- **macOS**: afplay
- **Linux**: mpg123 (requires installation)

Cooldown prevents spam (default: 2 seconds).

## 🚀 Publishing to Marketplace (Optional)

1. Create account: https://marketplace.visualstudio.com/
2. Get Personal Access Token from Azure DevOps
3. Create publisher:
   ```bash
   npx vsce create-publisher your-name
   ```
4. Login:
   ```bash
   npx vsce login your-name
   ```
5. Publish:
   ```bash
   npx vsce publish
   ```

## 🎨 Customization Ideas

**Want to enhance it?** Here are some ideas:

1. **Multiple sounds** - Different sounds for different error types
2. **Volume control** - Add volume setting
3. **Custom sound upload** - Let users pick their own sound
4. **Visual notifications** - Show a popup with error count
5. **Smart detection** - Only trigger on test failures (Jest/Vitest)
6. **Meme mode** - Show random failure memes
7. **Achievement system** - Track error counts
8. **Team sync** - Share errors with team (Slack/Discord)

## 🐛 Troubleshooting

**Sound not playing?**

- Check if `faah.mp3` exists in `media/` folder
- Check system volume
- Check extension setting: `faah.enable` is true
- On Linux: Install mpg123: `sudo apt install mpg123`

**Extension not activating?**

- Check VS Code version (need 1.75.0+)
- Check for errors: Help → Toggle Developer Tools → Console

**Too many sounds?**

- Increase cooldown: Settings → `faah.cooldown` → 5000 (5 seconds)

## 📞 Need Help?

Check:

- VS Code extension development docs
- View → Output → Select "FAAAAH Extension"
- Help → Toggle Developer Tools → Console tab
- Repository: https://github.com/sajjadhossain67/faah.git

## 👤 Author

**Sajjad Hossain**

- Website: https://sajjad-hossain.netlify.app/
- GitHub: https://github.com/sajjadhossain67

## 🎉 You're Done!

Your extension is ready to make errors entertaining!

Press **F5** now and start testing! 🚀
