# FAAAAH Error Sound Extension 🔊

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![VS Code](https://img.shields.io/badge/VS%20Code-1.75.0%2B-blue.svg)

Plays a hilarious "FAAAAH" sound whenever something fails in VS Code!

## Features

- 🔊 **Plays sound on terminal failures** - When commands exit with non-zero code
- 🔊 **Plays sound on task failures** - When VS Code tasks fail
- 🔊 **Plays sound on compile errors** - When TypeScript/JavaScript errors appear
- ⚙️ **Configurable** - Enable/disable and adjust cooldown
- 🎮 **Lightweight** - No dependencies, pure JavaScript

## Requirements

- VS Code 1.75.0 or higher
- A sense of humor 😄

## Extension Settings

This extension contributes the following settings:

- `faah.enable`: Enable/disable the FAAAAH sound (default: `true`)
- `faah.cooldown`: Cooldown between sounds in milliseconds (default: `2000`)

## Usage

1. Install the extension
2. **IMPORTANT:** Add your `faah.mp3` file to the `media/` folder of the extension
3. The extension activates automatically
4. Try failing a command: `exit 1` in terminal
5. Hear the glorious sound! 🎵

## Testing the Extension

### Test Terminal Failure

Open a terminal and run:

```bash
exit 1
```

### Test with Invalid Command

```bash
npm install @vscode/vsce
```

### Test Diagnostic Error

Create a JavaScript file with a syntax error:

```javascript
const x = ;
```

## Configuration

Access settings via: File → Preferences → Settings → Search "FAAAAH"

**Disable the extension:**

```json
"faah.enable": false
```

**Change cooldown to 5 seconds:**

```json
"faah.cooldown": 5000
```

## Known Issues

- On Linux, requires `mpg123` to be installed: `sudo apt install mpg123`
- Sound may not play if VS Code is muted or system volume is off
- Diagnostic error detection may trigger on every keystroke while typing errors

## Release Notes

### 0.0.1

Initial release of FAAAAH Error Sound Extension

- Terminal failure detection
- Task failure detection
- Diagnostic error detection
- Configurable enable/disable and cooldown

## Development

To work on this extension:

1. Clone the repository: `git clone https://github.com/sajjadhossain67/faah.git`
2. Run `npm install`
3. Press F5 to open Extension Development Host
4. Test in the new window

## Contributing

Pull requests welcome! Add more sound effects, improve detection logic, or add new features.

Repository: https://github.com/sajjadhossain67/faah.git

## Links

- **Repository**: [github.com/sajjadhossain67/faah](https://github.com/sajjadhossain67/faah.git)
- **Author Website**: [sajjad-hossain.netlify.app](https://sajjad-hossain.netlify.app/)
- **Publisher**: Sajjad19397

## License

MIT

---

**Enjoy making your errors more entertaining!** 🎉
